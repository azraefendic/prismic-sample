import type { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

type BannerProminentProps = {
  slice: Content.BannerSliceProminent;
};

export default function BannerProminent({ slice }: BannerProminentProps) {
  return (
    <section
      id={slice.primary.anchor || undefined}
      data-slice-variation={slice.variation}
      className="py-3 bg-red-600"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-grow text-center text-white text-xl font-bold">
          <PrismicRichText
            field={slice.primary.message}
            components={{
              paragraph: ({ children }) => <p className="m-0">{children}</p>,
            }}
          />
        </div>
        {slice.primary.cta_link && slice.primary.cta_text && (
          <PrismicNextLink
            field={slice.primary.cta_link}
            className="ml-4 px-4 py-2 rounded transition-colors bg-white text-red-600 hover:bg-red-100 font-bold"
          >
            {slice.primary.cta_text}
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
}
