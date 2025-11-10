'use client'

import { motion } from 'framer-motion'
import Section from './Section'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Manager',
    company: 'TechFlow Inc',
    rating: 5,
    text: 'Limitless Captions has transformed how we handle image descriptions. The AI is incredibly accurate and saves us hours every week. Highly recommended!',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'E-commerce Director',
    company: 'ShopNow',
    rating: 5,
    text: 'We process thousands of product images monthly. This tool generates perfect descriptions instantly. The quality is outstanding and the time savings are massive.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Social Media Lead',
    company: 'BrandVision',
    rating: 5,
    text: 'The captions are natural, engaging, and SEO-friendly. It\'s like having a professional copywriter on demand. Game changer for our content strategy!',
    avatar: '👩‍🎨',
  },
]

const featuredLogos = [
  'TensorFlow',
  'VGG16',
  'LSTM',
  'Next.js',
  'Tailwind',
]

export default function Testimonials() {
  return (
    <Section className="bg-dark-900/30">
      {/* Featured Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-dark-500 text-sm mb-8 uppercase tracking-wider">
          Our captions are powered by:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {featuredLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-dark-400 hover:text-white transition-colors duration-300 text-xl font-semibold"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-dark-900 border border-dark-800 rounded-2xl p-8 hover:border-primary-600/50 transition-all duration-300"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-dark-300 leading-relaxed mb-6">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-purple flex items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-dark-400">{testimonial.role}</p>
                <p className="text-xs text-dark-500">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

