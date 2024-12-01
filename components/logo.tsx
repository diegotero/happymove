import Image from 'next/image'

export function Logo() {
  return (
    <div className="relative w-32 h-12">
      <Image
        src="/placeholder.svg?text=HappyMove+Logo"
        alt="HappyMove Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

