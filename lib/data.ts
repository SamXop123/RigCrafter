import type { Component, ComponentType } from "./types"

// Mock data for components
const cpus: Component[] = [
  {
    id: "cpu-1",
    type: "cpu",
    name: "AMD Ryzen 9 7950X",
    brand: "AMD",
    price: 599.99,
    rating: 4.9,
    description: "The ultimate 16-core CPU for workstation-grade performance in content creation, rendering, and elite-tier gaming.",
    imageUrl: "https://blog-idceurope.com/wp-content/uploads/2023/02/1.jpg",
    specs: {
      Cores: "16",
      Threads: "32",
      "Boost Clock": "5.7 GHz",
      Cache: "64MB",
      TDP: "170W",
    },
    tags: ["AMD", "Ryzen 9", "AM5", "DDR5", "Workstation", "High-End"],
    compatibility: {
      socket: "AM5",
      tdp: 170,
    },
  },
  {
    id: "cpu-2",
    type: "cpu",
    name: "Intel Core i9-13900K",
    brand: "Intel",
    price: 549.99,
    rating: 4.8,
    description: "A flagship CPU with a hybrid architecture of 24 cores, delivering exceptional single-threaded speed for top-tier gaming performance.",
    imageUrl: "https://tpucdn.com/cpu-specs/images/chips/2817-front.jpg",
    specs: {
      Cores: "24 (8P+16E)",
      Threads: "32",
      "Boost Clock": "5.8 GHz",
      Cache: "36MB",
      TDP: "125W",
    },
    tags: ["Intel", "Core i9", "LGA1700", "DDR5", "DDR4", "Gaming"],
    compatibility: {
      socket: "LGA1700",
      tdp: 125,
    },
  },
  {
    id: "cpu-3",
    type: "cpu",
    name: "AMD Ryzen 7 7800X3D",
    brand: "AMD",
    price: 449.99,
    rating: 4.9,
    description: "Widely considered the best gaming CPU, its groundbreaking 3D V-Cache technology delivers a massive performance uplift in games.",
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24551815/236593_AMD_Ryzen_7_7800X3D_TWarren_0004.jpg?quality=90&strip=all&crop=0.33088235294117%2C0%2C99.338235294118%2C100&w=1440",
    specs: {
      Cores: "8",
      Threads: "16",
      "Boost Clock": "5.0 GHz",
      Cache: "96MB",
      TDP: "120W",
    },
    tags: ["AMD", "Ryzen 7", "AM5", "DDR5", "3D V-Cache", "Best for Gaming"],
    compatibility: {
      socket: "AM5",
      tdp: 120,
    },
  },
  {
    id: "cpu-4",
    type: "cpu",
    name: "Intel Core i7-13700K",
    brand: "Intel",
    price: 409.99,
    rating: 4.7,
    description: "A fantastic all-rounder CPU that excels at high-refresh-rate gaming and demanding productivity tasks without the flagship price.",
    imageUrl: "https://www.techspot.com/articles-info/2554/images/2022-10-21-image-12.jpg",
    specs: {
      Cores: "16 (8P+8E)",
      Threads: "24",
      "Boost Clock": "5.4 GHz",
      Cache: "30MB",
      TDP: "125W",
    },
    tags: ["Intel", "Core i7", "LGA1700", "High-Refresh Gaming", "Productivity"],
    compatibility: {
      socket: "LGA1700",
      tdp: 125,
    },
  },
  {
    id: "cpu-5",
    type: "cpu",
    name: "AMD Ryzen 5 7600X",
    brand: "AMD",
    price: 229.99,
    rating: 4.6,
    description: "The sweet spot for mainstream gaming builds, offering incredible performance and efficiency on the modern AM5 platform.",
    imageUrl: "https://m.media-amazon.com/images/I/61Lk7jSzOsL.jpg",
    specs: {
      Cores: "6",
      Threads: "12",
      "Boost Clock": "5.3 GHz",
      Cache: "32MB",
      TDP: "105W",
    },
    tags: ["AMD", "Ryzen 5", "AM5", "DDR5", "Mid-Range", "Value"],
    compatibility: {
      socket: "AM5",
      tdp: 105,
    },
  },
  {
    id: "cpu-6",
    type: "cpu",
    name: "AMD Ryzen 9 9950X3D",
    brand: "AMD",
    price: 679.99,
    rating: 4.9,
    description: "Flagship 3D V-Cache processor offering industry-leading gaming performance and strong productivity performance.",
    imageUrl: "https://m.media-amazon.com/images/I/71hZfMZNZuL._AC_SX679_.jpg",
    specs: {
      Cores: "16",
      Threads: "32",
      BaseClock: "4.2 GHz",
      BoostClock: "5.7 GHz",
      Cache: "192MB (3D V-Cache)",
      TDP: "170W",
      Socket: "AM5"
    },
    tags: ["AMD", "Ryzen 9", "9950X3D", "Gaming", "High-end", "3D V-Cache"],
    compatibility: {
      tdp: 170,
      socket: "AM5"
    }
  },
  {
    id: "cpu-7",
    type: "cpu",
    name: "Intel Core i9-14900K",
    brand: "Intel",
    price: 460.99,
    rating: 4.7,
    description: "High-performance processor with hybrid architecture, excellent for gaming and heavy multitasking workloads.",
    imageUrl: "https://m.media-amazon.com/images/I/619ytLAytAL._AC_SX679_.jpg",
    specs: {
      Cores: "24 (8P + 16E)",
      Threads: "32",
      BaseClock: "3.2 GHz (P-Core)",
      BoostClock: "6.0 GHz",
      Cache: "36MB",
      TDP: "125W (253W Turbo)",
      Socket: "LGA1700"
    },
    tags: ["Intel", "i9", "14900K", "High-end", "Hybrid Architecture"],
    compatibility: {
      tdp: 253,
      socket: "LGA1700"
    }
  },
  {
    id: "cpu-8",
    type: "cpu",
    name: "AMD Ryzen 7 9800X3D",
    brand: "AMD",
    price: 459.99,
    rating: 4.8,
    description: "Top-tier gaming CPU with 3D V-Cache technology, designed for maximum fps at 1080p and 1440p.",
    imageUrl: "https://m.media-amazon.com/images/I/71aHvYUgX1L._AC_SX679_.jpg",
    specs: {
      Cores: "8",
      Threads: "16",
      BaseClock: "4.0 GHz",
      BoostClock: "5.7 GHz",
      Cache: "128MB (3D V-Cache)",
      TDP: "120W",
      Socket: "AM5"
    },
    tags: ["AMD", "Ryzen 7", "9800X3D", "Gaming", "3D V-Cache"],
    compatibility: {
      tdp: 120,
      socket: "AM5"
    }
  },
  {
    id: "cpu-9",
    type: "cpu",
    name: "Intel Core i7-14700K",
    brand: "Intel",
    price: 319.99,
    rating: 4.6,
    description: "Balanced high-performance CPU with hybrid P-core and E-core design, ideal for gaming and productivity.",
    imageUrl: "https://m.media-amazon.com/images/I/61aAAg73uLL._AC_UY327_FMwebp_QL65_.jpg",
    specs: {
      Cores: "20 (8P + 12E)",
      Threads: "28",
      BaseClock: "3.4 GHz (P-Core)",
      BoostClock: "5.6 GHz",
      Cache: "33MB",
      TDP: "125W (253W Turbo)",
      Socket: "LGA1700"
    },
    tags: ["Intel", "i7", "14700K", "Gaming", "Productivity"],
    compatibility: {
      tdp: 253,
      socket: "LGA1700"
    }
  },
  {
    id: "cpu-10",
    type: "cpu",
    name: "AMD Ryzen 7 9700X",
    brand: "AMD",
    price: 329.99,
    rating: 4.6,
    description: "Energy-efficient 8-core Zen 5 CPU offering excellent gaming and productivity performance.",
    imageUrl: "https://m.media-amazon.com/images/I/61F3ZChalyL._AC_UY327_FMwebp_QL65_.jpg",
    specs: {
      Cores: "8",
      Threads: "16",
      BaseClock: "3.8 GHz",
      BoostClock: "5.5 GHz",
      Cache: "40MB",
      TDP: "65W",
      Socket: "AM5"
    },
    tags: ["AMD", "Ryzen 7", "9700X", "Efficiency", "Zen 5"],
    compatibility: {
      tdp: 65,
      socket: "AM5"
    }
  },
  {
    id: "cpu-11",
    type: "cpu",
    name: "Intel Core i9-13900KF",
    brand: "Intel",
    price: 459.99,
    rating: 4.8,
    description: "A GPU-less variant of the i9-13900K, offering the same extreme performance at a more affordable price.",
    imageUrl: "https://m.media-amazon.com/images/I/61My4F2-XUL._AC_UY327_FMwebp_QL65_.jpg",
    specs: {
      Cores: "24 (8P+16E)",
      Threads: "32",
      BoostClock: "5.8 GHz",
      Cache: "36MB",
      TDP: "125W",
      Socket: "LGA1700"
    },
    tags: ["Intel", "Core i9", "KF", "Gaming", "Enthusiast"],
    compatibility: {
      socket: "LGA1700",
      tdp: 125
    }
  },
  {
    id: "cpu-12",
    type: "cpu",
    name: "AMD Ryzen 9 7900X",
    brand: "AMD",
    price: 450.99,
    rating: 4.7,
    description: "A 12-core Zen 4 CPU delivering powerful multi-threaded performance for content creation and gaming.",
    imageUrl: "https://m.media-amazon.com/images/I/51OEiWrUtqL._AC_UY327_FMwebp_QL65_.jpg",
    specs: {
      Cores: "12",
      Threads: "24",
      BoostClock: "5.6 GHz",
      Cache: "76MB",
      TDP: "170W",
      Socket: "AM5"
    },
    tags: ["AMD", "Ryzen 9", "7900X", "Workstation", "AM5"],
    compatibility: {
      socket: "AM5",
      tdp: 170
    }
  }






]

const gpus: Component[] = [
  {
    id: "gpu-1",
    type: "gpu",
    name: "NVIDIA GeForce RTX 4090",
    brand: "NVIDIA",
    price: 1599.99,
    rating: 4.9,
    description: "The undisputed flagship for 4K and 8K gaming, featuring 24GB of GDDR6X memory and unmatched ray tracing performance with DLSS 3.",
    imageUrl: "https://www.pcworld.com/wp-content/uploads/2025/06/geforce-rtx-4090-jensen.jpg?resize=1536%2C673&quality=50&strip=all",
    specs: {
      VRAM: "24GB GDDR6X",
      "Boost Clock": "2.52 GHz",
      "CUDA Cores": "16384",
      TDP: "450W",
    },
    tags: ["NVIDIA", "RTX 4090", "Flagship", "4K", "8K", "Ray Tracing", "DLSS 3"],
    compatibility: {
      tdp: 450,
      pciSlots: 4,
    },
  },

  {
    id: "gpu-2",
    type: "gpu",
    name: "AMD Radeon RX 7900 XTX",
    brand: "AMD",
    price: 999.99,
    rating: 4.8,
    description: "AMD's top-tier RDNA 3 graphics card, offering exceptional rasterization performance for 4K gaming and a competitive feature set with FSR.",
    imageUrl: "https://storage-asset.msi.com/global/picture/image/feature/vga/AMD/RX7900/RX-7900-XTX-GAMING-TRIO-CLASSIC-24G/images/kv.png",
    specs: {
      VRAM: "24GB GDDR6",
      "Boost Clock": "2.5 GHz",
      "Stream Processors": "6144",
      TDP: "355W",
    },
    tags: ["AMD", "Radeon", "RX 7900 XTX", "High-End", "4K", "Ray Tracing", "FSR"],
    compatibility: {
      tdp: 355,
      pciSlots: 3,
    },
  },
  {
    id: "gpu-3",
    type: "gpu",
    name: "NVIDIA GeForce RTX 4080 Super",
    brand: "NVIDIA",
    price: 999.99,
    rating: 4.8,
    description: "A powerful high-end GPU perfect for maxed-out 1440p and high-refresh-rate 4K gaming, featuring robust ray tracing and DLSS 3 support.",
    imageUrl: "https://tpucdn.com/gpu-specs/images-new/c/4182-top-large.jpg",
    specs: {
      VRAM: "16GB GDDR6X",
      "Boost Clock": "2.55 GHz",
      "CUDA Cores": "10240",
      TDP: "320W",
    },
    tags: ["NVIDIA", "RTX 4080 Super", "High-End", "4K", "1440p", "Ray Tracing", "DLSS 3"],
    compatibility: {
      tdp: 320,
      pciSlots: 3,
    },
  },
  {
    id: "gpu-4",
    type: "gpu",
    name: "AMD Radeon RX 7800 XT",
    brand: "AMD",
    price: 499.99,
    rating: 4.7,
    description: "The king of mainstream 1440p gaming, offering incredible rasterization performance and value with a generous 16GB of VRAM.",
    imageUrl: "https://m.media-amazon.com/images/I/61cwmyapJ5L._SL1200_.jpg",
    specs: {
      VRAM: "16GB GDDR6",
      "Boost Clock": "2.43 GHz",
      "Stream Processors": "3840",
      TDP: "263W",
    },
    tags: ["AMD", "Radeon", "RX 7800 XT", "Mid-Range", "1440p", "Value", "FSR"],
    compatibility: {
      tdp: 263,
      pciSlots: 2,
    },
  },
  {
    id: "gpu-5",
    type: "gpu",
    name: "NVIDIA GeForce RTX 4070 Super",
    brand: "NVIDIA",
    price: 599.99,
    rating: 4.7,
    description: "An excellent choice for high-refresh-rate 1440p gaming, balancing price with strong performance and the industry-leading features of DLSS 3.",
    imageUrl: "https://i.extremetech.com/imagery/content-types/05Slpduie4GsaBqc3jiEESm/hero-image.fit_lim.size_1600x900.v1705419856.jpg",
    specs: {
      VRAM: "12GB GDDR6X",
      "Boost Clock": "2.48 GHz",
      "CUDA Cores": "7168",
      TDP: "220W",
    },
    tags: ["NVIDIA", "RTX 4070 Super", "Mid-Range", "1440p", "Ray Tracing", "DLSS 3"],
    compatibility: {
      tdp: 220,
      pciSlots: 2,
    },
  },
{
  id: "gpu-6",
  type: "gpu",
  name: "NVIDIA GeForce RTX 4060 Ti",
  brand: "NVIDIA",
  price: 399.99,
  rating: 4.6,
  description: "A budget-friendly yet capable GPU, perfect for 1080p and entry-level 1440p gaming with DLSS 3 support.",
  imageUrl: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/40-series/rtx-4060-ti/rtx-4060-ti-shop-600-p.jpg",
  specs: {
    VRAM: "8GB GDDR6",
    "Boost Clock": "2.54 GHz",
    "CUDA Cores": "4352",
    TDP: "160W",
  },
  tags: ["NVIDIA", "RTX 4060 Ti", "1080p", "Budget", "Ray Tracing", "DLSS 3"],
  compatibility: {
    tdp: 160,
    pciSlots: 2,
  },
},



]

const ram: Component[] = [
  {
    id: "ram-1",
    type: "ram",
    name: "Corsair Vengeance RGB 32GB DDR5-6000",
    brand: "Corsair",
    price: 159.99,
    rating: 4.8,
    description: "A popular choice for modern builds, this 32GB DDR5 kit combines a 6000MHz sweet spot with vibrant, customizable RGB lighting.",
    imageUrl: "https://m.media-amazon.com/images/I/61XsKRKsGoL._SL1500_.jpg",
    specs: {
      Capacity: "32GB (2x16GB)",
      Speed: "6000MHz",
      "CAS Latency": "CL36",
      Type: "DDR5",
    },
    tags: ["Corsair", "DDR5", "RGB", "32GB", "6000MHz"],
    compatibility: {
      memoryType: "DDR5",
    },
  },
  {
    id: "ram-2",
    type: "ram",
    name: "G.Skill Trident Z5 RGB 32GB DDR5-7200",
    brand: "G.Skill",
    price: 219.99,
    rating: 4.9,
    description: "Push your system to its limits with this ultra-fast 7200MHz DDR5 kit, designed for enthusiasts seeking maximum performance.",
    imageUrl: "https://m.media-amazon.com/images/I/61UwHpj3J4L._SL1280_.jpg",
    specs: {
      Capacity: "32GB (2x16GB)",
      Speed: "7200MHz",
      "CAS Latency": "CL34",
      Type: "DDR5",
    },
    tags: ["G.Skill", "DDR5", "RGB", "32GB", "7200MHz", "Enthusiast"],
    compatibility: {
      memoryType: "DDR5",
    },
  },
  {
    id: "ram-3",
    type: "ram",
    name: "Kingston Fury Beast 32GB DDR5-5200",
    brand: "Kingston",
    price: 129.99,
    rating: 4.7,
    description: "A reliable and cost-effective DDR5 kit from Kingston that provides a solid performance foundation for any modern PC build.",
    imageUrl: "https://m.media-amazon.com/images/I/61OhZ5c1ThL._SL1500_.jpg",
    specs: {
      Capacity: "32GB (2x16GB)",
      Speed: "5200MHz",
      "CAS Latency": "CL40",
      Type: "DDR5",
    },
    tags: ["Kingston", "DDR5", "32GB", "No-RGB"],
    compatibility: {
      memoryType: "DDR5",
    },
  },
  {
    id: "ram-4",
    type: "ram",
    name: "Corsair Vengeance LPX 32GB DDR4-3600",
    brand: "Corsair",
    price: 109.99,
    rating: 4.8,
    description: "The go-to choice for DDR4 builds, this low-profile kit ensures compatibility with large air coolers while delivering great performance.",
    imageUrl: "https://m.media-amazon.com/images/I/51ceUIi7k5L._SL1200_.jpg",
    specs: {
      Capacity: "32GB (2x16GB)",
      Speed: "3600MHz",
      "CAS Latency": "CL18",
      Type: "DDR4",
    },
    tags: ["Corsair", "DDR4", "32GB", "Low Profile"],
    compatibility: {
      memoryType: "DDR4",
    },
  },
  {
    id: "ram-5",
    type: "ram",
    name: "G.Skill Ripjaws V 32GB DDR4-3200",
    brand: "G.Skill",
    price: 89.99,
    rating: 4.7,
    description: "A budget-friendly yet highly reliable DDR4 memory kit, perfect for gamers and builders looking for maximum value.",
    imageUrl: "https://m.media-amazon.com/images/I/61cltTu1F+L._SL1500_.jpg",
    specs: {
      Capacity: "32GB (2x16GB)",
      Speed: "3200MHz",
      "CAS Latency": "CL16",
      Type: "DDR4",
    },
    tags: ["G.Skill", "DDR4", "32GB", "Value"],
    compatibility: {
      memoryType: "DDR4",
    },
  },
]

const storage: Component[] = [
  {
    id: "storage-1",
    type: "storage",
    name: "Samsung 990 Pro 2TB NVMe SSD",
    brand: "Samsung",
    price: 199.99,
    rating: 4.9,
    description: "The pinnacle of PCIe 4.0 performance, offering lightning-fast read/write speeds for your OS, games, and applications.",
    imageUrl: "https://m.media-amazon.com/images/I/71OWtcxKgvL._SL1500_.jpg",
    specs: {
      Capacity: "2TB",
      Interface: "PCIe 4.0 x4",
      "Read Speed": "7450 MB/s",
      "Write Speed": "6900 MB/s",
    },
    tags: ["Samsung", "NVMe", "PCIe 4.0", "2TB", "High-End"],
    compatibility: {
      storageInterface: ["M.2"],
    },
  },
  {
    id: "storage-2",
    type: "storage",
    name: "WD Black SN850X 1TB NVMe SSD",
    brand: "Western Digital",
    price: 149.99,
    rating: 4.8,
    description: "A top-tier gaming SSD that delivers blistering speeds to dramatically reduce load times and enhance system responsiveness.",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/XznGAj929i82MWrAHPH4Eo-1920-80.jpg.webp",
    specs: {
      Capacity: "1TB",
      Interface: "PCIe 4.0 x4",
      "Read Speed": "7300 MB/s",
      "Write Speed": "6300 MB/s",
    },
    tags: ["Western Digital", "NVMe", "PCIe 4.0", "1TB", "Gaming"],
    compatibility: {
      storageInterface: ["M.2"],
    },
  },
  {
    id: "storage-3",
    type: "storage",
    name: "Crucial P3 Plus 2TB NVMe SSD",
    brand: "Crucial",
    price: 129.99,
    rating: 4.6,
    description: "An excellent value proposition, offering a huge 2TB capacity and PCIe 4.0 speeds at a highly competitive price point.",
    imageUrl: "https://content.crucial.com/content/dam/crucial/ssd-products/p3-plus/images/product/crucial-p3-plus-ssd-flat-front-image.psd.transform/medium-png/image.png",
    specs: {
      Capacity: "2TB",
      Interface: "PCIe 4.0 x4",
      "Read Speed": "5000 MB/s",
      "Write Speed": "4200 MB/s",
    },
    tags: ["Crucial", "NVMe", "PCIe 4.0", "2TB", "Value"],
    compatibility: {
      storageInterface: ["M.2"],
    },
  },
  {
    id: "storage-4",
    type: "storage",
    name: "Samsung 870 EVO 2TB SATA SSD",
    brand: "Samsung",
    price: 159.99,
    rating: 4.8,
    description: "A highly reliable SATA SSD, perfect as a secondary drive for your game library or for upgrading an older system.",
    imageUrl: "https://m.media-amazon.com/images/I/812K5QJU-pL._SL1500_.jpg",
    specs: {
      Capacity: "2TB",
      Interface: "SATA III",
      "Read Speed": "560 MB/s",
      "Write Speed": "530 MB/s",
    },
    tags: ["Samsung", "SATA", "2TB", "Reliable"],
    compatibility: {
      storageInterface: ["SATA"],
    },
  },
  {
    id: "storage-5",
    type: "storage",
    name: "Seagate Barracuda 4TB HDD",
    brand: "Seagate",
    price: 89.99,
    rating: 4.5,
    description: "Massive 4TB capacity for bulk storage of media, documents, and game archives. An affordable solution for large data needs.",
    imageUrl: "https://m.media-amazon.com/images/I/71ZxNOsFMnL._SL1500_.jpg",
    specs: {
      Capacity: "4TB",
      Interface: "SATA III",
      "Spindle Speed": "5400 RPM",
      Cache: "256MB",
    },
    tags: ["Seagate", "HDD", "SATA", "4TB", "Mass Storage"],
    compatibility: {
      storageInterface: ["SATA"],
    },
  },
]

const motherboards: Component[] = [
  {
    id: "mb-1",
    type: "motherboard",
    name: "ASUS ROG Maximus Z790 Hero",
    brand: "ASUS",
    price: 629.99,
    rating: 4.8,
    description: "A high-end Z790 motherboard for Intel CPUs, packed with premium features, robust power delivery for overclocking, and extensive connectivity.",
    imageUrl: "https://m.media-amazon.com/images/I/81sLJlCh85L._SL1500_.jpg",
    specs: {
      Socket: "LGA1700",
      Chipset: "Z790",
      "Memory Support": "DDR5",
      "Form Factor": "ATX",
    },
    tags: ["ASUS", "Z790", "LGA1700", "DDR5", "ATX", "Enthusiast"],
    compatibility: {
      socket: "LGA1700",
      memoryType: "DDR5",
      formFactor: "ATX",
    },
  },
  {
    id: "mb-2",
    type: "motherboard",
    name: "MSI MPG X670E Carbon WiFi",
    brand: "MSI",
    price: 479.99,
    rating: 4.7,
    description: "A feature-rich X670E motherboard for AMD's Ryzen 7000 series, offering PCIe 5.0 support for both GPU and NVMe storage.",
    imageUrl: "https://m.media-amazon.com/images/I/81cR1YlptmL._SL1500_.jpg",
    specs: {
      Socket: "AM5",
      Chipset: "X670E",
      "Memory Support": "DDR5",
      "Form Factor": "ATX",
    },
    tags: ["MSI", "X670E", "AM5", "DDR5", "ATX", "PCIe 5.0"],
    compatibility: {
      socket: "AM5",
      memoryType: "DDR5",
      formFactor: "ATX",
    },
  },
  {
    id: "mb-3",
    type: "motherboard",
    name: "Gigabyte B650 AORUS Elite AX",
    brand: "Gigabyte",
    price: 229.99,
    rating: 4.6,
    description: "A fantastic mid-range B650 board for AMD CPUs, providing a strong feature set including Wi-Fi 6E without the premium price tag.",
    imageUrl: "https://m.media-amazon.com/images/I/618BzIHxbsL._SL1000_.jpg",
    specs: {
      Socket: "AM5",
      Chipset: "B650",
      "Memory Support": "DDR5",
      "Form Factor": "ATX",
    },
    tags: ["Gigabyte", "B650", "AM5", "DDR5", "ATX", "Mid-Range"],
    compatibility: {
      socket: "AM5",
      memoryType: "DDR5",
      formFactor: "ATX",
    },
  },
  {
    id: "mb-4",
    type: "motherboard",
    name: "ASRock B760M Pro RS/D4",
    brand: "ASRock",
    price: 139.99,
    rating: 4.5,
    description: "A budget-friendly Micro-ATX board for Intel CPUs that allows builders to save money by reusing affordable DDR4 memory.",
    imageUrl: "https://www.asrock.com/mb/photo/B760M%20Pro%20RSD4(L1).png",
    specs: {
      Socket: "LGA1700",
      Chipset: "B760",
      "Memory Support": "DDR4",
      "Form Factor": "Micro-ATX",
    },
    tags: ["ASRock", "B760", "LGA1700", "DDR4", "Micro-ATX", "Budget"],
    compatibility: {
      socket: "LGA1700",
      memoryType: "DDR4",
      formFactor: "Micro-ATX",
    },
  },
  {
    id: "mb-5",
    type: "motherboard",
    name: "ASUS ROG Strix B650E-F Gaming WiFi",
    brand: "ASUS",
    price: 289.99,
    rating: 4.7,
    description: "A premium B650E motherboard from ASUS, blending high-end aesthetics with robust performance features for a top-tier gaming build.",
    imageUrl: "https://dlcdnwebimgs.asus.com/gain/566A4DF8-85E5-4958-9CEE-21F4629E53AB/w717/h525",
    specs: {
      Socket: "AM5",
      Chipset: "B650E",
      "Memory Support": "DDR5",
      "Form Factor": "ATX",
    },
    tags: ["ASUS", "B650E", "AM5", "DDR5", "ATX", "Gaming"],
    compatibility: {
      socket: "AM5",
      memoryType: "DDR5",
      formFactor: "ATX",
    },
  },
]

const powerSupplies: Component[] = [
  {
    id: "psu-1",
    type: "powerSupply",
    name: "Corsair RM1000x 1000W 80+ Gold",
    brand: "Corsair",
    price: 189.99,
    rating: 4.9,
    description: "A fully modular 1000W powerhouse with Gold-rated efficiency, providing clean, stable power for the most demanding high-end systems.",
    imageUrl: "https://elitehubs.com/cdn/shop/products/cp_9020201_in_image_main-600x600-1_1920x.webp?v=1695325652",
    specs: {
      Wattage: "1000W",
      Efficiency: "80+ Gold",
      Modularity: "Fully Modular",
      "Fan Size": "135mm",
    },
    tags: ["Corsair", "1000W", "80+ Gold", "Fully Modular"],
    compatibility: {
      wattage: 1000,
    },
  },
  {
    id: "psu-2",
    type: "powerSupply",
    name: "EVGA SuperNOVA 850 G6 850W 80+ Gold",
    brand: "EVGA",
    price: 149.99,
    rating: 4.8,
    description: "A highly reliable 850W PSU known for its excellent build quality and performance, making it a safe choice for most gaming PCs.",
    imageUrl: "https://images.evga.com/products/gallery/png/220-G6-0850-X1_XL_1.png",
    specs: {
      Wattage: "850W",
      Efficiency: "80+ Gold",
      Modularity: "Fully Modular",
      "Fan Size": "135mm",
    },
    tags: ["EVGA", "850W", "80+ Gold", "Fully Modular"],
    compatibility: {
      wattage: 850,
    },
  },
  {
    id: "psu-3",
    type: "powerSupply",
    name: "be quiet! Straight Power 11 750W 80+ Platinum",
    brand: "be quiet!",
    price: 139.99,
    rating: 4.7,
    description: "Engineered for near-silent operation without compromising on power, this 750W Platinum-rated unit is perfect for quiet builds.",
    imageUrl: "https://m.media-amazon.com/images/I/81EU0ntJC-L._SL1500_.jpg",
    specs: {
      Wattage: "750W",
      Efficiency: "80+ Platinum",
      Modularity: "Fully Modular",
      "Fan Size": "135mm",
    },
    tags: ["be quiet!", "750W", "80+ Platinum", "Silent"],
    compatibility: {
      wattage: 750,
    },
  },
  {
    id: "psu-4",
    type: "powerSupply",
    name: "Seasonic FOCUS GX-650 650W 80+ Gold",
    brand: "Seasonic",
    price: 109.99,
    rating: 4.8,
    description: "A compact and highly-rated 650W power supply from a trusted brand, delivering reliable Gold-rated efficiency for mid-range systems.",
    imageUrl: "https://m.media-amazon.com/images/I/71tKsBeb57S._AC_SL1500_.jpg",
    specs: {
      Wattage: "650W",
      Efficiency: "80+ Gold",
      Modularity: "Fully Modular",
      "Fan Size": "120mm",
    },
    tags: ["Seasonic", "650W", "80+ Gold", "Compact"],
    compatibility: {
      wattage: 650,
    },
  },
  {
    id: "psu-5",
    type: "powerSupply",
    name: "Corsair CX550M 550W 80+ Bronze",
    brand: "Corsair",
    price: 69.99,
    rating: 4.6,
    description: "A dependable and affordable 550W power supply, ideal for budget-conscious builds that don't require high-end power.",
    imageUrl: "https://m.media-amazon.com/images/I/51v0RsvDIeL.jpg",
    specs: {
      Wattage: "550W",
      Efficiency: "80+ Bronze",
      Modularity: "Semi-Modular",
      "Fan Size": "120mm",
    },
    tags: ["Corsair", "550W", "80+ Bronze", "Budget"],
    compatibility: {
      wattage: 550,
    },
  },
]

const cases: Component[] = [
  {
    id: "case-1",
    type: "case",
    name: "Lian Li O11 Dynamic EVO",
    brand: "Lian Li",
    price: 169.99,
    rating: 4.9,
    description: "A stunning and versatile mid-tower case beloved by enthusiasts for its dual-chamber layout, premium build, and tempered glass panels.",
    imageUrl: "https://lian-li.com/wp-content/uploads/2023/12/O11DERGB-000.jpg",
    specs: {
      Type: "Mid Tower",
      "Mobo Support": "E-ATX, ATX, Micro-ATX, Mini-ITX",
      "Max Radiator": "360mm",
      Color: "Black/White",
    },
    tags: ["Lian Li", "Mid Tower", "Tempered Glass", "Water Cooling"],
    compatibility: {
      formFactor: "ATX",
    },
  },
  {
    id: "case-2",
    type: "case",
    name: "Corsair 5000D Airflow",
    brand: "Corsair",
    price: 174.99,
    rating: 4.8,
    description: "A spacious mid-tower case focused on maximizing airflow with its perforated front and top panels, ideal for high-performance builds.",
    imageUrl: "https://static.bhphoto.com/images/images500x500/1664364074_1723204.jpg",
    specs: {
      Type: "Mid Tower",
      "Mobo Support": "ATX, Micro-ATX, Mini-ITX",
      "Max Radiator": "360mm",
      Color: "Black/White",
    },
    tags: ["Corsair", "Mid Tower", "Airflow", "High-Performance"],
    compatibility: {
      formFactor: "ATX",
    },
  },
  {
    id: "case-3",
    type: "case",
    name: "Fractal Design Meshify 2 Compact",
    brand: "Fractal Design",
    price: 139.99,
    rating: 4.8,
    description: "Combines a high-airflow mesh front with a sophisticated Scandinavian design in a compact ATX form factor.",
    imageUrl: "https://m.media-amazon.com/images/I/91onOaRNyeL._SL1500_.jpg",
    specs: {
      Type: "Mid Tower",
      "Mobo Support": "ATX, Micro-ATX, Mini-ITX",
      "Max Radiator": "360mm",
      Color: "Black/White",
    },
    tags: ["Fractal Design", "Mid Tower", "Airflow", "Minimalist"],
    compatibility: {
      formFactor: "ATX",
    },
  },
  {
    id: "case-4",
    type: "case",
    name: "NZXT H7 Flow",
    brand: "NZXT",
    price: 129.99,
    rating: 4.7,
    description: "A clean and minimalist mid-tower case featuring a perforated front panel for excellent thermal performance out of the box.",
    imageUrl: "https://m.media-amazon.com/images/I/81Gg4s1YBEL._SL1500_.jpg",
    specs: {
      Type: "Mid Tower",
      "Mobo Support": "E-ATX, ATX, Micro-ATX, Mini-ITX",
      "Max Radiator": "360mm",
      Color: "Black/White",
    },
    tags: ["NZXT", "Mid Tower", "Airflow", "Clean Design"],
    compatibility: {
      formFactor: "ATX",
    },
  },
  {
    id: "case-5",
    type: "case",
    name: "Cooler Master NR200P",
    brand: "Cooler Master",
    price: 99.99,
    rating: 4.8,
    description: "A highly acclaimed Small Form Factor (SFF) case that makes building a compact Mini-ITX system easy and accessible.",
    imageUrl: "https://m.media-amazon.com/images/I/51QqE+XJEpL._SL1280_.jpg",
    specs: {
      Type: "Mini Tower (SFF)",
      "Mobo Support": "Mini-ITX",
      "Max Radiator": "280mm",
      Color: "Multiple",
    },
    tags: ["Cooler Master", "Mini-ITX", "SFF", "Compact"],
    compatibility: {
      formFactor: "Mini-ITX",
    },
  },
]

const cooling: Component[] = [
  {
    id: "cooling-1",
    type: "cooling",
    name: "NZXT Kraken 360 RGB",
    brand: "NZXT",
    price: 199.99,
    rating: 4.8,
    description: "A premium 360mm AIO liquid cooler known for its iconic LCD display that can show system temps, images, or GIFs.",
    imageUrl: "https://m.media-amazon.com/images/I/41Yat2-orIL._SL1000_.jpg",
    specs: {
      Type: "AIO Liquid Cooler",
      "Radiator Size": "360mm",
      "Fan Size": "3x 120mm",
      Feature: "LCD Screen",
    },
    tags: ["NZXT", "AIO", "360mm", "RGB", "LCD"],
    compatibility: {
      tdp: 300,
    },
  },
  {
    id: "cooling-2",
    type: "cooling",
    name: "Corsair iCUE H150i Elite Capellix XT",
    brand: "Corsair",
    price: 189.99,
    rating: 4.8,
    description: "A high-performance 360mm AIO with extremely bright Capellix RGB LEDs and powerful fans for excellent cooling.",
    imageUrl: "https://m.media-amazon.com/images/I/71hsRGvyfWL._SL1500_.jpg",
    specs: {
      Type: "AIO Liquid Cooler",
      "Radiator Size": "360mm",
      "Fan Size": "3x 120mm",
      Feature: "Bright RGB",
    },
    tags: ["Corsair", "AIO", "360mm", "RGB"],
    compatibility: {
      tdp: 300,
    },
  },
  {
    id: "cooling-3",
    type: "cooling",
    name: "Noctua NH-D15 chromax.black",
    brand: "Noctua",
    price: 109.99,
    rating: 4.9,
    description: "The king of air coolers, now in a sleek all-black finish. Offers elite cooling performance that rivals many AIOs, but with near-silent operation.",
    imageUrl: "https://m.media-amazon.com/images/I/91t48GBv8TL._SL1500_.jpg",
    specs: {
      Type: "Dual-Tower Air Cooler",
      "Fan Size": "2x 140mm",
      Height: "165mm",
      Color: "Black",
    },
    tags: ["Noctua", "Air Cooler", "Dual Tower", "Silent", "High-Performance"],
    compatibility: {
      tdp: 250,
    },
  },
  {
    id: "cooling-4",
    type: "cooling",
    name: "be quiet! Dark Rock Pro 4",
    brand: "be quiet!",
    price: 89.99,
    rating: 4.8,
    description: "A massive dual-tower air cooler designed for exceptional thermal dissipation with virtually inaudible operation.",
    imageUrl: "https://www.bequiet.com/admin/ImageServer.php?ID=05988a15638@be-quiet.net&omitPreview=true&.jpg",
    specs: {
      Type: "Dual-Tower Air Cooler",
      "Fan Size": "1x 120mm, 1x 135mm",
      Height: "163mm",
      Color: "Black",
    },
    tags: ["be quiet!", "Air Cooler", "Silent", "Dual Tower"],
    compatibility: {
      tdp: 250,
    },
  },
  {
    id: "cooling-5",
    type: "cooling",
    name: "Arctic Liquid Freezer II 240",
    brand: "Arctic",
    price: 99.99,
    rating: 4.7,
    description: "Widely regarded as one of the best value AIOs, offering top-tier cooling performance that punches well above its price point.",
    imageUrl: "https://m.media-amazon.com/images/I/61ursiZnPIL._SL1199_.jpg",
    specs: {
      Type: "AIO Liquid Cooler",
      "Radiator Size": "240mm",
      "Fan Size": "2x 120mm",
      Feature: "Thick Radiator",
    },
    tags: ["Arctic", "AIO", "240mm", "Value", "Performance"],
    compatibility: {
      tdp: 250,
    },
  },
  
]
const keyboards: Component[] = [
  {
    id: "keyboard-1",
    type: "keyboard",
    name: "Corsair K95 RGB Platinum XT",
    brand: "Corsair",
    price: 199.99,
    rating: 4.9,
    description:
      "A premium mechanical keyboard featuring Cherry MX switches, per-key RGB, and dedicated macro keys for gamers and creators.",
    imageUrl: "https://m.media-amazon.com/images/I/81T8Fv98P-L._SL1500_.jpg",
    specs: {
      Switches: "Cherry MX Speed",
      Backlight: "RGB",
      Connectivity: "Wired USB",
    },
    tags: ["Corsair", "Mechanical", "RGB", "Gaming", "Macro"],
    compatibility: {
      tdp: 250,
    },
  },
  {
    id: "keyboard-2",
    type: "keyboard",
    name: "Logitech G Pro X",
    brand: "Logitech",
    price: 149.99,
    rating: 4.8,
    description:
      "Compact tenkeyless keyboard designed for esports professionals with swappable GX mechanical switches.",
    imageUrl: "https://m.media-amazon.com/images/I/71kaE1YdSBL._SL1500_.jpg",
    specs: {
      Switches: "GX Blue",
      Backlight: "RGB",
      Connectivity: "Wired USB",
    },
    tags: ["Logitech", "Mechanical", "Tenkeyless", "Esports"],
    compatibility: {
      tdp: 250,
    },
  },
];

const mice: Component[] = [
  {
    id: "mouse-1",
    type: "mouse",
    name: "Logitech G502 HERO",
    brand: "Logitech",
    price: 79.99,
    rating: 4.9,
    description:
      "High-performance gaming mouse with 11 programmable buttons and HERO 25K sensor for extreme precision.",
    imageUrl: "https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg",
    specs: {
      Sensor: "HERO 25K",
      DPI: "25,600",
      Buttons: "11",
      Connectivity: "Wired",
    },
    tags: ["Logitech", "Gaming", "Ergonomic", "RGB"],
    compatibility: {
      tdp: 250,
    },
  },
  {
    id: "mouse-2",
    type: "mouse",
    name: "Razer DeathAdder V3 Pro",
    brand: "Razer",
    price: 149.99,
    rating: 4.8,
    description:
      "Lightweight wireless gaming mouse featuring Focus Pro 30K optical sensor and 90 hours of battery life.",
    imageUrl: "https://m.media-amazon.com/images/I/61cTBUo+HqL._SL1500_.jpg",
    specs: {
      Sensor: "Focus Pro 30K",
      DPI: "30,000",
      Weight: "63g",
      Connectivity: "Wireless",
    },
    tags: ["Razer", "Wireless", "Lightweight", "Gaming"],
    compatibility: {
      tdp: 250,
    },
  },
]

const headsets: Component[] = [
  {
    id: "headset-1",
    type: "headset",
    name: "SteelSeries Arctis Nova Pro Wireless",
    brand: "SteelSeries",
    price: 349.99,
    rating: 4.9,
    description:
      "Premium wireless gaming headset with dual battery system, Hi-Res audio, and active noise cancellation.",
    imageUrl: "https://m.media-amazon.com/images/I/71UnZBP0EWL._SL1500_.jpg",
    specs: {
      Type: "Wireless",
      Drivers: "40mm Neodymium",
      NoiseCancelling: "Active",
    },
    tags: ["SteelSeries", "Wireless", "ANC", "Hi-Res Audio"],
    compatibility: {
      tdp: 250,
    },
  },
  {
    id: "headset-2",
    type: "headset",
    name: "HyperX Cloud II",
    brand: "HyperX",
    price: 99.99,
    rating: 4.8,
    description:
      "Legendary comfort and 7.1 virtual surround sound make this a fan-favorite for gamers.",
    imageUrl: "https://m.media-amazon.com/images/I/71nbfl-JklL._SL1500_.jpg",
    specs: {
      Type: "Wired",
      Drivers: "53mm",
      Surround: "7.1 Virtual",
    },
    tags: ["HyperX", "Wired", "7.1", "Comfort"],
    compatibility: {
      tdp: 250,
    },
  },
];

const operatingSystems: Component[] = [
  {
    id: "os-1",
    type: "operatingSystem",
    name: "Windows 11 Pro",
    brand: "Microsoft",
    price: 199.99,
    rating: 4.7,
    description:
      "The latest Windows OS with productivity, gaming, and security enhancements for modern PCs.",
    imageUrl: "https://m.media-amazon.com/images/I/71eo5Xy3pBL._SL1500_.jpg",
    specs: {
      Version: "Windows 11 Pro",
      Architecture: "64-bit",
      LicenseType: "Retail",
    },
    tags: ["Microsoft", "Windows", "64-bit", "Productivity"],
    compatibility: {
      tdp: 250,
    },
  },
  {
    id: "os-2",
    type: "operatingSystem",
    name: "Ubuntu 24.04 LTS",
    brand: "Canonical",
    price: 0,
    rating: 4.9,
    description:
      "Free and open-source Linux-based OS designed for developers and professionals.",
    imageUrl: "https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo32.png",
    specs: {
      Version: "24.04 LTS",
      Architecture: "64-bit",
      LicenseType: "Open Source",
    },
    tags: ["Linux", "Ubuntu", "Free", "Open Source"],
    compatibility: {
      tdp: 250,
    },
  },
];

const networkCards: Component[] = [
  {
    id: "net-1",
    type: "networkCard",
    name: "TP-Link Archer TX3000E Wi-Fi 6 PCIe",
    brand: "TP-Link",
    price: 49.99,
    rating: 4.7,
    description:
      "Wi-Fi 6 adapter providing ultra-low latency and Bluetooth 5.0 connectivity.",
    imageUrl: "https://m.media-amazon.com/images/I/71WHTNMLlUL._SL1500_.jpg",
    specs: {
      Standard: "Wi-Fi 6 (802.11ax)",
      Band: "Dual-band 2.4GHz/5GHz",
      Bluetooth: "5.0",
    },
    tags: ["Wi-Fi 6", "Bluetooth", "PCIe", "Low Latency"],
    compatibility: {
      tdp: 250,
    },
  },
];

const soundCards: Component[] = [
  {
    id: "sound-1",
    type: "soundCard",
    name: "Creative Sound BlasterX AE-5 Plus",
    brand: "Creative",
    price: 129.99,
    rating: 4.8,
    description:
      "PCIe sound card delivering pristine 32-bit/384kHz audio with customizable RGB lighting.",
    imageUrl: "https://m.media-amazon.com/images/I/71PhH5R7KfL._SL1500_.jpg",
    specs: {
      AudioQuality: "32-bit / 384kHz",
      SNR: "122dB",
      Interface: "PCIe",
    },
    tags: ["Creative", "Sound Blaster", "Hi-Fi", "RGB"],
    compatibility: {
      tdp: 250,
    },
  },
];

const fans: Component[] = [
  {
    id: "fan-1",
    type: "fan",
    name: "Noctua NF-A12x25 PWM",
    brand: "Noctua",
    price: 29.99,
    rating: 4.9,
    description:
      "Legendary 120mm fan known for near-silent operation and outstanding static pressure performance.",
    imageUrl: "https://m.media-amazon.com/images/I/81rjZ7j1JcL._SL1500_.jpg",
    specs: {
      Size: "120mm",
      RPM: "2000",
      NoiseLevel: "22.6 dBA",
    },
    tags: ["Noctua", "Cooling", "Silent", "PWM"],
    compatibility: {
      tdp: 250,
    },
  },
];

const thermalPastes: Component[] = [
  {
    id: "tp-1",
    type: "thermalPaste",
    name: "Arctic MX-6",
    brand: "Arctic",
    price: 9.99,
    rating: 4.8,
    description:
      "High-performance thermal compound offering excellent conductivity and easy application.",
    imageUrl: "https://m.media-amazon.com/images/I/71xI-2gKACL._SL1500_.jpg",
    specs: {
      ThermalConductivity: "7.5 W/mK",
      Volume: "4g",
    },
    tags: ["Thermal Paste", "Cooling", "Arctic"],
    compatibility: {
      tdp: 250,
    },
  },
];

const upsUnits: Component[] = [
  {
    id: "ups-1",
    type: "ups",
    name: "APC Back-UPS Pro 1500VA",
    brand: "APC",
    price: 249.99,
    rating: 4.8,
    description:
      "Reliable UPS with LCD display and automatic voltage regulation, ideal for gaming PCs and workstations.",
    imageUrl: "https://m.media-amazon.com/images/I/81Qw+Q0ZLrL._SL1500_.jpg",
    specs: {
      Capacity: "1500VA / 900W",
      Outlets: "10 (5 Battery + 5 Surge)",
      Type: "Line-Interactive",
    },
    tags: ["APC", "UPS", "Backup", "Power Protection"],
    compatibility: {
      tdp: 250,
    },
  },
];

const controllers: Component[] = [
  {
    id: "controller-1",
    type: "controller",
    name: "Xbox Wireless Controller",
    brand: "Microsoft",
    price: 59.99,
    rating: 4.9,
    description:
      "Ergonomic wireless controller compatible with PC, Xbox, and mobile devices via Bluetooth.",
    imageUrl: "https://m.media-amazon.com/images/I/61O8WeGKNbL._SL1500_.jpg",
    specs: {
      Connectivity: "Bluetooth / USB-C",
      BatteryLife: "Up to 30 hours",
    },
    tags: ["Xbox", "Wireless", "Bluetooth", "Gaming"],
    compatibility: {
      tdp: 250,
    },
  },
];




// Function to get components by type
export function getComponents(type: ComponentType): Component[] {
  switch (type) {
    case "cpu":
      return cpus
    case "gpu":
      return gpus
    case "ram":
      return ram
    case "storage":
      return storage
    case "motherboard":
      return motherboards
    case "powerSupply":
      return powerSupplies
    case "case":
      return cases
    case "cooling":
      return cooling
    case "keyboard":
      return keyboards
    case "mouse":
      return mice
    case "headset":
      return headsets
    case "operatingSystem":
      return operatingSystems
    case "networkCard":
      return networkCards
    case "soundCard":
      return soundCards
    case "fan":
      return fans
    case "thermalPaste":
      return thermalPastes
    case "ups":
      return upsUnits
    case "controller":
      return controllers
    default:
      return []
  }
}
