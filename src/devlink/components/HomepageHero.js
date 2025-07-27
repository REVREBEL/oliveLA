"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { OliveButton } from "./OliveButton";
import * as _utils from "./utils";
import _styles from "./HomepageHero.module.css";

export function HomepageHero({
  as: _Component = _Builtin.Section,
  heroImageHeroImage = "https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6877257c094ccace91f1d74c_a30a1453-9167-4c21-ae29-e5295f6281e6.avif",
  heroImageHeroImageAltText = "a school campus [background image]",
  headingHeadingTag = "h1",
  headingHeadingText = "Unwind in sun-drenched suites, mid-century style, and a splash of playful glamour. Your private West Hollywood retreat—chic, spacious, and always a little unexpected. Settle in, stand out, and soak up the scene.",
  userUserGreetingText = "hey john, welcome back!",
  signUpSignUpDefaultImage = "https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6877257c094ccace91f1d750_olive_icon-black.png",
  signUpSIgnUpCtaText = "Sign into receive personalized recommendations",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section-_padding-none",
        "text-color_on-overlay",
        "is-inverse"
      )}
      tag="header"
    >
      <_Builtin.Grid className={_utils.cx(_styles, "grid_1-col")}>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "position_relative",
            "min-height_100dvh",
            "w-node-beec4a8a-f9ec-98e6-6e85-efbaee46b446-ee46b444"
          )}
          id={_utils.cx(
            _styles,
            "w-node-_83130efd-cc89-3e63-e012-238651cb9c90-51cb9c8e"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "image_cover",
              "position_absolute",
              "radius_all-0"
            )}
            width="1224"
            height="1031"
            loading="lazy"
            data-aisg-image-id="5fe018b6-defd-4338-a620-846f12fd1bf7"
            src={heroImageHeroImage}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "overlay_opacity-middle", "mask_top")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "container",
            "position_relative",
            "padding-bottom_large",
            "z-index_2",
            "w-node-beec4a8a-f9ec-98e6-6e85-efbaee46b449-ee46b444"
          )}
          id={_utils.cx(
            _styles,
            "w-node-_83130efd-cc89-3e63-e012-238651cb9c93-51cb9c8e"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "header",
              "is-2-col",
              "is-2-row",
              "is-1-col-quarter"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "margin-bottom_none",
                "heading_hero"
              )}
              id={_utils.cx(
                _styles,
                "w-node-beec4a8a-f9ec-98e6-6e85-efbaee46b44b-ee46b444"
              )}
              tag={headingHeadingTag}
            >
              {"Where Hollywood cool meets home"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "flex_horizontal")}
              id={_utils.cx(
                _styles,
                "w-node-beec4a8a-f9ec-98e6-6e85-efbaee46b44d-ee46b444"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "login_welcome-message",
                  "w-node-beec4a8a-f9ec-98e6-6e85-efbaee46b44e-ee46b444"
                )}
                id={_utils.cx(_styles, "welcome-message")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "login_welcome-message",
                    "auth-visible"
                  )}
                  tag="div"
                  id="login_welcome-message"
                >
                  {userUserGreetingText}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "login_cta", "auth-invisible")}
                  tag="div"
                  id="login_cta"
                >
                  {signUpSIgnUpCtaText}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "login_user-image-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-b0383f84-1885-e804-f569-39a7055e17e4-ee46b444"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "login-cta-image",
                    "auth-invisible"
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  id="login_cta-image"
                  alt="Olive AI Icon"
                  src={signUpSignUpDefaultImage}
                />
                <_Builtin.HtmlEmbed
                  className={_utils.cx(
                    _styles,
                    "login_user-avatar",
                    "auth-visible"
                  )}
                  id="login_user-avatar"
                  value="%3Cdiv%20id%3D%22login_user-avatar%22%3E%3C%2Fdiv%3E%20%0A%0A%3Cscript%3E%0A%20%20const%20avatarContainer%20%3D%20document.getElementById(%22login_user-avatar%22)%3B%0A%20%20if%20(avatarContainer%20%26%26%20window.authUser%3F.picture)%20%7B%0A%20%20%20%20const%20img%20%3D%20document.createElement(%22img%22)%3B%0A%20%20%20%20img.src%20%3D%20window.authUser.picture%3B%0A%20%20%20%20img.alt%20%3D%20%22User%20Profile%20Picture%22%3B%0A%20%20%20%20img.className%20%3D%20%22avatar-img%22%3B%0A%20%20%20%20%0A%20%20%20%20img.style.borderRadius%20%3D%20%2250%25%22%3B%0A%20%20%20%20img.style.width%20%3D%20%22100px%22%3B%0A%20%20%20%20img.style.height%20%3D%20%22100px%22%3B%0A%20%20%20%20img.style.objectFit%20%3D%20%22cover%22%3B%0A%0A%20%20%20%20avatarContainer.appendChild(img)%3B%0A%20%20%7D%0A%3C%2Fscript%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "flex_vertical",
                "gap-xsmall",
                "w-node-beec4a8a-f9ec-98e6-6e85-efbaee46b455-ee46b444"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b44b49b5-d3e6-a05f-997e-8ac7efbac3da-51cb9c8e"
              )}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph_large")}
              >
                {headingHeadingText}
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "button-group",
                  "margin-top_none"
                )}
                tag="div"
              >
                <OliveButton
                  buttonStyleButtonCta="Reserve"
                  buttonStyleButtonColor="Inverse"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
