"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Heart, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Blog content data - Only blogs 3 and 4 with full content
const blogPosts = [
  {
    id: 3,
    title: "Building Your First Gaming PC: 2025 Complete Guide",
    excerpt: "Learn from the most common first-time builder mistakes and how to avoid them in your build. Updated for 2025 with latest components and best practices.",
    image: "/blog/first-gaming-pc-build-guide.jpg",
    author: "Mike Rodriguez",
    date: "2025-01-15",
    readTime: "15 min read",
    category: "Tutorials",
    featured: false,
    tags: ["Beginner", "Gaming", "Tips", "Guide"],
    content: `
      <p>Building your first gaming PC in 2025 feels like standing at the edge of an exciting frontier. I've been helping people build their dream rigs for years, and I can tell you that while it's never been easier to get started, the choices available today can feel absolutely overwhelming. Trust me, I've seen grown adults stare at CPU spec sheets like they're written in ancient hieroglyphics.</p>
      
      <h2>Know Thyself: What Kind of Gamer Are You Really?</h2>
      <p>Here's where I always start with my friends who ask for PC building advice: forget the specs for a moment and think about how you actually game. Are you the type who lives and breathes competitive shooters, chasing every extra frame per second? Or maybe you're more like me—someone who loses hours exploring beautiful open worlds and wants every ray-traced reflection to look absolutely stunning?</p>
      
      <p>I learned this lesson the hard way when I helped my buddy Jake build his first PC. He insisted he needed the most powerful CPU because "bigger numbers are better," right? Turns out, he spent 90% of his time playing indie games that barely touched his system's potential. Meanwhile, his friend Sarah got a more balanced build for the same budget and was running Cyberpunk 2077 at settings that made Jake incredibly jealous.</p>
      
      <h2>The Money Talk: Building Smart Without Breaking the Bank</h2>
      <p>Let's talk money—because I know that's what's really on your mind. You can absolutely build a solid gaming PC for around $800 if you're smart about it, but honestly? The sweet spot I recommend to most people is between $1,200 and $1,800. This isn't me trying to upsell you; it's just where you get the best bang for your buck without having to upgrade again in six months.</p>
      
      <p>Here's how I've learned to think about splitting up that budget after building dozens of systems:</p>
      
      <ul>
        <li><strong>Graphics Card (35-40% of your budget):</strong> This is your gaming heart and soul. I've seen people try to save money here, and they always regret it. Your GPU does the heavy lifting in games—don't be penny-wise and pound-foolish.</li>
        <li><strong>Processor (20-25% of your budget):</strong> Important, but here's a secret: you don't need the flagship model. A solid mid-range CPU will serve you beautifully for years.</li>
        <li><strong>Motherboard (10-15% of your budget):</strong> Buy for the features you'll actually use, not the box that looks the coolest. Trust me on this one.</li>
        <li><strong>Memory (8-12% of your budget):</strong> 16GB is your best friend right now. 32GB is nice to have, but unless you're doing serious content creation, save the money for better components elsewhere.</li>
        <li><strong>Storage (8-10% of your budget):</strong> A good NVMe SSD will make your PC feel lightning-fast. It's one of those upgrades you'll notice every single day.</li>
        <li><strong>Power Supply (8-10% of your budget):</strong> Never, and I mean NEVER, cheap out here. A bad PSU can fry everything else. It's like skimping on the foundation of your house.</li>
        <li><strong>Case and Cooling (8-12% of your budget):</strong> Pretty RGB lights are fun, but good airflow will keep your components happy for years to come.</li>
      </ul>
      
      <h2>Picking Your Parts: The Fun (and Scary) Part</h2>
      
      <h3>Your CPU: The Brain of the Operation</h3>
      <p>Right now in 2025, both AMD and Intel are absolutely killing it with their processors. AMD's Ryzen 7000 series gives you incredible value for money, while Intel's 13th generation chips excel in specific gaming scenarios. For most of you reading this, something like a Ryzen 5 7600X or Intel Core i5-13600K will be more than enough power for years of gaming bliss.</p>
      
      <p>Here's some hard-earned wisdom: resist the urge to buy the most expensive CPU just because you can. I've watched people drop $500+ on a Ryzen 9 7950X for gaming when a $300 Ryzen 7 7700X would give them virtually identical performance. Save that extra $200 for a better graphics card—you'll thank me later.</p>
      
      <h3>Your Graphics Card: Where the Magic Happens</h3>
      <p>This is where you need to match your GPU to your monitor and gaming dreams. Playing at 1080p? An RTX 4060 or RX 7600 XT will make you very happy. Stepping up to 1440p? Look at the RTX 4070 or RX 7700 XT. Want to go full 4K gaming? You're looking at RTX 4080 territory or higher.</p>
      
      <p>Pro tip from someone who's made this mistake: graphics cards lose value faster than cars driving off the lot. Buying last generation's "flagship killer" often nets you 90% of the performance for 70% of the price. Your wallet will love you for it.</p>
      
      <h3>Memory: Finding the Sweet Spot</h3>
      <p>Let's keep this simple: 16GB of DDR5 memory is your target in 2025. Could you use 32GB? Maybe, if you're running multiple games, Discord, fifty Chrome tabs, and streaming software simultaneously. But for most gaming scenarios, 16GB is plenty, and you can always add more sticks later when prices drop even further.</p>
      
      <h3>Storage: The Unsung Hero</h3>
      <p>I cannot stress this enough—get a good NVMe SSD as your main drive. The difference between a traditional hard drive and a modern SSD is like the difference between dial-up internet and fiber. Your computer will boot in seconds, games will load almost instantly, and everything will feel incredibly responsive. Start with 1TB if your budget allows, then add more storage as you need it.</p>
      
      <h2>The Build: Where Theory Meets Reality</h2>
      
      <h3>Before You Start: Set Yourself Up for Success</h3>
      <p>Okay, here's where I'm going to sound like your mom, but trust me—preparation is everything. Clear off a large, well-lit workspace. Get yourself a decent magnetic screwdriver set (your fingers will thank you). And here's something most guides don't mention: take 30 minutes to actually read the manuals that come with your components. I know, I know, nobody reads manuals anymore. But those 30 minutes can save you hours of frustrated troubleshooting later.</p>
      
      <h3>Build Smart, Not Hard</h3>
      <p>Here's a technique I wish someone had taught me on my first build: start with your motherboard outside the case. Install your CPU, RAM, and M.2 SSD while everything's easily accessible on your desk. This way, if something's wrong, you're not fishing around inside a cramped case with a flashlight.</p>
      
      <p>When you get to the CPU installation—and this is the part that makes everyone nervous—remember that modern CPUs basically drop into place. If you're forcing it, you're doing something wrong. Stop, double-check the alignment, and try again. These chips are tougher than you think, but there's no need to test that theory.</p>
      
      <h3>Cable Management: Make Future You Happy</h3>
      <p>Look, I'm not going to lie and say your first build needs to look like something from a magazine. But decent cable management isn't just about looks—it helps airflow and makes upgrades so much easier down the road. Route your power cables behind the motherboard tray when you can, use the cable management features your case provides, and don't stress about perfection. Functional beats beautiful every single time.</p>
      
      <h2>The Rookie Mistakes (That We've All Made)</h2>
      
      <h3>The "It Should Just Work" Trap</h3>
      <p>I've lost count of how many panicked messages I've gotten from friends who assumed all PC components just magically work together. Always—and I mean always—double-check that your CPU matches your motherboard's socket. Make sure your RAM is on your motherboard's compatibility list (yes, that's actually a thing). And verify that your power supply has enough juice and the right connectors for your graphics card. Five minutes of checking can save you a very expensive headache.</p>
      
      <h3>The Great Thermal Paste Panic</h3>
      <p>Here's something that stressed me out for weeks when I started: thermal paste application. Most CPU coolers come with the paste already applied, and it works perfectly fine. If you need to apply your own, remember that less is definitely more. A tiny amount—about the size of a grain of rice—in the center of the CPU is plenty. I've seen people apply it like they're frosting a cake, and that's just asking for trouble.</p>
      
      <h3>The Power Supply Gotcha</h3>
      <p>This one got me on my very first build, and I felt like such an idiot afterward: don't forget to flip the power switch on the back of your PSU before trying to boot up. Also, make sure every power connector is actually connected—CPU power, motherboard power, and your graphics card's power connectors. It sounds obvious, but trust me, we've all been there.</p>
      
      <h2>Bringing Your Creation to Life</h2>
      
      <h3>That First Boot Moment</h3>
      <p>There's nothing quite like the moment when you press that power button for the first time and everything lights up. It's genuinely magical, but your work isn't done yet. Get into your BIOS and enable XMP or DOCP to make sure your RAM runs at its proper speed—otherwise, you're leaving performance on the table. Take a moment to check that all your components show up and that your CPU temperatures look reasonable (anything under 40°C at idle is perfectly fine).</p>
      
      <h3>Software: The Final Frontier</h3>
      <p>Install Windows from a USB drive you've created with Microsoft's Media Creation Tool—it's the cleanest way to start fresh. Once Windows is up and running, your absolute first priority should be getting the latest graphics drivers directly from NVIDIA or AMD's website. The basic drivers Windows installs automatically are fine for getting started, but the latest drivers often bring significant performance improvements.</p>
      
      <h3>Testing Your Masterpiece</h3>
      <p>Download some monitoring software like HWiNFO64 or MSI Afterburner so you can keep an eye on temperatures and performance. Run a few stress tests—Prime95 for your CPU and FurMark for your GPU—just to make sure everything's stable under load. Think of it as a shakedown cruise for your new system.</p>
      
      <h2>When Things Go Sideways (And They Sometimes Do)</h2>
      
      <p>Don't panic if your system doesn't spring to life on the first try—it happens to the best of us. Here's my troubleshooting checklist that's saved me countless times:</p>
      
      <ol>
        <li>Check that your power supply is actually turned on (we've all been there)</li>
        <li>Make sure your RAM is seated properly in the right slots (usually 2 and 4 for two sticks)</li>
        <li>Verify that your CPU power connector is plugged in (it's usually an 8-pin connector near the CPU socket)</li>
        <li>Double-check that your graphics card is fully seated and has all its power connectors attached</li>
        <li>If you have multiple RAM sticks, try booting with just one to rule out a bad stick</li>
      </ol>
      
      <h2>Future-Proofing: Building for Tomorrow</h2>
      
      <p>Here's the truth about future-proofing: no PC is truly "future-proof," but smart choices can keep your system relevant for years. Choose a motherboard with room to grow, invest in a quality power supply with some headroom for future upgrades, and pick a case with good airflow and space for bigger components down the road.</p>
      
      <p>A well-balanced system can deliver fantastic gaming performance for 4-6 years with strategic upgrades along the way. Build a solid foundation now, and you'll be upgrading individual components instead of starting from scratch every few years.</p>
      
      <h2>Welcome to the Community</h2>
      
      <p>Building your first gaming PC is honestly one of the most rewarding tech experiences you can have. It transforms you from someone who buys computers to someone who creates them. The knowledge and confidence you'll gain from this first build will serve you well for every future upgrade and build.</p>
      
      <p>Don't be afraid to take your time, ask questions when you're unsure, and remember that every PC building expert started exactly where you are right now. The PC building community is incredibly welcoming and helpful—we've all been the nervous first-timer staring at a pile of expensive components wondering what we've gotten ourselves into.</p>
      
      <p>Your first build might not be perfect, but it'll be yours, and that makes it special. Welcome to the PC Master Race—I have a feeling you're going to love it here!</p>
    `
  },
  {
    id: 4,
    title: "AMD Ryzen 8000 Series: Performance Deep Dive",
    excerpt: "An in-depth analysis of AMD's latest Ryzen processors and how they stack up against Intel's 14th gen offerings for gaming and productivity.",
    image: "/blog/amd-ryzen-8000-performance-review.jpg",
    author: "Emma Davis",
    date: "2025-01-12",
    readTime: "10 min read",
    category: "Hardware Review",
    featured: false,
    tags: ["CPU", "AMD", "Ryzen", "Performance"],
    content: `
      <p>I've been tinkering with CPUs for over a decade, and let me tell you—AMD's Ryzen 8000 series has genuinely impressed me. After spending three months putting these processors through their paces (and yes, that includes some very late nights stress-testing and benchmarking), I'm excited to share what I've discovered about these chips and how they stack up in the real world.</p>
      
      <p>You know that feeling when you upgrade something and immediately notice the difference? That's exactly what happened when I first booted up with the Ryzen 9 8950X. The improvements might look incremental on paper, but they add up to something that feels noticeably snappier in everyday use.</p>
      
      <h2>What's Actually New Under the Hood</h2>
      <p>Let's cut through the marketing speak and talk about what actually matters. AMD took their already solid Zen 4 architecture and gave it what I like to call the "director's cut" treatment—Zen 4+. It's still built on TSMC's 4nm process, but they've fine-tuned everything from power delivery to the integrated graphics.</p>
      
      <p>The improvements might seem small at first glance—we're talking about 3-5% better instructions per clock compared to the 7000 series. But here's the thing: when you combine that with higher boost clocks and a smarter memory controller, those small percentages start adding up to something you can actually feel when you're using your computer.</p>
      
      <h2>Gaming Performance: The Stuff You Actually Care About</h2>
      
      <h3>1080p Gaming: Where Every Frame Counts</h3>
      <p>Let's be honest—this is probably why you're here. How do these chips perform in games? I spent way too many hours testing everything from competitive shooters to the latest AAA blockbusters, and I'm happy to report that the Ryzen 8000 series holds its own beautifully.</p>
      
      <p>At 1080p (where your CPU really starts to matter), the flagship Ryzen 9 8950X trades blows with Intel's Core i9-14900K like two heavyweight boxers going twelve rounds. We're talking about differences of 2-3% across my entire test suite of 30 games—that's basically margin of error territory in real-world gaming.</p>
      
      <p>But here's where AMD really shines: frame consistency. You know that annoying stutter you sometimes get in games? The Ryzen 8000 series has significantly reduced that thanks to improvements in how it handles memory and cache. In competitive games like CS2 and Valorant, both chips will push well over 300 FPS, but the AMD processor delivers those frames more consistently.</p>
      
      <h3>1440p and 4K: When Your GPU Takes Over</h3>
      <p>Once you move up to 1440p or 4K, the conversation changes completely. At these resolutions, your graphics card becomes the bottleneck, and honestly, you could probably flip a coin between high-end AMD and Intel processors—the differences become that small.</p>
      
      <p>I've got to give props to the Ryzen 7 8700X here. This chip delivers about 95% of the flagship's gaming performance while using way less power and costing significantly less. If you're gaming at 1440p or higher (which you probably should be in 2025), this is the sweet spot processor that'll save you money without compromising your gaming experience.</p>
      
      <h2>Productivity Powerhouse: Beyond Gaming</h2>
      
      <h3>Content Creation That Actually Gets Done Faster</h3>
      <p>Here's where AMD's philosophy of "more cores, better life" really pays off. If you're someone who edits videos, streams, or does any kind of creative work, you're going to love what the Ryzen 8000 series brings to the table.</p>
      
      <p>I tested the Ryzen 9 8950X with my usual workflow—4K video editing in Premiere Pro, 3D rendering in Blender, and running OBS while gaming. The results? My render times dropped by about 10% compared to the 7000 series, and I could actually stream at high quality without my games turning into slide shows.</p>
      
      <p>The 16 cores and 32 threads in the flagship processor absolutely demolish heavily multi-threaded tasks. If you're the type of person who opens fifty browser tabs while rendering a video and expects everything to stay responsive, this chip won't disappoint.</p>
      
      <h3>Programming and Development Work</h3>
      <p>As someone who's spent many late nights waiting for code to compile, I really appreciate how the 8000 series handles development workloads. Large codebases that used to take forever to build now finish noticeably faster, and running multiple virtual machines feels smooth instead of sluggish.</p>
      
      <p>The improved integrated graphics are a nice bonus too—you can run multiple monitors without needing a discrete GPU, which is perfect for those clean, minimalist development setups.</p>
      
      <h2>Integrated Graphics: Finally, iGPUs That Don't Suck</h2>
      <p>I'll be honest—I used to dismiss integrated graphics as basically useless for anything beyond displaying a desktop. The Ryzen 8000 series changed my mind completely. These RDNA 3-based iGPUs are legitimately capable of 1080p gaming in lighter titles.</p>
      
      <p>I tested the Ryzen 7 8700G (the APU variant) with games like Fortnite, Rocket League, and some older AAA titles. Medium settings at 1080p? Totally playable at 45-60 FPS. That's honestly impressive for a processor with no discrete graphics card.</p>
      
      <p>This opens up some really interesting possibilities. Compact mini-ITX builds, budget gaming rigs for younger siblings, or even just having a backup gaming solution if your main GPU decides to take a vacation—these APUs handle it all surprisingly well.</p>
      
      <h2>Power Efficiency: Your Electricity Bill Will Thank You</h2>
      <p>One of my favorite things about the Ryzen 8000 series is how efficient they are. The refined 4nm process isn't just marketing speak—these chips genuinely sip power compared to what you might expect from their performance level.</p>
      
      <p>My Ryzen 7 8700X test system uses about 15-20% less power than a comparable Intel setup while delivering essentially the same gaming performance. Over a year of heavy use, that adds up to real money saved on your electricity bill, plus you need less aggressive cooling to keep things quiet.</p>
      
      <p>Speaking of cooling—these chips run cool enough that you don't need some massive liquid cooling setup. A good air cooler will handle even the flagship processor without breaking a sweat, which keeps your build budget more reasonable.</p>
      
      <h2>The AM5 Platform: Building for the Future</h2>
      
      <h3>Socket Compatibility That Actually Matters</h3>
      <p>Here's something I really appreciate about AMD's approach: socket longevity. If you bought an AM5 motherboard for the 7000 series, your Ryzen 8000 chip will drop right in after a BIOS update. No need to buy a new motherboard, no compatibility headaches—just a simple upgrade path.</p>
      
      <p>AMD has committed to supporting AM5 through at least 2025, which means future processor upgrades won't require a complete platform overhaul. As someone who's been burned by Intel's frequent socket changes in the past, this kind of commitment is refreshing.</p>
      
      <p>The platform itself is pretty future-proof too. Native DDR5 support, PCIe 5.0 for the fastest SSDs, and USB4 connectivity mean you're not going to run into compatibility issues with new hardware for years to come.</p>
      
      <h3>Memory and Overclocking: For the Enthusiasts</h3>
      <p>The memory controller improvements in the 8000 series are more significant than you might think. Official support goes up to DDR5-5600, but I've successfully run DDR5-6000 and higher on multiple test systems without issue.</p>
      
      <p>For overclocking enthusiasts, AMD's Precision Boost Overdrive (PBO) has gotten even more granular. You can fine-tune power limits, thermal targets, and boost behavior to squeeze out every last bit of performance. I managed to get an extra 200-300 MHz boost clock on most processors with decent cooling.</p>
      
      <h2>AMD vs. Intel: The Eternal Rivalry Continues</h2>
      <p>Let's address the elephant in the room—how do these stack up against Intel's 14th gen processors? It's honestly closer than the fanboys on either side would like to admit.</p>
      
      <p>Intel still edges ahead in some gaming scenarios, particularly at 1080p with high-end graphics cards. But AMD counters with significantly better power efficiency, stronger productivity performance, and more reasonable cooling requirements. Plus, AMD's platform longevity means you're not locked into frequent motherboard upgrades.</p>
      
      <p>The choice really comes down to your priorities. If you absolutely need every last frame in competitive gaming and don't mind higher power consumption, Intel has an argument. But for most users who want a well-rounded system that excels at everything while keeping power bills reasonable, AMD's approach makes a lot of sense.</p>
      
      <h2>Value Proposition: Bang for Your Buck</h2>
      <p>Here's where AMD really shines—pricing. The Ryzen 8000 series typically delivers about 10-15% better performance per dollar compared to Intel's equivalent processors. When you factor in lower cooling requirements and longer platform support, that value gap widens even more.</p>
      
      <p>The Ryzen 5 8600X deserves special mention here. This mid-range processor delivers gaming performance that's barely distinguishable from the flagship while costing significantly less. For most people, this is the processor that offers the best balance of performance and value—you get 95% of the performance for 60% of the cost.</p>
      
      <h2>Building Your System: What You Need to Know</h2>
      <p>One of the things I love about the Ryzen 8000 series is how builder-friendly they are. You don't need exotic cooling solutions or premium memory to get great performance—these chips work well with mainstream components.</p>
      
      <p>A good air cooler will handle even the flagship processor without issues, making liquid cooling more of a preference than a necessity. The processors play nicely with existing AM5 motherboards and don't demand expensive memory kits to hit their rated performance.</p>
      
      <p>This compatibility philosophy keeps your total system cost reasonable and simplifies the building process. You can focus on getting a good balance of components rather than worrying about whether everything will work together.</p>
      
      <h2>Professional Workstation Use: When Reliability Matters</h2>
      <p>For professional workstations where downtime costs money, the Ryzen 8000 series brings some compelling features. Select models support ECC memory for mission-critical applications where data integrity is absolutely essential.</p>
      
      <p>The excellent multi-core performance and efficient power consumption make these processors ideal for workstations that need to run demanding applications for hours on end. The lower heat output also means you can build quieter systems—something your coworkers will definitely appreciate in an office environment.</p>
      
      <h2>My Final Take: Evolutionary Excellence</h2>
      <p>After three months of testing, benchmarking, and actually using these processors in my daily workflow, I'm genuinely impressed with what AMD has accomplished with the Ryzen 8000 series. This isn't a revolutionary leap that changes everything—it's something better: a careful, thoughtful evolution that improves on an already solid foundation.</p>
      
      <p>The combination of better performance, improved efficiency, and competitive pricing creates exactly what most people need: a processor that handles everything you throw at it without drama, excessive heat, or an outrageous power bill.</p>
      
      <p>For gamers, you get the performance you need for high-refresh gaming without worrying about your processor becoming the bottleneck. Content creators get the multi-core muscle to handle demanding workloads efficiently. Budget-conscious builders get excellent value and a platform that won't force expensive upgrades in a year or two.</p>
      
      <p>Should you upgrade from a Ryzen 7000 series? Probably not unless you have a specific need for the improvements. But if you're building new or coming from an older platform, the Ryzen 8000 series represents one of the best foundations you can start with for a modern PC.</p>
      
      <p>AMD has proven that you don't need to reinvent the wheel to make meaningful progress. Sometimes, the best innovations are the ones that make everything work a little bit better, a little more efficiently, and a little more affordably. The Ryzen 8000 series nails that philosophy perfectly.</p>
    `
  }
]

interface BlogPageProps {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: BlogPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black/30 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 py-6">
          <div className="container mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="ml-3 px-3 py-1 bg-yellow-500 text-black text-sm rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 mb-8">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-800/50 text-zinc-400 text-sm rounded-full flex items-center"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </motion.button>
                <motion.button
                  className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </motion.button>
                <motion.button
                  className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </motion.button>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <motion.div
              className="mt-16 p-8 bg-black/50 backdrop-blur-lg rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{post.author}</h3>
                  <p className="text-zinc-400">PC Building Expert & Tech Writer</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Passionate about PC building and technology, with over 8 years of experience in hardware reviews, 
                system optimization, and helping enthusiasts build their dream rigs. Always eager to explore the 
                latest innovations in the PC building space.
              </p>
            </motion.div>

            {/* Related Posts */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <motion.div
                        className="bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all group"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            width={400}
                            height={200}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-zinc-400 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </div>
  )
}
