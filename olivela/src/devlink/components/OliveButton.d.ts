import * as React from "react";
import * as Types from "./types";

declare function OliveButton(props: {
  as?: React.ElementType;
  buttonStyleButtonColor?:
    | "Primary"
    | "Primary Outline"
    | "Inverse"
    | "Inverse Outline"
    | "Secondary"
    | "Tertiary";
  buttonStyleButtonLink?: Types.Basic.Link;
  buttonStyleButtonId?: Types.Basic.IdTextInput;
  buttonStyleButtonCta?: React.ReactNode;
}): React.JSX.Element;
