"use client";
import { builder, Builder } from "@builder.io/react";
import { HomepageHero } from "./devlink/components/HomepageHero";
import { OliveButton } from "./devlink/components/OliveButton";
import { OliveFooter } from "./devlink/components/OliveFooter";
import { OliveNav } from "./devlink/components/OliveNav";
import { SectionEvents } from "./devlink/components/SectionEvents";
import { SectionFeatures } from "./devlink/components/SectionFeatures";
import { SectionSuiteLife } from "./devlink/components/SectionSuiteLife";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(OliveFooter, {
  name: "OliveFooter",
});

Builder.registerComponent(OliveButton, {
  name: "OliveButton",
});

Builder.registerComponent(SectionEvents, {
  name: "SectionEvents",
});

Builder.registerComponent(OliveNav, {
  name: "OliveNav",
});

Builder.registerComponent(SectionFeatures, {
  name: "SectionFeatures",
});

Builder.registerComponent(SectionSuiteLife, {
  name: "SectionSuiteLife",
});

Builder.registerComponent(HomepageHero, {
  name: "HomepageHero",
});
