'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from './Section'

const faqs = [
  {
    question: 'How does the AI generate captions?',
    answer: 'We use a deep learning model combining VGG16 for feature extraction and LSTM with attention mechanism for caption generation. The model is trained on the Flickr8k dataset and generates natural, accurate captions in seconds.',
  },
  {
    question: 'Is there a limit to uploads?',
    answer: 'Free users get 10 captions per day. Premium users have truly unlimited uploads with no restrictions.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'We support all common image formats including JPG, PNG, WebP, and GIF. Images up to 10MB are supported.',
  },
  {
    question: 'Can I customize the caption style?',
    answer: 'Yes! Premium users can adjust caption length, tone, and detail level. We\'re also working on more customization options.',
  },
  {
    question: 'How accurate are the captions?',
    answer: 'Our VGG16+LSTM model with attention mechanism is trained on thousands of image-caption pairs, offering high accuracy. However, AI-generated captions should be reviewed for critical applications.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. Images are processed securely and not stored permanently. We follow industry best practices for data security and privacy.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq" className="bg-dark-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-section">
          Frequently asked <span className="italic-accent gradient-text">questions.</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          Everything you need to know about our AI caption generator.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold flex-1">{faq.question}</h3>
              <motion.svg
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 flex-shrink-0 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </div>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-dark-400 mt-4 leading-relaxed">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

