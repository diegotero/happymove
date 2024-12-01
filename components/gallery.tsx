'use client'

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryImages = [
  "/placeholder.svg?height=600&width=800&text=Gym1",
  "/placeholder.svg?height=600&width=800&text=Gym2",
  "/placeholder.svg?height=600&width=800&text=Gym3",
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-12">Nuestras Instalaciones</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, i) => (
            <div key={i} className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={src}
                alt={`Instalación del gimnasio ${i + 1}`}
                fill
                className="object-cover cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0">
          {selectedImage && (
            <div className="relative aspect-w-16 aspect-h-9">
              <Image
                src={selectedImage}
                alt="Instalación del gimnasio seleccionada"
                fill
                objectFit="contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

