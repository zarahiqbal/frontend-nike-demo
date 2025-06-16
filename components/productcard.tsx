"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

type Product = {
  id: number
  title: string
  price: number
  slug: string
  category: string
  images: { url: string }[]
  colors?: number
  badge?: "Just In" | "Bestseller"
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const formatImageUrl = (url: string) => {
    return url.startsWith("http") ? url : `https://elegant-duck-3bccb7b995.strapiapp.com${url}`
  }

  const image = product.images[0]?.url

  return (
    <div className="group block">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Product Image Container */}
        <div className="relative bg-gray-100 aspect-square">
          {/* Heart Icon */}
          <button
            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
              isFavorite ? "bg-red-100 text-red-500" : "hover:bg-white text-gray-600 hover:text-red-500"
            }`}
            onClick={toggleFavorite}
          >
            <Heart className={`w-6 h-6 transition-colors ${isFavorite ? "fill-current" : ""}`} />
          </button>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-2 py-1 text-xs font-medium rounded bg-orange-500 text-white">{product.badge}</span>
            </div>
          )}

          {/* Product Image */}
          <Link href={`/products/${product.slug}`}>
            <div className="w-full h-full flex items-center justify-center p-8 cursor-pointer relative">
              <Image
                src={formatImageUrl(image || "/placeholder.svg?height=400&width=400")}
                alt={product.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=400"
                }}
              />
            </div>
          </Link>
        </div>

        {/* Product Info */}
        <Link href={`/products/${product.slug}`}>
          <div className="p-6 cursor-pointer">
            <h3 className="text-lg font-medium text-gray-900 mb-1">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-gray-600 mb-4">
              {product.colors} {product.colors === 1 ? "Colour" : "Colours"}
            </p>
            <p className="text-lg font-medium text-gray-900">SAR {product.price.toLocaleString()}.00</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
