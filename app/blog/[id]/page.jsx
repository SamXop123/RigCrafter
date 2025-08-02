export const dynamic = 'force-dynamic';

const blogContent = {
  5: {
    title: "The Rise of OLED Gaming Monitors: Worth the Upgrade?",
    date: "August 2, 2025",
    author: "Anushka",
    readTime: "8 min read",
    content: (
      <>
        <p>
          OLED gaming monitors have gained popularity for their deep blacks, vivid colors, and fast response times.
          But are they worth the premium compared to traditional LCD or IPS panels?
        </p>
        <h2 className="text-xl font-semibold mt-4">🌈 Key Advantages of OLED</h2>
        <ul className="list-disc ml-6">
          <li>True blacks and infinite contrast ratio</li>
          <li>Fast response time (as low as 0.1ms)</li>
          <li>Better HDR performance</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">⚠️ Potential Drawbacks</h2>
        <ul className="list-disc ml-6">
          <li>Risk of burn-in with static UI elements</li>
          <li>Higher cost compared to other panels</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">🎯 Verdict</h2>
        <p>
          OLED monitors are ideal for immersive gaming and media consumption. If budget isn’t a constraint,
          they offer a premium experience.
        </p>
      </>
    )
  },
  6: {
    title: "DDR5-7200 vs DDR5-6000: Does Speed Matter?",
    date: "August 2, 2025",
    author: "Aleena",
    readTime: "7 min read",
    content: (
      <>
        <p>
          DDR5 memory speeds are increasing, but do higher numbers translate to real-world performance gains?
        </p>
        <h2 className="text-xl font-semibold mt-4">📈 Benchmark Insights</h2>
        <ul className="list-disc ml-6">
          <li>DDR5-7200 shows 3–8% FPS gain in memory-bound games</li>
          <li>Minimal impact in most productivity apps</li>
          <li>Price-to-performance favors DDR5-6000</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">💰 Which Should You Buy?</h2>
        <p>
          For casual gaming and budget builds, DDR5-6000 offers great value.
          DDR5-7200 is ideal for high-end or future-proof builds.
        </p>
      </>
    )
  }
};

// This function works for Next.js app router (13+)
export default function BlogPage({ params }) {
  const id = String(params.id);
  const blog = blogContent[id];

  if (!blog) {
    return <p className="text-center text-red-500 p-8">Blog not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {blog.author} • {blog.date} • {blog.readTime}
      </p>
      <div className="prose prose-invert max-w-none">{blog.content}</div>
    </div>
  );
}