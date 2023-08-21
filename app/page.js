import ArticleCard from "./components/ArticleCard";
import ImageCard from "./components/ImageCard";

export default function Home() {
  return (
    <main className=" h-auto xl:h-[45%] w-full xl:w-3/4 flex flex-col-reverse xl:flex-row mx-5 sm:mx-16 md:mx-28 duration-700">
      <ArticleCard />
      <ImageCard />
    </main>
  );
}
