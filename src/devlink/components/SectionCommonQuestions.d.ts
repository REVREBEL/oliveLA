import * as React from "react";
import * as Types from "./types";

declare function SectionCommonQuestions(props: {
  as?: React.ElementType;
  headingEyebrowText?: React.ReactNode;
  headingHeadingTag?: Types.Basic.HeadingTag;
  headingHeadingTitle?: React.ReactNode;
  headingSubHeadingText?: React.ReactNode;
  qa1QuestionText?: React.ReactNode;
  qa1Answer?: Types.Basic.RichTextChildren;
  qa2QuestionText?: React.ReactNode;
  qa2Answer?: Types.Basic.RichTextChildren;
  qa3QuestionText?: React.ReactNode;
  qa3Answer?: Types.Basic.RichTextChildren;
  qa4QuestionText?: React.ReactNode;
  qa4Answer?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
