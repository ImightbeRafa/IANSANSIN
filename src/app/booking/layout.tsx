// src/app/booking/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentoría con Ian Kupferschmidt',
  description: 'Transforma tu estrategia de contenido con mentoría personalizada. Programa tu consulta gratuita y acelera tu crecimiento profesional.',
  openGraph: {
    title: 'Reserva tu Mentoría con Ian Kupferschmidt',
    description: 'Contenido de Alto Rendimiento - Mentoría Personalizada',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}