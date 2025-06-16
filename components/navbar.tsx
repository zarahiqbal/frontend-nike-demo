
// "use client"

// import Link from "next/link"
// import { Search, Heart, ShoppingBag } from "lucide-react"
// import { useState } from "react"
// import { useCart } from "../lib/CartContext"

// export default function Navbar() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const { items } = useCart()

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <img
//               src="https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg"
//               alt="Nike"
//               className="w-16 h-6"
//             />
//           </Link>

//           {/* Navigation Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/new-featured" className="text-gray-900 hover:text-gray-600 font-medium transition-colors">
//               New & Featured
//             </Link>
//             <Link
//               href="/products?category=Men"
//               className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
//             >
//               Men
//             </Link>
//             <Link
//               href="/products?category=Women"
//               className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
//             >
//               Women
//             </Link>
//             <Link
//               href="/products?category=Kids"
//               className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
//             >
//               Kids
//             </Link>
//             <Link
//               href="/products?category=Jordan"
//               className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
//             >
//               Jordan
//             </Link>
//             <Link
//               href="/products?category=Sale"
//               className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
//             >
//               Sale
//             </Link>
//           </div>

//           {/* Right Side Icons */}
//           <div className="flex items-center space-x-4">
//             {/* Search */}
//             <div className="relative">
//               {isSearchOpen ? (
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="w-48 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     autoFocus
//                     onBlur={() => setIsSearchOpen(false)}
//                   />
//                   <Search className="w-5 h-5 text-gray-600 absolute right-3" />
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setIsSearchOpen(true)}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <Search className="w-5 h-5 text-gray-600" />
//                 </button>
//               )}
//             </div>

//             {/* Favorites */}
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <Heart className="w-5 h-5 text-gray-600" />
//             </button>

//             {/* Cart */}
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
//               <ShoppingBag className="w-5 h-5 text-gray-600" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// }
// "use client"

// import Link from "next/link"
// import { Search, Heart, ShoppingBag } from "lucide-react"
// import { useState } from "react"
// import { useCart } from "../lib/CartContext"
// import { menuData } from "../lib/menuData"

// export default function Navbar() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
//   const { items } = useCart()

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

//   const navLinks = ["New & Featured", "Men", "Women", "Kids", "Jordan", "Sale"]

//   return (
//     <nav className="relative bg-white shadow-sm z-50 border-b">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="flex items-center">
//             <img
//               src="https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg"
//               alt="Nike"
//               className="w-16 h-6"
//             />
//           </Link>

//           {/* Navigation Menu */}
//           <div className="hidden md:flex items-center space-x-8 relative">
//             {navLinks.map((label) => (
//               <div
//                 key={label}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredMenu(label)}
//                 onMouseLeave={() => setHoveredMenu(null)}
//               >
//                 <Link
//                   href={`/products?category=${label}`}
//                   className="text-gray-900 font-medium transition-all duration-200 border-b-2 border-transparent group-hover:border-black"
//                 >
//                   {label}
//                 </Link>

//                 {/* Dropdown directly inside the same group so hover is preserved */}
//                 {hoveredMenu === label && menuData[label] && (
//                   <div
//                      // className="fixed left-1/2 transform -translate-x-1/2 top-[60px] bg-white shadow-xl border-t border-gray-200 z-40 w-[1100px] min-h-[300px]"

//                     className="fixed left-1/2 transform -translate-x-1/2 top-[60px] bg-white shadow-xl border-t border-gray-200 z-40 w-[900px] "            
//                   >
//                     <div className="px-6 py-6 grid grid-cols-4 gap-6">
//                       {Array.isArray(menuData[label]) ? (
//                         <div className="col-span-4">
//                           {(menuData[label] as any[]).map((item, i) => (
//                             <Link key={i} href={item.href} className="block text-sm text-gray-700 hover:underline py-1">
//                               {item.title}
//                             </Link>
//                           ))}
//                         </div>
//                       ) : (
//                         Object.entries(menuData[label]).map(([section, links]) => (
//                           <div key={section}>
//                             <h4 className="text-gray-900 font-semibold mb-2">{section}</h4>
//                             {(links as any[]).map((item, i) => (
//                               <Link key={i} href={item.href} className="block text-sm text-gray-700 hover:underline py-1">
//                                 {item.title}
//                               </Link>
//                             ))}
//                           </div>
//                         ))
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Side Icons */}
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               {isSearchOpen ? (
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="w-48 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     autoFocus
//                     onBlur={() => setIsSearchOpen(false)}
//                   />
//                   <Search className="w-5 h-5 text-gray-600 absolute right-3" />
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setIsSearchOpen(true)}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <Search className="w-5 h-5 text-gray-600" />
//                 </button>
//               )}
//             </div>

//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <Heart className="w-5 h-5 text-gray-600" />
//             </button>

//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
//               <ShoppingBag className="w-5 h-5 text-gray-600" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </button>
//           </div>

//           <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// }
"use client"

import Link from "next/link"
import { Search, Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"
import { useCart } from "../lib/CartContext"
import { menuData } from "../lib/menuData"

const navLinks = [
  { label: "New & Featured", slug: "fear-nothing" },
  { label: "Men", slug: "men" },
  { label: "Women", slug: "women" },
  { label: "Kids", slug: "kids" },
  { label: "Jordan", slug: "jordan" },
  // { label: "Sale", slug: "sale" },
]

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="relative bg-white shadow-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img
              src="https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg"
              alt="Nike"
              className="w-16 h-6"
            />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map(({ label, slug }) => (
              <div
                key={label}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={`/products?category=${slug}`}
                  className="text-gray-900 font-medium transition-all duration-200 border-b-2 border-transparent group-hover:border-black"
                >
                  {label}
                </Link>

                {hoveredMenu === label && menuData[label] && (
                  <div className="fixed left-1/2 transform -translate-x-1/2 top-[64px] bg-white shadow-xl border-t border-gray-200 z-40 w-[1200px]">
                    <div className="px-6 py-6 grid grid-cols-5 gap-5">
                      {Array.isArray(menuData[label]) ? (
                        <div className="col-span-4">
                          {(menuData[label] as any[]).map((item, i) => (
                            <Link
                              key={i}
                              href={item.href}
                              className="block text-sm text-gray-700 hover:underline py-1"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        Object.entries(menuData[label]).map(([section, links]) => (
                          <div key={section}>
                            <h4 className="text-gray-900 font-semibold mb-2">{section}</h4>
                            {(links as any[]).map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                className="block text-sm text-gray-700 hover:underline py-1"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-48 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Search className="w-5 h-5 text-gray-600 absolute right-3" />
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

// "use client"

// import Link from "next/link"
// import { Search, Heart, ShoppingBag } from "lucide-react"
// import { useState } from "react"
// import { useCart } from "../lib/CartContext"

// const menuData: Record<
//   string,
//   | { [category: string]: { title: string; href: string }[] }
//   | { title: string; href: string }[]
// > = {
//   "New & Featured": {
//     Featured: [
//       { title: "New Releases", href: "/new-releases" },
//       { title: "Air Max Home", href: "/air-max" },
//       { title: "Best Sellers", href: "/best-sellers" },
//       { title: "Y2K Sneakers", href: "/y2k-sneakers" },
//       { title: "Graphic Tees", href: "/graphic-tees" },
//       { title: "Eid Collections", href: "/eid-collections" },
//     ],
//   },
//   Men: {
//     Shoes: [
//       { title: "All Shoes", href: "/products?category=Shoes" },
//       { title: "Running", href: "/products?category=Running" },
//       { title: "Basketball", href: "/products?category=Basketball" },
//       { title: "Football", href: "/products?category=Football" },
//       { title: "Lifestyle", href: "/products?category=Lifestyle" },
//     ],
//     Clothing: [
//       { title: "All Clothing", href: "/products?category=Clothing" },
//       { title: "Hoodies & Sweatshirts", href: "/products?category=Hoodies" },
//       { title: "Shorts", href: "/products?category=Shorts" },
//       { title: "Tracksuits", href: "/products?category=Tracksuits" },
//     ],
//     ShopBySport: [
//       { title: "Running", href: "/products?category=Running" },
//       { title: "Football", href: "/products?category=Football" },
//       { title: "Training & Gym", href: "/products?category=Training" },
//     ],
//     Accessories: [
//       { title: "Socks", href: "/products?category=Socks" },
//       { title: "Bags", href: "/products?category=Bags" },
//     ],
//   },
//   Women: [],
//   Kids: [],
//   Jordan: [],
//   Sale: [],
// }

// export default function Navbar() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
//   const { items } = useCart()

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

//   const navLinks = ["New & Featured", "Men", "Women", "Kids", "Jordan", "Sale"]

//   return (
//     <nav className="relative bg-white shadow-sm z-50 border-b">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <img
//               src="https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg"
//               alt="Nike"
//               className="w-16 h-6"
//             />
//           </Link>

//           {/* Navigation Menu */}
//           <div className="hidden md:flex items-center space-x-8 relative">
//             {navLinks.map((label) => (
//               <div
//                 key={label}
//                 //className="relative"
//                 className="relative group"                                

//                 onMouseEnter={() => setHoveredMenu(label)}
//                 onMouseLeave={() => setHoveredMenu(null)}
//               >
//                 <Link
//                   href={`/products?category=${label}`}
//                   className="text-gray-900 font-medium transition-all duration-200 border-b-2 border-transparent group-hover:border-black"

//                   //className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
//                 >
//                   {label}
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Right Side Icons */}
//           <div className="flex items-center space-x-4">
//             {/* Search */}
//             <div className="relative">
//               {isSearchOpen ? (
//                 <div className="flex items-center">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="w-48 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     autoFocus
//                     onBlur={() => setIsSearchOpen(false)}
//                   />
//                   <Search className="w-5 h-5 text-gray-600 absolute right-3" />
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setIsSearchOpen(true)}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <Search className="w-5 h-5 text-gray-600" />
//                 </button>
//               )}
//             </div>

//             {/* Favorites */}
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//               <Heart className="w-5 h-5 text-gray-600" />
//             </button>

//             {/* Cart */}
//             <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
//               <ShoppingBag className="w-5 h-5 text-gray-600" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mega Menu */}
//       {hoveredMenu && menuData[hoveredMenu] && (
//         <div
//           className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 z-40"
//           onMouseEnter={() => setHoveredMenu(hoveredMenu)}
//           onMouseLeave={() => setHoveredMenu(null)}
//         >
//           <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-4 gap-6">
//             {Array.isArray(menuData[hoveredMenu])
//               ? (
//                 <div className="col-span-4">
//                   {(menuData[hoveredMenu] as any[]).map((item, i) => (
//                     <Link key={i} href={item.href} className="block text-sm text-gray-700 hover:underline py-1">
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )
//               : (
//                 Object.entries(menuData[hoveredMenu]).map(([section, links]) => (
//                   <div key={section}>
//                     <h4 className="text-gray-900 font-semibold mb-2">{section}</h4>
//                     {(links as any[]).map((item, i) => (
//                       <Link key={i} href={item.href} className="block text-sm text-gray-700 hover:underline py-1">
//                         {item.title}
//                       </Link>
//                     ))}
//                   </div>
//                 ))
//               )}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }
