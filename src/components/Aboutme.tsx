"use client";

export default function Aboutme() {
  return (
    <section className="bg-[#080808] text-gray-200 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-12">
      {/* Kiri - Deskripsi */}
      <div className="lg:w-2/3 space-y-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight">
          About Me
        </h1>

        <p className="text-lg leading-relaxed text-gray-400">
          I’m <span className="font-semibold text-white">Fikrii</span> — a
          videographer, social media specialist, and web developer based in
          Indonesia. I love crafting stories through
          <span className="text-white"> visuals, strategy, and code</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-400">
          I’ve been freelancing for over
          <span className="text-white font-semibold"> 3 years</span>, helping
          brands and creators grow with modern, elegant, and high-performing
          digital content.
        </p>
      </div>

      {/* Kanan - Info Singkat */}
      <div className="lg:w-1/3 mt-12 lg:mt-0 bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-2xl p-8 shadow-xl w-full max-w-sm backdrop-blur-sm">
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-bold text-white">3+ Years</h3>
            <p className="text-gray-400 text-sm">Freelance Experience</p>
          </li>
          <li>
            <h3 className="text-xl font-bold text-white">Creative Developer</h3>
            <p className="text-gray-400 text-sm">Videography & Web Design</p>
          </li>
          <li>
            <h3 className="text-xl font-bold text-white">GrowWithZ</h3>
            <p className="text-gray-400 text-sm">Founder & Developer</p>
          </li>
          <li>
            <h3 className="text-xl font-bold text-white">Indonesia</h3>
            <p className="text-gray-400 text-sm">Based in Jogja</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
