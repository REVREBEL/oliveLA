import { Builder } from "@builder.io/react";

// Import test component first
import { TestComponent } from "./test-registry";

// Import main components using correct path mappings (tsconfig maps @/devlink to src/devlink/components)
import { HomepageHero } from "@/devlink/HomepageHero";
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

import { OliveButton } from "@/devlink/OliveButton";
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

import { OliveNav } from "@/devlink/OliveNav";
Builder.registerComponent(OliveNav, {
  name: "OliveNav",
  description: "Olive navigation component",
});

import { OliveFooter } from "@/devlink/OliveFooter";
Builder.registerComponent(OliveFooter, {
  name: "OliveFooter",
  description: "Olive footer component",
});

import { SectionFeatures } from "@/devlink/SectionFeatures";
Builder.registerComponent(SectionFeatures, {
  name: "SectionFeatures",
  description: "Features section component",
});

import { SectionReviews } from "@/devlink/SectionReviews";
Builder.registerComponent(SectionReviews, {
  name: "SectionReviews",
  description: "Reviews section component",
});

// Register test component to verify Builder.io connection
Builder.registerComponent(TestComponent, {
  name: "TestComponent",
  description: "Test component to verify Builder.io registration is working",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "Hello from Test Component",
    }
  ]
});
