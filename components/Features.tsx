'use client'

import { motion } from 'framer-motion'
import Section from './Section'

const features = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="url(#grad1)"/>
        <circle cx="9" cy="10" r="1.5" fill="white"/>
        <circle cx="15" cy="10" r="1.5" fill="white"/>
        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6"/>
            <stop offset="100%" stopColor="#6C47FF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'AI-Powered Captions',
    description: 'Using VGG16/MobileNetV2 with LSTM and attention mechanism, trained on Flickr8k dataset for accurate captions.',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#grad2)"/>
        <path d="M2 17L12 22L22 17" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12L12 17L22 12" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4"/>
            <stop offset="100%" stopColor="#3B82F6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Unlimited Uploads',
    description: 'No limits on the number of images you can caption. Upload as many as you need.',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#grad3)"/>
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B"/>
            <stop offset="100%" stopColor="#EF4444"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Get captions in seconds. Our optimized pipeline ensures rapid processing.',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="url(#grad4)" strokeWidth="2"/>
        <circle cx="12" cy="12" r="6" fill="url(#grad4)"/>
        <circle cx="12" cy="12" r="2" fill="white"/>
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899"/>
            <stop offset="100%" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'High Accuracy',
    description: 'State-of-the-art AI model trained on billions of images for precise descriptions.',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3C15.1 5.9 15.6 5.7 16.2 5.7C17.4 5.7 18.3 6.6 18.3 7.8C18.3 8.4 18.1 8.9 17.7 9.3L9 18L5 19L6 15L14.7 6.3Z" fill="url(#grad5)"/>
        <path d="M5 19L9 18L17.7 9.3" stroke="url(#grad5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981"/>
            <stop offset="100%" stopColor="#06B6D4"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Easy Integration',
    description: 'Simple API for developers. Integrate caption generation into your workflow.',
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="url(#grad6)" strokeWidth="2"/>
        <path d="M8 2V6M16 2V6M4 10H20" stroke="url(#grad6)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="15" r="2" fill="url(#grad6)"/>
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6"/>
            <stop offset="100%" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Customizable Outputs',
    description: 'Get detailed or concise captions based on your needs. Fully adaptable.',
  },
]

export default function Features() {
  return (
    <Section id="features" className="bg-dark-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="heading-section">
          Reasons you'll <span className="italic-accent gradient-text">love us.</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto">
          Everything you need to generate perfect captions for your images, powered by cutting-edge AI technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              rotateX: 5,
              rotateY: 5,
              scale: 1.05,
            }}
            style={{ perspective: 1000 }}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-dark-900 border border-dark-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-primary-600/50 group-hover:shadow-2xl group-hover:shadow-primary-600/20">
              {/* Icon container with 3D effect */}
              <motion.div
                className="mb-6 relative"
                whileHover={{ 
                  rotateY: 15,
                  rotateX: -15,
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: 1000 }}
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-purple/30 rounded-xl blur-lg" />
                
                {/* Icon */}
                <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 border border-dark-700 group-hover:border-primary-600/50 transition-all duration-300">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-dark-400 leading-relaxed group-hover:text-dark-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

