import { Builder } from "@builder.io/react";
import React from "react";

// Simple test component to verify registration works
export function TestComponent({ text = "Hello from Test Component" }) {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", border: "2px solid #333" }}>
      <h2>Test Component</h2>
      <p>{text}</p>
    </div>
  );
}

Builder.registerComponent(TestComponent, {
  name: "TestComponent", 
  description: "Simple test component to verify Builder.io registration",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "Hello from Test Component",
    }
  ]
});