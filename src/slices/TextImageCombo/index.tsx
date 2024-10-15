import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type TextImageComboProps =
  SliceComponentProps<Content.TextImageComboSlice>;

const TextImageCombo = ({ slice }: TextImageComboProps): JSX.Element => {
  const imagePosition = slice.primary.image_position;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 md:py-16 bg-slate-200"
    >
      <div
        className={`container mx-auto px-4 flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
      >
        <div className="w-full md:w-1/2 space-y-4 text-black">
          <div className="mb-4 text-4xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <PrismicRichText field={slice.primary.description} />
        </div>
        <div className="w-full md:w-1/2">
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TextImageCombo;
