"use client"

import { Calendar, Clock, ArrowLeft, User, Tag } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogPage8() {
    const tags = ["SSD", "PCIe 5.0", "Storage", "Performance"]

    return (
        <main className="min-h-screen pt-32 pb-16 px-4 bg-black text-white">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </motion.div>
                {/* Cover Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-xl border border-white/10"
                >
                    <Image
                        src="/blog/SSD.png"
                        alt="PCIe 5.0 SSDs"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Title and Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl font-bold leading-tight">
                        PCIe 5.0 SSDs: The Future of Storage is Here
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
                        <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            Maria Garcia
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            January 3, 2025
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            7 min read
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            Storage
                        </div>
                    </div>
                </motion.div>


                <section className="bg-gray-950 text-gray-100 font-sans px-6 py-12 md:px-16 leading-relaxed max-w-5xl mx-auto scroll-smooth">
                    <header className="mb-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                            PCIe 5.0 SSD
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
                            The world of PC storage is evolving rapidly. PCIe 5.0 SSDs offer blazing fast data transfer speeds that revolutionize load times and workflow efficiency for gamers, content creators, and tech enthusiasts.
                        </p>
                    </header>

                    <article className="space-y-8 leading-relaxed max-w-3xl mx-auto">
                        {/* What is PCIe 5.0 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-sky-400 mb-3">What is PCIe 5.0 and Why Does It Matter?</h2>
                            <p>
                                <strong>PCIe 5.0</strong> (Peripheral Component Interconnect Express 5.0) is the latest high-speed standard connecting crucial PC components like SSDs, GPUs, and CPUs on the motherboard. It doubles the bandwidth of PCIe 4.0, reaching <strong>32 gigatransfers per second (GT/s) per lane</strong>.
                            </p>
                            <p>
                                Modern M.2 SSDs typically use four lanes (x4), enabling PCIe 5.0 drives to hit read speeds of up to <strong>14,000MB/s</strong>, compared to around 8,000MB/s from PCIe 4.0. This leap significantly cuts wait times for file transfers, gaming load screens, and asset streaming.
                            </p>
                        </section>

                        {/* Gaming and performance */}
                        <section>
                            <h2 className="text-2xl font-semibold text-sky-400 mb-3">How PCIe 5.0 SSDs Impact Gaming and Performance</h2>
                            <img src="/blog/SSD1.png" alt="SSD" />
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>Revolutionizing Load Times:</strong> Technologies like Microsoft’s DirectStorage stream game assets directly from SSDs to GPUs, dramatically reducing load screens and visual pop-in, especially in vast open worlds.
                                </li>
                                <li>
                                    <strong>Future-Proofing Builds:</strong> While most current games are designed around PCIe 4.0-speed drives (PS5 and Xbox Series X standards), upcoming titles with ultra-high-resolution textures and complex worlds will demand PCIe 5.0 speeds.
                                </li>
                                <li>
                                    <strong>Seamless Platform Support:</strong> Modern Intel (12th Gen Alder Lake and newer) and AMD (Ryzen 7000 and later) platforms fully support PCIe 5.0, ensuring compatibility for high-performance builds.
                                </li>
                            </ul>
                        </section>

                        {/* Caveats */}
                        <section>
                            <h2 className="text-2xl font-semibold text-sky-400 mb-3">Caveats Gamers Should Know</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>Diminishing Returns Today:</strong> Most games don’t yet fully exploit PCIe 5.0 speeds, meaning load time improvements over PCIe 4.0 are usually only a few seconds.
                                </li>
                                <li>
                                    <strong>Higher Cost and Thermal Output:</strong> PCIe 5.0 SSDs command premium prices (~$230–$260 for 2TB) and produce more heat, often requiring larger heatsinks or fans.
                                </li>
                                <li>
                                    <strong>Fully Backwards Compatible:</strong> Older PCIe 3.0/4.0 SSDs work in PCIe 5.0 slots without issue but run at their native speeds.
                                </li>
                            </ul>
                        </section>

                        {/* Who should buy */}
                        <section>

                            <h2 className="text-2xl font-semibold text-sky-400 mb-3">Who Should Buy PCIe 5.0 SSDs Today?</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Hardcore gamers and enthusiasts</strong> building bleeding-edge rigs aiming for the fastest load times and DirectStorage-enabled game experiences.</li>
                                <li><strong>Content creators and professionals</strong> handling large 4K/8K video projects, 3D models, or simulations benefiting from faster storage.</li>
                                <li><strong>Early adopters and future-proofers</strong> wanting systems ready for next-gen software advances without immediate upgrade pressure.</li>
                            </ul>
                        </section>

                        {/* When to wait */}
                        <section>
                            <h2 className="text-2xl font-semibold text-sky-400 mb-3">When It Makes Sense to Wait</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Casual and mainstream gamers playing non-demanding or older games often won’t see noticeable gains over quality PCIe 4.0 SSDs.</li>
                                <li>Budget-conscious builders should consider investing in GPU, CPU, or RAM upgrades instead, which yield more perceptible gaming boosts today.</li>
                                <li>Those already equipped with speedy PCIe 4.0 NVMe SSDs can safely hold off until PCIe 5.0 gains broader software support and price drops.</li>
                            </ul>
                        </section>

                        {/* Final thoughts */}
                        <section>
                            <h2 className="text-2xl font-semibold text-sky-400 mb-3">Final Thoughts</h2>
                            <p>
                                PCIe 5.0 SSDs mark the dawn of ultra-fast storage technology, poised to significantly transform gaming load times and professional workflows. They promise unparalleled throughput and compatibility with next-gen software like DirectStorage.
                            </p>
                            <p>
                                However, since the ecosystem is still maturing, high-quality PCIe 4.0 SSDs offer excellent real-world performance for most users right now at a more accessible price. As games and applications evolve, PCIe 5.0 will become increasingly standard. Investing early is a smart move for those wanting to stay at the forefront of PC innovation.
                            </p>
                        </section>
                    </article>
                    <div className="mt-16 pt-8 border-t border-white/10 text-center text-zinc-300">
                        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                        <p className="text-sm">We hope this guide helped you make a smarter upgrade decision. Stay tuned for more PC insights and tech tips!</p>
                    </div>

                </section>

            </div>
        </main>
    )
}
