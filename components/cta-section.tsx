import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PhoneIcon as WhatsApp } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contact" className="bg-primary py-20 sm:py-32">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Comenzá Tu Transformación Hoy</h2>
        <p className="text-xl text-primary-foreground mb-10">
          Contactanos y transformá tu vida con nuestra guía experta
        </p>
        <Button asChild size="lg" variant="secondary" className="text-primary">
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <WhatsApp className="mr-2 h-5 w-5" />
            Contactanos Ahora por WhatsApp
          </Link>
        </Button>
      </div>
    </section>
  )
}

