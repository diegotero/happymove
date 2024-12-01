import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary shadow-lg transition-all hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      aria-label="Contacta con HappyMove en WhatsApp"
    >
      <WhatsappIcon className="h-6 w-6" />
    </Link>
  )
}

