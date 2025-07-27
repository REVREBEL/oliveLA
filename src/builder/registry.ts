import { Builder } from "@builder.io/react";

// Import main components from devlink/components (fix import paths)
import { DevLinkProvider } from "@/devlink/components/DevLinkProvider";
Builder.registerComponent(DevLinkProvider, {
  name: "DevLinkProvider",
  description: "DevLink provider wrapper component",
  noWrap: true,
});

import { GlobalCodeEmbed } from "@/devlink/components/GlobalCodeEmbed";
Builder.registerComponent(GlobalCodeEmbed, {
  name: "GlobalCodeEmbed",
  description: "Global code embed component",
});

import { HomepageHero } from "@/devlink/components/HomepageHero";
Builder.registerComponent(HomepageHero, {
  name: "HomepageHero",
  description: "Homepage hero section",
  inputs: [
    {
      name: "heroImageHeroImage",
      type: "string",
      defaultValue: "https://cdn.prod.website-files.com/6876ee37d5601de6f43d0c68/6877257c094ccace91f1d74c_a30a1453-9167-4c21-ae29-e5295f6281e6.avif",
    },
    {
      name: "headingHeadingText", 
      type: "string",
      defaultValue: "Unwind in sun-drenched suites, mid-century style, and a splash of playful glamour.",
    },
    {
      name: "userUserGreetingText",
      type: "string", 
      defaultValue: "hey john, welcome back!",
    }
  ]
});

import { OliveButton } from "@/devlink/components/OliveButton";
Builder.registerComponent(OliveButton, {
  name: "OliveButton",
  description: "Olive styled button component",
  inputs: [
    {
      name: "buttonStyleButtonCta",
      type: "string",
      defaultValue: "book now",
    },
    {
      name: "buttonStyleButtonColor",
      type: "string",
      defaultValue: "Primary",
      enum: ["Primary", "Primary Outline", "Inverse", "Inverse Outline", "Secondary", "Tertiary"]
    }
  ]
});

import { OliveFooter } from "@/devlink/components/OliveFooter";
Builder.registerComponent(OliveFooter, {
  name: "OliveFooter",
  description: "Olive footer component",
});

import { OliveNav } from "@/devlink/components/OliveNav";
Builder.registerComponent(OliveNav, {
  name: "OliveNav",
  description: "Olive navigation component",
});

import { OliveSmallButton } from "@/devlink/components/OliveSmallButton";
Builder.registerComponent(OliveSmallButton, {
  name: "OliveSmallButton",
  description: "Small olive button component",
  inputs: [
    {
      name: "buttonStyleButtonCta",
      type: "string",
      defaultValue: "Small Button",
    },
    {
      name: "buttonStyleButtonColor",
      type: "string",
      defaultValue: "Primary",
      enum: ["Primary", "Primary Outline", "Inverse", "Inverse Outline", "Secondary", "Tertiary"]
    }
  ]
});

import { SectionBlogContentTeaser } from "@/devlink/components/SectionBlogContentTeaser";
Builder.registerComponent(SectionBlogContentTeaser, {
  name: "SectionBlogContentTeaser",
  description: "Blog content teaser section",
});

import { SectionCommonQuestions } from "@/devlink/components/SectionCommonQuestions";
Builder.registerComponent(SectionCommonQuestions, {
  name: "SectionCommonQuestions",
  description: "Common questions section",
});

import { SectionContact } from "@/devlink/components/SectionContact";
Builder.registerComponent(SectionContact, {
  name: "SectionContact", 
  description: "Contact section",
});

import { SectionEvents } from "@/devlink/components/SectionEvents";
Builder.registerComponent(SectionEvents, {
  name: "SectionEvents",
  description: "Events section",
});

import { SectionFeatures } from "@/devlink/components/SectionFeatures";
Builder.registerComponent(SectionFeatures, {
  name: "SectionFeatures",
  description: "Features section",
});

import { SectionPersonalizeCta } from "@/devlink/components/SectionPersonalizeCta";
Builder.registerComponent(SectionPersonalizeCta, {
  name: "SectionPersonalizeCta",
  description: "Personalize CTA section",
});

import { SectionReviews } from "@/devlink/components/SectionReviews";
Builder.registerComponent(SectionReviews, {
  name: "SectionReviews",
  description: "Reviews section",
});

import { SectionSuiteLife } from "@/devlink/components/SectionSuiteLife";
Builder.registerComponent(SectionSuiteLife, {
  name: "SectionSuiteLife",
  description: "Suite life section",
});

import { SingleHeadingCtaWithButton } from "@/devlink/components/SingleHeadingCtaWithButton";
Builder.registerComponent(SingleHeadingCtaWithButton, {
  name: "SingleHeadingCtaWithButton",
  description: "Single heading CTA with button",
  inputs: [
    {
      name: "headingText",
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

// Basic HTML elements and wrappers from _Builtin
import { BackgroundVideoWrapper } from "@/devlink/components/_Builtin/BackgroundVideo";
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

import { Block } from "@/devlink/components/_Builtin/Basic";
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

import { FormWrapper } from "@/devlink/components/_Builtin/Form";
Builder.registerComponent(FormWrapper, {
  name: "FormWrapper",
  description: "Form wrapper component",
});

import { Video } from "@/devlink/components/_Builtin/Video";
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

import { YouTubeVideo } from "@/devlink/components/_Builtin/YouTubeVideo";
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
