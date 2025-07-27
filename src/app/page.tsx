import { Content, fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-react';
import "@/builder/registry";

// Add API key as a fallback if env var is not set
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'pub-f913b24b5daa4312be709fb54b8a71f0';

export default async function HomePage() {
  const urlPath = '/';

  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_API_KEY,
    options: getBuilderSearchParams(urlPath),
    userAttributes: {
      urlPath,
    },
  });

  return <Content model="page" content={content} apiKey={BUILDER_API_KEY} />;
}
