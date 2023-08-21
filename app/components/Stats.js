export default function Stats({ h2, h3 }) {
  return (
    <article className="flex flex-col gap-1">
      <h2 className="text-inter font-bold text-2xl xl:text-3xl">{h2}</h2>
      <h3 className="text-transparent-white text-sm">{h3}</h3>
    </article>
  );
}
