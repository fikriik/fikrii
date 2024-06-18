import Navbar from "@/components/Navbar"
import Ngerep from "@/components/Ngerep";
import Seaction from "@/components/Seaction";
import Sleder from "@/components/Sleder"
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="">
        <Navbar />
        <Ngerep />
        <Sleder />
        <Seaction />
        <Team />
    </div>
  );
}