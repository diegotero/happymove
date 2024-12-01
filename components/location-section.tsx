import Link from "next/link"
import { PhoneIcon as WhatsApp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function LocationSection() {
  const weekdayHours = [
    { day: "Lunes a Viernes", hours: "7:00 a.m. – 10:00 a.m. | 3:00 p.m. – 8:00 p.m." },
  ]

  return (
    <section id="location" className="py-20 sm:py-32 bg-gray-50">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Encontranos</h2>
            <p className="text-lg text-gray-600 mb-8">
              Juan de Avila y Zárate 2034 Planta baja "C"<br />
              X5009PKB Córdoba
            </p>
            <div className="mb-12">
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-white">
                  <WhatsApp className="h-5 w-5" />
                  Chateá por WhatsApp
                </Button>
              </Link>
            </div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Horarios de atención</h3>
                <div className="space-y-4">
                  {weekdayHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA5ePBI0BEUCNUCPV9RryaaU9kRfyVHhpM&q=HappyMove+(Estudio+de+entrenamiento)@-31.3608007,-64.239586,15z`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

