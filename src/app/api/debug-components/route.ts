import { Builder } from "@builder.io/react";

export async function GET() {
  // Import the registry to ensure components are registered
  await import("@/builder/registry");
  
  // Get the registered components
  const components = Builder.components || [];
  
  return Response.json({
    totalComponents: components.length,
    components: components.map(comp => ({
      name: comp.name,
      description: comp.meta?.description || 'No description',
      inputs: comp.meta?.inputs?.length || 0
    })),
    builderInitialized: !!Builder.components,
    apiKeyExists: !!process.env.NEXT_PUBLIC_BUILDER_API_KEY
  });
}
