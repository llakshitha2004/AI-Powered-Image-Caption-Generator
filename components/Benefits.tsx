'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import Card from './Card'

const benefits = [
  {
    title: 'Fast Delivery',
    description: 'Get captions in seconds, not hours. Perfect for time-sensitive projects.',
  },
  {
    title: 'Quality Assured',
    description: 'AI-generated captions that are accurate, natural, and context-aware.',
  },
  {
    title: 'Truly Limitless',
    description: 'No caps on uploads. Process hundreds or thousands of images seamlessly.',
  },
  {
    title: 'Always Available',
    description: '24/7 access to caption generation. No waiting, no downtime.',
  },
]

const useCases = [
  'E-commerce Product Images',
  'Social Media Content',
  'Blog & Website Images',
  'Marketing Materials',
  'Accessibility Alt Text',
  'Image Databases',
]

export default function Benefits() {
  return (
    <Section id="benefits" className="bg-dark-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-dark-500 text-sm mb-4 uppercase tracking-wider">Benefits</p>
          <h2 className="heading-section mb-8">
            Fast, quality & <span className="italic-accent gradient-text">limitless.</span>
          </h2>
          <p className="text-body mb-8">
            We've built the perfect solution for anyone who needs reliable, high-quality image captions at scale.
          </p>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary-600" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-dark-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Use Cases */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <p className="text-dark-500 text-sm mb-4 uppercase tracking-wider">Solution</p>
            <h3 className="text-3xl font-normal mb-6">
              All your <span className="italic-accent">caption</span> needs.
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-dark-300"
                >
                  <span className="text-primary-500">✓</span>
                  <span>{useCase}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-dark-800">
              <p className="text-dark-400 text-sm">
                <span className="font-semibold text-white">Powered by VGG16 + LSTM</span> — Deep learning model with attention mechanism trained on Flickr8k dataset.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

