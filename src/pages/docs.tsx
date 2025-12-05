import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {

  const title2: string = "dematt world";
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 onClick={handleClick} className={title()}>{title2}</h1>
          <p>ceci est un premier petit paragraphe afin de s'exercer à coder en React</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
