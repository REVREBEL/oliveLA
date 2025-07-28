import { Builder } from "@builder.io/react";

// Import test component first to verify basic registration works
import { TestComponent } from "./test-registry";

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

// Try just the simplest components first - buttons
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

import { OliveSmallButton } from "@/devlink/OliveSmallButton";
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
