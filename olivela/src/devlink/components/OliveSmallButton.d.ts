import * as React from "react";
import * as Types from "./types";

declare function OliveSmallButton(props: {
  as?: React.ElementType;
  buttonStyleButtonColor?:
    | "Small Primary"
    | "Small Primary Outline"
    | "Small Inverse"
    | "Small Inverse Outline"
    | "Small Secondary"
    | "Small Tertiary";
  buttonStyleButtonLink?: Types.Basic.Link;
  buttonStyleButtonId?: Types.Basic.IdTextInput;
  buttonStyleButtonCta?: React.ReactNode;
}): React.JSX.Element;
