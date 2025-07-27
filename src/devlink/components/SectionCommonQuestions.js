"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SectionEvents } from "./SectionEvents";
import * as _utils from "./utils";
import _styles from "./SectionCommonQuestions.module.css";

export function SectionCommonQuestions({
  as: _Component = _Builtin.Section,
  headingEyebrowText = "Insider info",
  headingHeadingTag = "h2",
  headingHeadingTitle = "Your stay, demystified",
  headingSubHeadingText = (
    <>
      {"Quick answers to your most-asked questions"}
      {"—"}
      {"policies, perks, and suite secrets, all in one place."}
    </>
  ),
  qa1QuestionText = (
    <>
      {"What"}
      {"’"}
      {"s included in every suite?"}
    </>
  ),
  qa1Answer = "",
  qa2QuestionText = "How close is the Sunset Strip?",
  qa2Answer = "",
  qa3QuestionText = "Is on-site parking available?",
  qa3Answer = "",
  qa4QuestionText = (
    <>
      {"What"}
      {"’"}
      {"s your cancellation policy?"}
    </>
  ),
  qa4Answer = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-inverse")}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "header",
            "w-node-_1638636b-1d13-6873-afac-ab5334fad59a-34fad598"
          )}
          id={_utils.cx(
            _styles,
            "w-node-c08a178d-39e1-35d8-4f34-2b7bc1865c72-c1865c6f"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "eyebrow")} tag="div">
            {headingEyebrowText}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading_h2", "margin-top_none")}
            tag={headingHeadingTag}
          >
            {headingHeadingTitle}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "subheading")}>
            {headingSubHeadingText}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "flex_horizontal",
            "flex_vertical",
            "gap-small",
            "w-node-_1638636b-1d13-6873-afac-ab5334fad5a3-34fad598"
          )}
          id={_utils.cx(
            _styles,
            "w-node-b9a4e631-bad5-4935-a3b3-9d0d1667b0e8-c1865c6f"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "divider",
              "w-node-_1638636b-1d13-6873-afac-ab5334fad5a4-34fad598"
            )}
            id={_utils.cx(
              _styles,
              "w-node-c08a178d-39e1-35d8-4f34-2b7bc1865c7a-c1865c6f"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid_2-col", "gap-small")}
              id={_utils.cx(
                _styles,
                "w-node-_1638636b-1d13-6873-afac-ab5334fad5a5-34fad598"
              )}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "heading_h4",
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5a6-34fad598"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-c08a178d-39e1-35d8-4f34-2b7bc1865c7d-c1865c6f"
                )}
                tag="div"
              >
                {qa1QuestionText}
              </_Builtin.Block>
              <_Builtin.RichText
                className={_utils.cx(_styles, "rich-text", "paragraph_small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5aa-34fad598"
                )}
                tag="div"
                slot=""
              >
                {qa1Answer}
              </_Builtin.RichText>
            </_Builtin.Grid>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider")}
            id={_utils.cx(
              _styles,
              "w-node-_1638636b-1d13-6873-afac-ab5334fad5b1-34fad598"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid_2-col", "gap-small")}
              id={_utils.cx(
                _styles,
                "w-node-_1638636b-1d13-6873-afac-ab5334fad5b2-34fad598"
              )}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "heading_h4",
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5b3-34fad598"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_15301e38-e1b7-7afa-927f-bd1dfe6b45e1-c1865c6f"
                )}
                tag="div"
              >
                {qa2QuestionText}
              </_Builtin.Block>
              <_Builtin.RichText
                className={_utils.cx(_styles, "rich-text", "paragraph_small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5b5-34fad598"
                )}
                tag="div"
                slot=""
              >
                {qa2Answer}
              </_Builtin.RichText>
            </_Builtin.Grid>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider")}
            id={_utils.cx(
              _styles,
              "w-node-_1638636b-1d13-6873-afac-ab5334fad5b8-34fad598"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid_2-col", "gap-small")}
              id={_utils.cx(
                _styles,
                "w-node-_1638636b-1d13-6873-afac-ab5334fad5b9-34fad598"
              )}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "heading_h4",
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5ba-34fad598"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_18c5af56-2eae-1f0f-8664-8aa50abe69f4-c1865c6f"
                )}
                tag="div"
              >
                {qa3QuestionText}
              </_Builtin.Block>
              <_Builtin.RichText
                className={_utils.cx(_styles, "rich-text", "paragraph_small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5bc-34fad598"
                )}
                tag="div"
                slot=""
              >
                {qa3Answer}
              </_Builtin.RichText>
            </_Builtin.Grid>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "divider")}
            id={_utils.cx(
              _styles,
              "w-node-_1638636b-1d13-6873-afac-ab5334fad5bf-34fad598"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "grid_2-col", "gap-small")}
              id={_utils.cx(
                _styles,
                "w-node-_1638636b-1d13-6873-afac-ab5334fad5c0-34fad598"
              )}
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "heading_h4",
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5c1-34fad598"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-d491d981-1355-5471-215d-50a9f6b6f4da-c1865c6f"
                )}
                tag="div"
              >
                {qa4QuestionText}
              </_Builtin.Block>
              <_Builtin.RichText
                className={_utils.cx(_styles, "rich-text", "paragraph_small")}
                id={_utils.cx(
                  _styles,
                  "w-node-_1638636b-1d13-6873-afac-ab5334fad5c5-34fad598"
                )}
                tag="div"
                slot=""
              >
                {qa4Answer}
              </_Builtin.RichText>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <SectionEvents />
    </_Component>
  );
}
