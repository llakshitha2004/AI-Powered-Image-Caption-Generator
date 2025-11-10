'use client'

import { motion } from 'framer-motion'
import Section from './Section'

const steps = [
  {
    number: '01',
    title: 'Upload Your Images',
    description: 'Drag and drop or click to upload your images. Supports JPG, PNG, and WebP formats.',
  },
  {
    number: '02',
    title: 'AI Generates Captions',
    description: 'Our VGG16+LSTM model with attention mechanism analyzes your images and generates accurate, natural captions instantly.',
  },
  {
    number: '03',
    title: 'Use & Download',
    description: 'Copy the captions, revise if needed, or download them. That simple.',
  },
]

export default function Process() {
  return (
    <Section id="process">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-dark-500 text-sm mb-4 uppercase tracking-wider">Process</p>
        <h2 className="heading-section">
          Your captions, <span className="italic-accent gradient-text">effortlessly.</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto text-dark-300">
          Begin your caption journey in three effortless steps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary-600 to-transparent -translate-x-1/2" />
            )}

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mb-6"
              >
                <div className="text-6xl font-bold gradient-text">{step.number}</div>
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-dark-400 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

