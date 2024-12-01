import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, PhoneIcon as WhatsApp, Clock, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-black">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Gym interior"
            width={1600}
            height={800}
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Body,<br />Transform Your Life
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Professional training, state-of-the-art equipment, and personalized programs to help you achieve your fitness goals
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="https://wa.me/1234567890" target="_blank">
                <Button size="lg" className="gap-2">
                  <WhatsApp className="h-5 w-5" />
                  Contact Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white/10 text-white">
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Flexible Hours</h3>
                <p className="mt-2 text-muted-foreground">Open 6:00 AM - 10:00 PM daily to fit your schedule</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <MapPin className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Prime Location</h3>
                <p className="mt-2 text-muted-foreground">Easy access with free parking for members</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Phone className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Personal Training</h3>
                <p className="mt-2 text-muted-foreground">Expert trainers ready to guide your fitness journey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Facility</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=300&width=400&text=Gym${i + 1}`}
                alt={`Gym facility ${i + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Find Us</h2>
              <p className="mt-4 text-muted-foreground">
                123 Fitness Street<br />
                Your City, ST 12345
              </p>
              <div className="mt-8">
                <Link href="https://wa.me/1234567890" target="_blank">
                  <Button className="gap-2">
                    <WhatsApp className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold">Hours</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[400px] rounded-lg bg-muted">
              {/* Replace with your preferred map implementation */}
              <div className="flex h-full items-center justify-center">
                <Link 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  View on Google Maps
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Start Your Fitness Journey Today</h2>
          <p className="mt-4 text-lg">
            Get in touch with us and transform your life with our expert guidance
          </p>
          <div className="mt-8">
            <Link href="https://wa.me/1234567890" target="_blank">
              <Button size="lg" variant="secondary" className="gap-2">
                <WhatsApp className="h-5 w-5" />
                Contact Now on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

