import Navbar from "@/components/Navbar"
import Ngerep from "@/components/Ngerep";
import Seaction from "@/components/Seaction";
import Sleder from "@/components/Sleder"
import Team from "@/components/Team";
import Blog from "@/components/Blog"

export default function Home() {
  return (
    <div className="bg-white">
        <Navbar />
        <Ngerep />
        <Sleder />
        <Seaction />
        <Team />
        <Blog />
    </div>
  );
}