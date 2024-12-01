import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entusiasta del fitness",
    content: "HappyMove ha transformado completamente mi viaje fitness. ¡Los entrenadores son excepcionales y el ambiente es motivador!",
    image: "/placeholder.svg?height=100&width=100&text=SJ"
  },
  {
    name: "Mike Thompson",
    role: "Corredor de maratón",
    content: "He estado en muchos gimnasios, pero HappyMove se destaca. El equipamiento es de primera y la comunidad es increíblemente solidaria.",
    image: "/placeholder.svg?height=100&width=100&text=MT"
  },
  {
    name: "Emily Chen",
    role: "Instructora de yoga",
    content: "Como instructora de yoga, aprecio el ambiente limpio y tranquilo que HappyMove proporciona. Es perfecto para todo tipo de entrenamientos.",
    image: "/placeholder.svg?height=100&width=100&text=EC"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-12">Lo que dicen nuestros miembros</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-primary mb-4">{testimonial.role}</p>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

