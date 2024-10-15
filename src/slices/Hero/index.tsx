import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import HeroDefault from "./HeroDefault";
import HeroWithButton from "./HeroWithButton";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

export default function Hero({ slice }: HeroProps) {
  switch (slice.variation) {
    case "default":
      return <HeroDefault slice={slice} />;
    case "heroWithButton":
      return <HeroWithButton slice={slice} />;
    default:
      return <HeroDefault slice={slice} />;
  }
}
