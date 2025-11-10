'use client'

import { motion } from 'framer-motion'
import { useState, useRef, DragEvent, ChangeEvent } from 'react'
import Section from './Section'
import Button from './Button'

interface CaptionResult {
  imageUrl: string
  caption: string
  filename: string
}

export default function Upload() {
  const [dragActive, setDragActive] = useState(false)
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [captions, setCaptions] = useState<CaptionResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    setError(null)

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith('image/')
    )

    if (files.length > 0) {
      processFiles(files)
    } else {
      setError('Please upload valid image files (JPG, PNG, WebP, GIF)')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(null)

    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).filter((file) =>
        file.type.startsWith('image/')
      )
      if (files.length > 0) {
        processFiles(files)
      } else {
        setError('Please upload valid image files (JPG, PNG, WebP, GIF)')
      }
    }
  }

  const processFiles = (files: File[]) => {
    setImages(files)
    setCaptions([])

    // Generate previews
    const previewUrls: string[] = []
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        previewUrls.push(reader.result as string)
        if (previewUrls.length === files.length) {
          setPreviews(previewUrls)
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const handleGenerate = async () => {
    if (images.length === 0) return

    setLoading(true)
    setError(null)
    setCaptions([])

    try {
      const results: CaptionResult[] = []

      for (let i = 0; i < images.length; i++) {
        const formData = new FormData()
        formData.append('image', images[i])

        const response = await fetch('/api/generate-caption', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to generate caption')
        }

        const data = await response.json()
        results.push({
          imageUrl: previews[i],
          caption: data.caption,
          filename: images[i].name,
        })

        setCaptions([...results])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setImages([])
    setPreviews([])
    setCaptions([])
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Caption copied to clipboard!')
  }

  return (
    <Section id="upload">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="heading-section">
          Try it <span className="italic-accent gradient-text">now.</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          Upload your images and see the magic happen. Instant AI-powered captions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {/* Upload Area */}
        {previews.length === 0 && (
          <div
            className={`file-upload-area ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleChange}
            />

            <motion.div
              animate={{
                scale: dragActive ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {dragActive ? 'Drop your images here' : 'Upload images'}
              </h3>
              <p className="text-dark-400 mb-4">
                Drag and drop or click to browse
              </p>
              <p className="text-sm text-dark-500">
                JPG, PNG, WebP, GIF • Max 10MB
              </p>
            </motion.div>
          </div>
        )}

        {/* Image Previews */}
        {previews.length > 0 && captions.length === 0 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {previews.map((preview, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-dark-700"
                >
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleGenerate} disabled={loading}>
                {loading ? 'Generating...' : 'Generate captions'}
              </Button>
              <Button variant="secondary" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="inline-block text-6xl mb-4"
            >
              ⚡
            </motion.div>
            <p className="text-xl font-semibold">Generating captions...</p>
            <p className="text-dark-400 mt-2">
              Processing {captions.length + 1} of {images.length}
            </p>
          </motion.div>
        )}

        {/* Results */}
        {captions.length > 0 && !loading && (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">Generated Captions</h3>
              <Button variant="secondary" onClick={handleClear}>
                Upload New Images
              </Button>
            </div>

            {captions.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-dark-700">
                    <img
                      src={result.imageUrl}
                      alt={result.filename}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold mb-2 text-dark-300">
                      {result.filename}
                    </h4>
                    <div className="flex-1 bg-dark-800 rounded-lg p-4 mb-4">
                      <p className="text-white leading-relaxed">
                        {result.caption}
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => copyToClipboard(result.caption)}
                      className="w-full text-sm"
                    >
                      📋 Copy Caption
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-400"
          >
            ⚠️ {error}
          </motion.div>
        )}
      </motion.div>
    </Section>
  )
}

