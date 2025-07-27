import Navbar from "@/components/Navbar"
import Ngerep from "@/components/Ngerep";
import Seaction from "@/components/Seaction";
import Team from "@/components/Team";
import Blog from "@/components/Blog"

export default function Home() {
  return (
    <div className="bg-white">
        <Navbar />
        <Ngerep />
        <Seaction />
        <Team />
        <Blog />
    </div>
  );
}