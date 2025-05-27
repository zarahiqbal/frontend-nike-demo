import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatImageUrl = (url: string) => {
  if (!url) return "/placeholder.svg"
  return url.startsWith("http") ? url : `https://elegant-duck-3bccb7b995.strapiapp.com${url}`
}