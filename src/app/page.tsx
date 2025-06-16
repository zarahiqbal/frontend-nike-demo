

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { useApi } from "../../hooks/use-api"
import { useSearchParams } from "next/navigation"
import { CartDrawer } from "../../components/ui/cart-drawer"

type ApiResponse = {
  data: Record<string, any>[]
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category")?.toLowerCase() || "all"

  const { data: productsData, loading } = useApi<ApiResponse>(
    selectedCategory && selectedCategory !== "all"
      ? `https://elegant-duck-3bccb7b995.strapiapp.com/api/products?filters[categories][slug][$eq]=${selectedCategory}&populate=*`
      : "https://elegant-duck-3bccb7b995.strapiapp.com/api/products?populate=*"
  )

  const { data: categoriesData } = useApi<ApiResponse>(
    "https://elegant-duck-3bccb7b995.strapiapp.com/api/categories?populate=*"
  )

  const shopCategories = [
    { name: "Men", slug: "men", image: "/images/men.webp" },
    { name: "Women", slug: "women", image: "/images/women.webp" },
    { name: "Kids", slug: "kids", image: "/images/kids.jpg" },
  ]

  return (
    
    <div className="min-h-screen bg-white">
      <CartDrawer/>
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
          <source src="/images/sample.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">FEAR NOTHING</h1>
            <p className="text-lg md:text-xl mb-8">The 2025 National Team Collections have arrived.</p>
            <Link
              href="/products?category=fear-nothing"
              className="inline-block bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 text-base rounded-full"
            >
              Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Frames */}
      <section className="w-full px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mbappe Frame */}
        <div className="relative h-[500px] bg-black rounded-lg overflow-hidden">
          <Image src="/images/mbappe.jpg" alt="Mbappe" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-black">
            <p className="text-xl mb-2">Athlete Picks</p>
            <h2 className="text-5xl font-bold mb-8">Kylian Mbappe</h2>
            <Link href="/products?category=mbappe">
              <Button className="bg-white text-black hover:bg-gray-100 w-24 rounded-full">Shop</Button>
            </Link>
          </div>
        </div>

        {/* Nike General Frame */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image src="/images/WebSale2.webp" alt="Nike Field General" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <p className="text-xl mb-2">Nike Field General</p>
            <h2 className="text-5xl font-bold mb-8">A Revamped Football Icon</h2>
            <Link href="/products?category=nike-field-general">
              <Button className="bg-white text-black hover:bg-gray-100 w-24 rounded-full">Shop</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tennis Hero */}
      <section className="relative h-[600px] rounded-lg overflow-hidden mx-4 md:mx-8 mb-8">
        <Image src="/images/shoptennis.jpg" alt="Tennis" fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="text-xl mb-4">Carlos Alcaraz</p>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">CABEZA. CORAZÓN. HISTORIA.</h2>
          <Link href="/products?category=tennis">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
              Shop Tennis
            </Button>
          </Link>
        </div>
      </section>

      {/* Style & Summer Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 pb-8">
        {/* Shox R4 */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image src="/images/Style1.webp" alt="Shox R4" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <p className="text-xl mb-2">Shox R4</p>
            <h2 className="text-5xl font-bold mb-8">Nike Style By</h2>
            <Link href="/products?category=shop-r4">
              <Button className="bg-white text-black hover:bg-gray-100 w-24 rounded-full">Shop</Button>
            </Link>
          </div>
        </div>

        {/* Summer Ready */}
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image src="/images/style2.jpg" alt="Summer Ready" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <p className="text-xl mb-2">Summer Ready</p>
            <h2 className="text-5xl font-bold mb-8">Turn Offseason On</h2>
            <Link href="/products?category=summer-gear-up">
              <Button className="bg-white text-black hover:bg-gray-100 w-24 rounded-full">Shop</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-black mb-12 text-center">Shop by Category</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
      {shopCategories.map((cat) => (
        <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="group flex flex-col items-center">
          <div className="relative h-110 bg-white rounded-lg overflow-hidden mb-4 w-full">
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="font-semibold text-center">{cat.name}</h3>
        </Link>
      ))}
    </div>
  </div>
</section>
    </div>
  )
}

