// src/app/page.tsx
import HomePage from '@/app/components/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ian Kupferschmidt | High Performance Content Mentor',
  description: 'Transform your business with expert content mentorship. Based in Costa Rica, specializing in high-performance content strategy and implementation.',
  keywords: 'content strategy, mentorship, Costa Rica, high performance content, digital marketing',
}

export default function Home() {
  return <HomePage />
}