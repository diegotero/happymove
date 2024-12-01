import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-primary">
            Servicios
          </Link>
          <Link href="#gallery" className="text-sm font-medium text-gray-600 hover:text-primary">
            Galería
          </Link>
          <Link href="#location" className="text-sm font-medium text-gray-600 hover:text-primary">
            Ubicación
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-2 mb-8">
              <Logo />
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-primary">
                Servicios
              </Link>
              <Link href="#gallery" className="text-sm font-medium text-gray-600 hover:text-primary">
                Galería
              </Link>
              <Link href="#location" className="text-sm font-medium text-gray-600 hover:text-primary">
                Ubicación
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Button 
          asChild 
          className="ml-4 bg-primary hover:bg-primary/90 text-white"
        >
          <Link href="#contact">Empezá Ahora</Link>
        </Button>
      </div>
    </header>
  )
}

