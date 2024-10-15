import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import TeaserDefault from "./TeaserDefault";
import TeaserWithImage from "./TeaserWithImage";

export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

export default function Teaser({ slice }: TeaserProps) {
  switch (slice.variation) {
    case "default":
      return <TeaserDefault slice={slice} />;
    case "teaserWithImage":
      return <TeaserWithImage slice={slice} />;
    default:
      return <TeaserDefault slice={slice} />;
  }
}
