import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Doctrine from "@/components/doctrine";
import Market from "@/components/market";
import Treks from "@/components/treks";
import Curriculum from "@/components/curriculum";
import Leaders from "@/components/leaders";
import Blueprint from "@/components/blueprint";
import Financials from "@/components/financials";
import Legal from "@/components/legal";
import Enlist from "@/components/enlist";
import Footer from "@/components/footer";
import { getTreks, getLeaders } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [treks, leaders] = await Promise.all([getTreks(), getLeaders()]);

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Doctrine />
      <Market />
      <Treks treks={treks} />
      <Curriculum />
      <Leaders leaders={leaders} />
      <Blueprint />
      <Financials />
      <Legal />
      <Enlist
        treks={treks.map((t) => ({
          slug: t.slug,
          name: t.name,
          region: t.region,
        }))}
      />
      <Footer />
    </main>
  );
}
