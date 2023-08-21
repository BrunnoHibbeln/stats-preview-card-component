import Stats from "./Stats";

export default function ArticleCard() {
  return (
    <section className="relative bg-desaturated-blue h-full w-full xl:w-[55%] xl:pr-8 rounded-b-xl xl:rounded-r-none xl:rounded-l-xl duration-300">
      <article className="h-full w-full flex flex-col mt-3 2xl:mt-10 items-center text-center xl:text-left text-white gap-4 xl:gap-8 px-9 xl:pl-24 2xl:pr-32 mb-10">
        <h1 className="text-white font-inter font-bold text-2xl sm:text-4xl 2xl:text-[40px] xl:leading-snug xl:mt-16">
          Get <strong className="text-soft-violet">insights</strong> that help
          your business grow.
        </h1>
        <p className="text-very-transparent-white text-body xl:text-lg font-inter">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <section className="xl:fixed xl:bottom-[30%] flex flex-col xl:flex-row gap-3 xl:gap-20 2xl:gap-32 xl:pt-14">
          <Stats h2="10k+" h3="COMPANIES" />
          <Stats h2="314" h3="TEMPLATES" />
          <Stats h2="12M+" h3="QUERIES" />
        </section>
      </article>
    </section>
  );
}
