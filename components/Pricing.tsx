'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import Button from './Button'

export default function Pricing() {
  return (
    <Section id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-dark-500 text-sm mb-4 uppercase tracking-wider">Pricing</p>
        <h2 className="heading-section">
          Pricing that's so <span className="italic-accent gradient-text">simple.</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto text-dark-300">
          We like to keep things simple with one, limitless plan.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Tier */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card border-dark-700"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="text-5xl font-bold mb-4">
              $0<span className="text-2xl text-dark-400">/month</span>
            </div>
            <p className="text-dark-400">Perfect for getting started</p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>10 captions per day</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>Standard quality</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>Basic support</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-dark-600">✗</span>
              <span className="text-dark-500">API access</span>
            </li>
          </ul>

          <Button variant="secondary" className="w-full" href="#upload">
            Start Free
          </Button>
        </motion.div>

        {/* Premium Tier */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card border-primary-600 relative"
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>

          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2 text-green-500 text-sm">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              <span>3 spots left</span>
            </div>
            <div className="text-6xl font-normal mb-2">
              $2,989<span className="text-2xl text-dark-400">/month</span>
            </div>
            <p className="text-dark-400">One request at a time. Pause or cancel anytime.</p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span className="font-semibold">Unlimited captions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>Highest quality</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>Priority support</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>API access</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-500">✓</span>
              <span>Batch processing</span>
            </li>
          </ul>

          <Button className="w-full" href="#upload">
            Get Started
          </Button>

          <div className="mt-4 text-center">
            <span className="text-sm text-primary-400 font-semibold">
              🔥 Only 3 spots left this month
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

