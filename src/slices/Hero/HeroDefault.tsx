import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type HeroDefaultProps = {
  slice: Content.HeroSliceDefault;
};

export default function HeroDefault({ slice }: HeroDefaultProps): JSX.Element {
  return (
    <section className="relative bg-blue-800 text-white px-8 py-36">
      <div className="absolute inset-0">
        <PrismicNextImage
          field={slice.primary.image}
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
      <div className="relative text-center z-10">
        <div className="mb-4 text-4xl font-bold">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="mb-8 text-2xl mx-auto">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
      </div>
    </section>
  );
}
