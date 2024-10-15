import type { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type TeaserWithImageProps = {
  slice: Content.TeaserSliceTeaserWithImage;
};

export default function TeaserWithImage({
  slice,
}: TeaserWithImageProps): JSX.Element {
  return (
    <section className="relative bg-blue-50 text-blue-950 py-20">
      <div className="inset-0">
        <PrismicNextImage
          field={slice.primary.image}
          className="w-full h-full object-cover object-center opacity-80 mb-8"
        />
      </div>
      <div className="relative text-center z-10">
        <div className="mb-4 text-4xl font-bold">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="mb-8 text-lg mx-auto">{slice.primary.description}</div>
        <PrismicNextLink
          field={slice.primary.teaser_link}
          className="mt-4 px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        />
      </div>
    </section>
  );
}
