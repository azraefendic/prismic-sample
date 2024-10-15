import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import BannerDefault from "./BannerDefault";
import BannerProminent from "./BannerProminent";

export type BannerProps = SliceComponentProps<Content.BannerSlice>;

export default function Banner({ slice }: BannerProps) {
  switch (slice.variation) {
    case "default":
      return <BannerDefault slice={slice} />;
    case "prominent":
      return <BannerProminent slice={slice} />;
    default:
      return <BannerDefault slice={slice} />;
  }
}
