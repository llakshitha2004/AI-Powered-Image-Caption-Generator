import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// OpenAI API key is loaded from .env.local file
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    // Parse the multipart form data
    const formData = await req.formData()
    const imageFile = formData.get('image') as File
    
    if (!imageFile) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    // Convert File to base64
    const bytes = await imageFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString('base64')
    const mimetype = imageFile.type

    // Validate image size (max 10MB base64 ~ 7.5MB original)
    if (base64.length > 13000000) {
      return NextResponse.json(
        { error: 'Image too large. Maximum size is 10MB.' },
        { status: 400 }
      )
    }

    // Create data URL for OpenAI
    const dataUrl = `data:${mimetype};base64,${base64}`

    // Call OpenAI GPT-4o Vision API
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Provide a concise, natural caption for this image in 2-3 sentences. Focus on the key elements: main subject, action, setting, and mood. Be descriptive but brief.',
            },
            {
              type: 'image_url',
              image_url: {
                url: dataUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 150,
    })

    const caption = response.choices[0]?.message?.content || 'Unable to generate caption'

    return NextResponse.json({
      success: true,
      caption,
    })
  } catch (error: any) {
    console.error('Error generating caption:', error)

    // Handle specific OpenAI errors
    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Invalid OpenAI API key. Please check your configuration.' },
        { status: 401 }
      )
    }

    if (error.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: error.message || 'Failed to generate caption. Please try again.' },
      { status: 500 }
    )
  }
}

