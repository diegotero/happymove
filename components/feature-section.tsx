import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Dumbbell } from 'lucide-react'

export function FeatureSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-12">¿Por qué elegirnos?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Horarios Flexibles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Abierto de 6:00 AM a 10:00 PM todos los días para adaptarnos a tu agenda.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Ubicación Privilegiada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Fácil acceso y estacionamiento gratuito para todos nuestros miembros.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Dumbbell className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Entrenamiento Personalizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Entrenadores expertos para guiar tu progreso y ayudarte a alcanzar tus metas.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

