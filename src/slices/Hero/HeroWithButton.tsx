import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import ButtonPrimary from "../Button/ButtonPrimary";

type HeroWithButtonProps = {
  slice: Content.HeroSliceHeroWithButton & { id: string };
};

export default function HeroWithButton({
  slice,
}: HeroWithButtonProps): JSX.Element {
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
        {slice.primary.cta_link && slice.primary.cta_label && (
          <ButtonPrimary
            slice={{
              variation: "primary",
              version: "sktwi1xtmkfgx8626",
              items: [],
              primary: {
                label: slice.primary.cta_label,
                link: slice.primary.cta_link,
              },
              id: `hero-button-${slice.id}`,
              slice_type: "button",
              slice_label: null,
            }}
          />
        )}
      </div>
    </section>
  );
}
