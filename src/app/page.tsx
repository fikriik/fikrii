import Navbar from "@/components/Navbar";
import Ngerep from "@/components/Ngerep";
import Seaction from "@/components/Seaction";
import Team from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Ngerep />
      <Seaction />
      <Team />
    </div>
  );
}
