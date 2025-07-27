"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { OliveButton } from "./OliveButton";
import * as _utils from "./utils";
import _styles from "./SingleHeadingCtaWithButton.module.css";

export function SingleHeadingCtaWithButton({
  as: _Component = _Builtin.Section,
  headingText = "Suite dreams, Hollywood nights",
  headingTag = "h2",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-tertiary")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "flex_vertical",
            "is-x-center",
            "text-align_center"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-align_center",
              "w-node-_6cc23aea-91cb-cee8-af7d-b823b2e5375f-b2e5375c"
            )}
            id={_utils.cx(
              _styles,
              "w-node-c97331e5-b40b-d28b-31f8-3745165011d6-165011d3"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "section_sweet-dreams", "eyebrow")}
              tag="div"
            >
              {"Step into West Hollywood style"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading_h2")}
              tag={headingTag}
            >
              {headingText}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "button-group", "is-align-center")}
              tag="div"
            >
              <OliveButton buttonStyleButtonColor="Primary" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
