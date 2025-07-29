import * as React from "react";
import * as Types from "./types";

declare function SectionPersonalizeCta(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  headingTag?: Types.Basic.HeadingTag;
  paragraphText?: React.ReactNode;
  socialLoginCta?: React.ReactNode;
  createProfileCra?: React.ReactNode;
  imagesTopLeftImage?: Types.Asset.Image;
  imagesTopLeftImageAltText?: Types.Basic.AltText;
  imagesBottomLeftImage?: Types.Asset.Image;
  imagesBottomLeftImageAltText?: Types.Basic.AltText;
  imagesRightImage?: Types.Asset.Image;
  imagesRightImageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
