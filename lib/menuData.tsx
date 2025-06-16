// // lib/menuData.ts

// export const menuData = {
//   "New & Featured": [
//     { title: "New Releases", href: "/products?tag=new" },
//     { title: "Air Max Home", href: "/products?tag=air-max" },
//     { title: "Best Sellers", href: "/products?tag=best-sellers" },
//     { title: "Y2K Sneakers", href: "/products?tag=y2k" },
//     { title: "Graphic Tees", href: "/products?tag=graphic-tees" },
//     { title: "Eid Collections", href: "/products?tag=eid" },
//   ],
//   Men: {
//     Featured: [
//       { title: "New Releases", href: "/products?gender=Men&tag=new" },
//       { title: "Best Sellers", href: "/products?gender=Men&tag=best" },
//     ],
//     Shoes: [
//       { title: "All Shoes", href: "/products?gender=Men&type=shoes" },
//       { title: "Sandals & Slides", href: "/products?gender=Men&type=sandals" },
//       { title: "Running", href: "/products?gender=Men&sport=running" },
//     ],
//     Clothing: [
//       { title: "All Clothing", href: "/products?gender=Men&type=clothing" },
//       { title: "Jackets", href: "/products?gender=Men&type=jackets" },
//     ],
//     // Add more sections as needed...
//   },
//   // Add Women, Kids, Jordan, Sale...
// }
// components/menuData.tsx

export const menuData: Record<
  string,
  | { [category: string]: { title: string; href: string }[] }
  | { title: string; href: string }[]
> = {
  "New & Featured": {
    Featured: [
      { title: "New Releases", href: "/new-releases" },
      { title: "Air Max Home", href: "/air-max" },
      { title: "Best Sellers", href: "/best-sellers" },
      { title: "Y2K Sneakers", href: "/y2k-sneakers" },
      { title: "Graphic Tees", href: "/graphic-tees" },
      { title: "Eid Collections", href: "/eid-collections" },
    ],
  },
  Men: {
    Featured: [
      { title: "New Releases", href: "/new-releases" },
      { title: "Air Max Home", href: "/air-max" },
      { title: "Best Sellers", href: "/best-sellers" },
      { title: "Y2K Sneakers", href: "/y2k-sneakers" },
      { title: "Graphic Tees", href: "/graphic-tees" },
      { title: "Eid Collections", href: "/eid-collections" },
    ],
    Shoes: [
      { title: "All Shoes", href: "/products?category=Shoes" },
      { title: "Running", href: "/products?category=Running" },
      { title: "Basketball", href: "/products?category=Basketball" },
      { title: "Football", href: "/products?category=Football" },
      { title: "Lifestyle", href: "/products?category=Lifestyle" },
      { title: "Sandals & Slides", href: "/products?category=Sandals" },
      { title: "Training & Gym", href: "/products?category=Training" },
      { title: "Tennis", href: "/products?category=Tennis" },
      { title: "Skateboarding", href: "/products?category=Skateboarding" },
      { title: "Air Jordan 1", href: "/products?category=Air-Jordan-1" },
      { title: "Air Force 1", href: "/products?category=air-force-1" },
      { title: "Dunk", href: "/products?category=Dunk" },
      { title: "Mercurial", href: "/products?category=Mercurial" },
      { title: "Pegasus", href: "/products?category=Pegasus" },
    ],
    Clothing: [
      { title: "All Clothing", href: "/products?category=Clothing" },
      { title: "Hoodies & Sweatshirts", href: "/products?category=Hoodies" },
      { title: "Shorts", href: "/products?category=Shorts" },
      { title: "Tracksuits", href: "/products?category=Tracksuits" },
    ],
    ShopBySport: [
      { title: "Running", href: "/products?category=Running" },
      { title: "Football", href: "/products?category=Football" },
      { title: "Training & Gym", href: "/products?category=Training" },
    ],
    Accessories: [
      { title: "Socks", href: "/products?category=Socks" },
      { title: "Bags", href: "/products?category=Bags" },
    ],
  },
  Women: [],
  Kids: [],
  Jordan: [],
  Sale: [],
};
