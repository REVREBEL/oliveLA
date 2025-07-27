import { Builder } from "@builder.io/react";

// Import main components from devlink
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
Builder.registerComponent(DevLinkProvider, {
  name: "DevLinkProvider",
  description: "DevLink provider wrapper component",
  noWrap: true,
});

import { GlobalCodeEmbed } from "@/devlink/GlobalCodeEmbed";
Builder.registerComponent(GlobalCodeEmbed, {
  name: "GlobalCodeEmbed",
  description: "Global code embed component",
});

import { HomepageHero } from "@/devlink/HomepageHero";
Builder.registerComponent(HomepageHero, {
  name: "HomepageHero",
  description: "Homepage hero section",
  inputs: [
    {
      name: "className",
      type: "string",
      defaultValue: "",
    }
  ]
});

import { OliveButton } from "@/devlink/OliveButton";
Builder.registerComponent(OliveButton, {
  name: "OliveButton",
  description: "Olive styled button component",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "Button",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    }
  ]
});

import { OliveFooter } from "@/devlink/OliveFooter";
Builder.registerComponent(OliveFooter, {
  name: "OliveFooter",
  description: "Olive footer component",
});

import { OliveNav } from "@/devlink/OliveNav";
Builder.registerComponent(OliveNav, {
  name: "OliveNav",
  description: "Olive navigation component",
});

import { OliveSmallButton } from "@/devlink/OliveSmallButton";
Builder.registerComponent(OliveSmallButton, {
  name: "OliveSmallButton",
  description: "Small olive button component",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "Small Button",
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    }
  ]
});

import { SectionBlogContentTeaser } from "@/devlink/SectionBlogContentTeaser";
Builder.registerComponent(SectionBlogContentTeaser, {
  name: "SectionBlogContentTeaser",
  description: "Blog content teaser section",
});

import { SectionCommonQuestions } from "@/devlink/SectionCommonQuestions";
Builder.registerComponent(SectionCommonQuestions, {
  name: "SectionCommonQuestions",
  description: "Common questions section",
});

import { SectionContact } from "@/devlink/SectionContact";
Builder.registerComponent(SectionContact, {
  name: "SectionContact",
  description: "Contact section",
});

import { SectionEvents } from "@/devlink/SectionEvents";
Builder.registerComponent(SectionEvents, {
  name: "SectionEvents",
  description: "Events section",
});

import { SectionFeatures } from "@/devlink/SectionFeatures";
Builder.registerComponent(SectionFeatures, {
  name: "SectionFeatures",
  description: "Features section",
});

import { SectionPersonalizeCta } from "@/devlink/SectionPersonalizeCta";
Builder.registerComponent(SectionPersonalizeCta, {
  name: "SectionPersonalizeCta",
  description: "Personalize CTA section",
});

import { SectionReviews } from "@/devlink/SectionReviews";
Builder.registerComponent(SectionReviews, {
  name: "SectionReviews",
  description: "Reviews section",
});

import { SectionSuiteLife } from "@/devlink/SectionSuiteLife";
Builder.registerComponent(SectionSuiteLife, {
  name: "SectionSuiteLife",
  description: "Suite life section",
});

import { SingleHeadingCtaWithButton } from "@/devlink/SingleHeadingCtaWithButton";
Builder.registerComponent(SingleHeadingCtaWithButton, {
  name: "SingleHeadingCtaWithButton",
  description: "Single heading CTA with button",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Heading",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Click Here",
    }
  ]
});

// Note: The following components might not be suitable for direct Builder registration
// as they are context providers or utility functions:

// import { DevLinkContext } from "@/devlink/devlinkContext";
// import { EASING_FUNCTIONS } from "@/devlink/utils";

// Basic HTML elements and wrappers from _Builtin
import { BackgroundVideoWrapper } from "@/devlink/_Builtin/BackgroundVideo";
Builder.registerComponent(BackgroundVideoWrapper, {
  name: "BackgroundVideoWrapper",
  description: "Background video wrapper",
  inputs: [
    {
      name: "videoUrl",
      type: "string",
      defaultValue: "",
    }
  ]
});

import { Block } from "@/devlink/_Builtin/Basic";
Builder.registerComponent(Block, {
  name: "Block",
  description: "Basic block element",
  inputs: [
    {
      name: "tag",
      type: "string",
      defaultValue: "div",
      enum: ["div", "section", "article", "header", "footer", "main", "aside"]
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
    }
  ]
});

import { FormWrapper } from "@/devlink/_Builtin/Form";
Builder.registerComponent(FormWrapper, {
  name: "FormWrapper",
  description: "Form wrapper component",
});

import { Video } from "@/devlink/_Builtin/Video";
Builder.registerComponent(Video, {
  name: "Video",
  description: "Video component",
  inputs: [
    {
      name: "src",
      type: "string",
      defaultValue: "",
    },
    {
      name: "autoplay",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "controls",
      type: "boolean",
      defaultValue: true,
    }
  ]
});

import { YouTubeVideo } from "@/devlink/_Builtin/YouTubeVideo";
Builder.registerComponent(YouTubeVideo, {
  name: "YouTubeVideo",
  description: "YouTube video embed",
  inputs: [
    {
      name: "videoId",
      type: "string",
      defaultValue: "",
    }
  ]
});
