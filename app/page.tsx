import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Footer from "@/components/main/footer";
import Showcase from "@/components/main/Showcase";
import LogoStrip from "@/components/main/LogoStrip";


export default function Page() {
  return (
    <main>
      <Navbar />
<Hero />
<LogoStrip />
<Showcase />
<Footer />
    </main>
  );
}