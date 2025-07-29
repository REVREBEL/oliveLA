import { Builder } from "@builder.io/react";

// Import test component first to verify basic registration works
import { TestComponent } from "./test-registry";

// Register only the test component to start
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

console.log("Builder.io components registered:", Builder.components?.length || 0);
