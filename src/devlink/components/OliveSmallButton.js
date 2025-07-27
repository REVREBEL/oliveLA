"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OliveSmallButton.module.css";

export function OliveSmallButton({
  as: _Component = _Builtin.Link,
  buttonStyleButtonColor = "Small Primary",

  buttonStyleButtonLink = {
    href: "#",
  },

  buttonStyleButtonId,
  buttonStyleButtonCta = "submit",
}) {
  const _styleVariantMap = {
    "Small Primary": "",
    "Small Primary Outline": "w-variant-5283d317-22c8-f571-2a7b-75463d0c6adb",
    "Small Inverse": "w-variant-5283d317-22c8-f571-2a7b-75463d0c6adc",
    "Small Inverse Outline": "w-variant-5283d317-22c8-f571-2a7b-75463d0c6add",
    "Small Secondary": "w-variant-5283d317-22c8-f571-2a7b-75463d0c6ade",
    "Small Tertiary": "w-variant-5283d317-22c8-f571-2a7b-75463d0c6adf",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return (
    <_Component
      className={_utils.cx(_styles, "button", "is-small", _activeStyleVariant)}
      button={true}
      id={buttonStyleButtonId}
      block=""
      options={buttonStyleButtonLink}
    >
      {buttonStyleButtonCta}
    </_Component>
  );
}
