import Image from "next/image";

export default function ImageCard() {
  return (
    <section className="relative bg-mobile xl:bg-desktop bg-cover h-72 xl:h-full w-full xl:w-[45%] rounded-t-xl xl:rounded-l-none xl:rounded-r-xl duration-200">
      <div className="absolute top-0 h-full w-full rounded-t-xl xl:rounded-l-none xl:rounded-r-xl bg-soft-violet opacity-50 contrast-150 saturate-150 brightness-50" />
    </section>
  );
}
