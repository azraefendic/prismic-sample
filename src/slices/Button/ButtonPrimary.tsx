import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

export default function ButtonPrimary({
  slice,
}: {
  slice: Content.ButtonSlice;
}) {
  return (
    <button className="inline-flex items-center justify-center m-3">
      <PrismicNextLink
        field={slice.primary.link}
        className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-sm"
      >
        {slice.primary.label}
      </PrismicNextLink>
    </button>
  );
}
