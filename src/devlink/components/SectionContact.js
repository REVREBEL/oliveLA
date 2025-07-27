"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionContact.module.css";

export function SectionContact({
  as: _Component = _Builtin.Section,
  headingEyebrowText = "Say hello",
  headingHeadingTag = "h2",
  headingHeadingText = "Let’s make it personal",
  headingSubHeadingText = "Drop us a line or just wave. We’re all ears.",
  emailEmailTag = "h3",
  emailEmailText = "Email",
  phonePhoneTag = "h3",
  phonePhoneText = "Ring us, 8am–5pm PT.",
  phonePhoneHeadingText = "Phone",
  phonePhoneNumber = "+1 (555) 000-0000",
  locationLocationTag = "h3",
  locationLocationHeadingText = "Location",
  locationLocationText = "Find us off the Strip.",
  locationAddress = "101 Hotel Lane, West Hollywood, CA",
  image = "https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6878758372b8ce06f752b796_3b0425ba-1273-4e99-9a8e-3a8b31964c7f.avif",
  emailEmailAddress = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "header")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "eyebrow")} tag="div">
            {headingEyebrowText}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading_h2", "margin-top_none")}
            tag={headingHeadingTag}
          >
            {headingHeadingText}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "subheading")}>
            {headingSubHeadingText}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Grid
          className={_utils.cx(
            _styles,
            "grid_2-col",
            "tablet-1-col",
            "gap-large"
          )}
        >
          <_Builtin.List
            className={_utils.cx(
              _styles,
              "flex_horizontal",
              "flex_vertical",
              "is-space-between",
              "gap-xsmall",
              "margin-bottom_none"
            )}
            tag="ul"
            role="list"
            unstyled={true}
          >
            <_Builtin.ListItem
              className={_utils.cx(_styles, "", "margin-left_small")}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is-large-1x1",
                  "margin-bottom_xsmall"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%20standalone%3D%22yes%22%3F%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0A%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2248px%22%20height%3D%2248px%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%20100%20100%22%20enable-background%3D%22new%200%200%20100%20100%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cg%3E%3Cpath%20d%3D%22M88.79%2C29.297L70.702%2C11.209c-1.052-1.052-2.756-1.052-3.808%2C0L17.389%2C60.713l0.109%2C0.109l-0.171-0.046l-6.772%2C25.272%20%20%20l0.004%2C0.001c-0.309%2C0.935-0.103%2C2.004%2C0.642%2C2.748c0.822%2C0.822%2C2.038%2C0.993%2C3.033%2C0.531l0.002%2C0.009l25.027-6.706l-0.016-0.059%20%20%20l0.038%2C0.038L88.79%2C33.105C89.842%2C32.053%2C89.842%2C30.349%2C88.79%2C29.297z%20M18.792%2C81.147l4.022-15.009l10.988%2C10.988L18.792%2C81.147z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%0A%3C%2Fsvg%3E" />
              </_Builtin.Block>
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading_h3", "margin-top_none")}
                tag={emailEmailTag}
              >
                {emailEmailText}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "margin-bottom_none")}
              >
                {"Slide into our inbox anytime."}
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "display_block")}
                tag="div"
              >
                {emailEmailAddress}
              </_Builtin.Block>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className={_utils.cx(_styles, "", "margin-left_small")}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is-large-1x1",
                  "margin-bottom_xsmall"
                )}
                tag="div"
              >
                <_Builtin.DOM
                  tag="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <_Builtin.DOM
                    tag="path"
                    d="M12.5 18.25C16.2279 18.25 19.25 15.2279 19.25 11.5C19.25 7.77208 16.2279 4.75 12.5 4.75C8.77208 4.75 5.75 7.77208 5.75 11.5C5.75 12.6007 6.01345 13.6398 6.48072 14.5578L5 19L9.71819 17.6519C10.5664 18.0361 11.5082 18.25 12.5 18.25Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </_Builtin.DOM>
              </_Builtin.Block>
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading_h3", "margin-top_none")}
                tag={phonePhoneTag}
              >
                {phonePhoneHeadingText}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "margin-bottom_none")}
              >
                {phonePhoneText}
              </_Builtin.Paragraph>
              <_Builtin.Block tag="div">{phonePhoneNumber}</_Builtin.Block>
            </_Builtin.ListItem>
            <_Builtin.ListItem
              className={_utils.cx(_styles, "margin-left_small")}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "is-large-1x1",
                  "margin-bottom_xsmall"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%20standalone%3D%22yes%22%3F%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0A%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2248px%22%20height%3D%2248px%22%20fill%3D%22currentColor%22%20viewBox%3D%220%200%20100%20100%22%20enable-background%3D%22new%200%200%20100%20100%22%20xml%3Aspace%3D%22preserve%22%3E%0A%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M50%2C10.417c-15.581%2C0-28.201%2C12.627-28.201%2C28.201c0%2C6.327%2C2.083%2C12.168%2C5.602%2C16.873L45.49%2C86.823%20%20%20c0.105%2C0.202%2C0.21%2C0.403%2C0.339%2C0.588l0.04%2C0.069l0.011-0.006c0.924%2C1.278%2C2.411%2C2.111%2C4.135%2C2.111c1.556%2C0%2C2.912-0.708%2C3.845-1.799%20%20%20l0.047%2C0.027l0.179-0.31c0.264-0.356%2C0.498-0.736%2C0.667-1.155L72.475%2C55.65c3.592-4.733%2C5.726-10.632%2C5.726-17.032%20%20%20C78.201%2C23.044%2C65.581%2C10.417%2C50%2C10.417z%20M49.721%2C52.915c-7.677%2C0-13.895-6.221-13.895-13.895c0-7.673%2C6.218-13.895%2C13.895-13.895%20%20%20s13.895%2C6.222%2C13.895%2C13.895C63.616%2C46.693%2C57.398%2C52.915%2C49.721%2C52.915z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" />
              </_Builtin.Block>
              <_Builtin.Heading
                className={_utils.cx(
                  _styles,
                  "heading_h3",
                  "margin-top_none",
                  "margin-bottom_xsmall"
                )}
                tag={locationLocationTag}
              >
                {locationLocationHeadingText}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "margin-bottom_none")}
              >
                {locationLocationText}
              </_Builtin.Paragraph>
              <_Builtin.Block tag="div">{locationAddress}</_Builtin.Block>
            </_Builtin.ListItem>
          </_Builtin.List>
          <_Builtin.Image
            className={_utils.cx(
              _styles,
              "image_cover",
              "ratio_1x1",
              "w-node-c7d65968-74e0-17ce-7a05-7b36976ad05b-976ad034"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_2f3832fd-9477-529a-adca-a7978108ba39-8108ba15"
            )}
            width="564"
            height="564"
            loading="lazy"
            data-aisg-image-id="7a7a9d77-f27e-483a-ae3e-eec7bd47d15b"
            alt="image of a busy downtown area for a mobility and transportation business [background image]"
            src={image}
          />
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
