"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionPersonalizeCta.module.css";

export function SectionPersonalizeCta({
  as: _Component = _Builtin.Section,
  headingText = "Start your personalized stay here",
  headingTag = "h2",
  paragraphText = "Log in with your social account to receive personalized recommendations, unlock exclusive member-only rates, and enjoy a curated journey tailored just for you. Benefit from insider tips, discover local favorites, and experience a stay designed with you in mind. It's quick, easy, and all about you.",
  socialLoginCta = "login using social",
  createProfileCra = "create a profile",
  imagesTopLeftImage = "https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6877259a8c87163e2e54e350_sur_west_hollywood.avif",
  imagesTopLeftImageAltText = "Sur Restaurant in West Hollywood",
  imagesBottomLeftImage = "",
  imagesBottomLeftImageAltText = "consultation setting: outdoor retreat",
  imagesRightImage = "",
  imagesRightImageAltText = "image of networking event (for a hr tech)",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section",
        "background_primary",
        "auth-invisible"
      )}
      tag="header"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Grid
          className={_utils.cx(
            _styles,
            "grid_2-col",
            "tablet-1-col",
            "gap-xxlarge"
          )}
        >
          <_Builtin.Grid
            className={_utils.cx(
              _styles,
              "grid_2-col",
              "tablet-1-col",
              "gap-xsmall"
            )}
          >
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "image_cover",
                "ratio_3x2_tablet-1-2",
                "w-node-_0b022ee1-5ca4-456e-7f5b-479c4fe27ef0-4fe27eec"
              )}
              id={_utils.cx(
                _styles,
                "w-node-c36f23f2-593d-31e6-ec9b-360830dbf727-5e21a702"
              )}
              width="270"
              loading="lazy"
              src={imagesTopLeftImage}
            />
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "image_cover",
                "ratio_3x2_tablet-1-2",
                "w-node-_0b022ee1-5ca4-456e-7f5b-479c4fe27ef1-4fe27eec"
              )}
              id={_utils.cx(
                _styles,
                "w-node-c36f23f2-593d-31e6-ec9b-360830dbf728-5e21a702"
              )}
              width="270"
              loading="lazy"
              data-aisg-image-id="7a1d2a29-eae9-4e63-a79e-77280da8d7ad"
              src={imagesRightImage}
            />
            <_Builtin.Image
              className={_utils.cx(
                _styles,
                "image_cover",
                "ratio_3x2_tablet-1-2",
                "w-node-_0b022ee1-5ca4-456e-7f5b-479c4fe27ef2-4fe27eec"
              )}
              id={_utils.cx(
                _styles,
                "w-node-c36f23f2-593d-31e6-ec9b-360830dbf729-5e21a702"
              )}
              width="270"
              loading="lazy"
              data-aisg-image-id="ba415306-34ff-45ef-9b38-7fdce247b3cd"
              src={imagesBottomLeftImage}
            />
          </_Builtin.Grid>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "header",
              "margin-bottom_none",
              "w-node-_0b022ee1-5ca4-456e-7f5b-479c4fe27ef3-4fe27eec"
            )}
            id={_utils.cx(
              _styles,
              "w-node-c36f23f2-593d-31e6-ec9b-360830dbf71c-5e21a702"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading_h2")}
              tag={headingTag}
            >
              {headingText}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "subheading",
                "margin-bottom_small"
              )}
            >
              {paragraphText}
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex_horizontal", "gap-xsmall")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "masthead-meta", "button")}
                button={true}
                id="page-login-btn"
                block=""
                options={{
                  href: "#",
                }}
              >
                {socialLoginCta}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "button",
                  "is-secondary",
                  "is-small"
                )}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {createProfileCra}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
