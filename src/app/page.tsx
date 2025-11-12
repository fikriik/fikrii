import Navbar from "@/components/Navbar";
import Ngerep from "@/components/Ngerep";
import Aboutme from "@/components/Aboutme";
import Seaction from "@/components/Seaction";
import Team from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Ngerep />
      <Aboutme/>
      <Seaction />
      <Team />
    </div>
  );
}
