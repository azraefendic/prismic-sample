import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

export default function Button({ slice }: ButtonProps) {
  switch (slice.variation) {
    case "primary":
      return <ButtonPrimary slice={slice} />;
    case "secondary":
      return <ButtonSecondary slice={slice} />;
    default:
      return <ButtonPrimary slice={slice} />;
  }
}
