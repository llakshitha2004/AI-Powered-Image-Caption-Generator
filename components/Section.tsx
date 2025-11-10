'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  containerClassName?: string
}

export default function Section({ children, id, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`section-container ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  )
}

