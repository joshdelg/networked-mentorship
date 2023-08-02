import Image from 'next/image'

import Hero from '@/components/hero'
import Steps from '@/components/steps'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Steps />
    </main>
  )
}
