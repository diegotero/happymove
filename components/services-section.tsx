import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-primary/10 to-white border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Entrenamiento Funcional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Clases personalizadas en grupo que se adaptan a tus necesidades y objetivos. Mejorá tu fuerza, flexibilidad y resistencia en un ambiente motivador y de apoyo mutuo.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-secondary/10 to-white border-secondary/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-secondary">Planes de Entrenamiento a Distancia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Programas de ejercicios diseñados específicamente para vos, que podés realizar desde casa o donde te encuentres. Incluye seguimiento y ajustes periódicos para garantizar tu progreso.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary/10 to-white border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Planes para Running y Trail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Ya sea que te estés preparando para tu primera carrera o buscando mejorar tus tiempos, nuestros planes te ayudarán a alcanzar tus metas en running y trail running de manera segura y eficiente.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

