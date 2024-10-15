import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

export default function ButtonSecondary({
  slice,
}: {
  slice: Content.ButtonSliceSecondary;
}) {
  return (
    <button className="inline-flex items-center justify-center m-3">
      <PrismicNextLink
        field={slice.primary.link}
        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-sm"
      >
        {slice.primary.label}
      </PrismicNextLink>
    </button>
  );
}
