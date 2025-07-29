"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OliveButton.module.css";

export function OliveButton({
  as: _Component = _Builtin.Link,
  buttonStyleButtonColor = "Primary",

  buttonStyleButtonLink = {
    href: "#",
  },

  buttonStyleButtonId,
  buttonStyleButtonCta = "book now",
}) {
  const _styleVariantMap = {
    Primary: "",
    "Primary Outline": "w-variant-a4ce45ea-1456-a9b1-ca8d-3f1b775164b8",
    Inverse: "w-variant-694c6b93-24d2-eba7-e303-3528ee01e28f",
    "Inverse Outline": "w-variant-a196f9ad-e0be-348c-d243-0f3247450fa1",
    Secondary: "w-variant-ab31972b-7cb1-5360-f4a4-4f04b4d3ed7d",
    Tertiary: "w-variant-52109836-4143-4253-2196-a1655d7f7036",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={true}
      id={buttonStyleButtonId}
      block=""
      options={buttonStyleButtonLink}
    >
      {buttonStyleButtonCta}
    </_Component>
  );
}
