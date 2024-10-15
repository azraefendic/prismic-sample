import type { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

type BannerDefaultProps = {
  slice: Content.BannerSliceDefault;
};

export default function BannerDefault({ slice }: BannerDefaultProps) {
  return (
    <section
      id={slice.primary.anchor || undefined}
      data-slice-variation={slice.variation}
      className="py-3 bg-blue-600"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-grow text-center text-white text-base">
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
            className="ml-4 px-4 py-2 rounded transition-colors bg-white text-blue-600 hover:bg-blue-100"
          >
            {slice.primary.cta_text}
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
}
