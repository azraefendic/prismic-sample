import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type TeaserDefaultProps = {
  slice: Content.TeaserSliceDefault;
};

export default function TeaserDefault({
  slice,
}: TeaserDefaultProps): JSX.Element {
  return (
    <section className="relative bg-blue-50 text-blue-950 py-20">
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
