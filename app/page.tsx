import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Footer from "@/components/main/footer";
import Showcase from "@/components/main/Showcase";
import LogoStrip from "@/components/main/LogoStrip";
import SplitFeature from "@/components/main/SplitFeature";
import HowItWorks from "@/components/main/HowItWorks";
import Testimonial from "@/components/main/Testimonial";


export default function Page() {
  return (
    <main>
      <Navbar />

<Hero />

<LogoStrip />

<SplitFeature />

<Showcase />

<HowItWorks />

<Testimonial /> 

<Footer />

    </main>
  );
}