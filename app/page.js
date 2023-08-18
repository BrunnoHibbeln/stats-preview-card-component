import Image from "next/image";
import bgDesktop from "./images/image-header-desktop.jpg";

export default function Home() {
  return (
    <main className="h-[55%] w-4/5 flex flex-row">
      <section className="bg-desaturated-blue h-full w-[55%] rounded-l-xl">
        <article className="h-full w-full flex flex-col justify-center items-center text-left text-white gap-8 pl-24 pr-32">
          <h1 className="text-white font-inter font-bold text-5xl leading-[3.5rem]">
            Get <strong className="text-soft-violet">insights</strong> that help
            your business grow.
          </h1>
          <p className="text-very-transparent-white">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <section>
            <article>
              <h2 className="">10k+</h2>
              <h3 className="text-transparent-white">COMPANIES</h3>
            </article>
            <article>
              <h2 className="">314</h2>
              <h3 className="text-transparent-white">TEMPLATES</h3>
            </article>
            <article>
              <h2 className="">12M+</h2>
              <h3 className="text-transparent-white">QUERIES</h3>
            </article>
          </section>
        </article>
      </section>
      <section className="relative h-full w-[45%] rounded-r-xl">
        <Image
          className="w-full h-full rounded-r-xl"
          src={bgDesktop}
          alt="Background Image for Desktop"
        />
        <div className="absolute top-0 h-full w-full rounded-r-xl bg-soft-violet opacity-50 contrast-150 saturate-150 brightness-50" />
      </section>
    </main>
  );
}
