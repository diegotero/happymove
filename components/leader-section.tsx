import Image from "next/image"

export function LeaderSection() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <Image
              src="/placeholder.svg?height=400&width=400&text=Gabriela"
              alt="Gabriela, Profesora líder"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Conocé a Gabriela</h2>
            <h3 className="text-xl text-primary mb-4">Profesora líder de HappyMove</h3>
            <p className="text-gray-600 mb-6">
              Con más de 10 años de experiencia en el mundo del fitness, Gabriela es una apasionada
              del entrenamiento funcional y el bienestar integral. Su enfoque se centra en ayudar a
              cada persona a alcanzar su máximo potencial, combinando técnicas de entrenamiento
              avanzadas con una profunda comprensión de la biomecánica y la nutrición.
            </p>
            <blockquote className="text-lg font-medium text-gray-900 italic">
              "Mi pasión es ver a mis alumnos superar sus límites y transformar sus vidas a través
              del movimiento y el ejercicio. En HappyMove, creamos más que rutinas; formamos una
              comunidad comprometida con el bienestar y el crecimiento personal."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

