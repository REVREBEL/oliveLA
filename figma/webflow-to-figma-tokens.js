import fetch from "node-fetch";
import fs from "fs";

import dotenv from 'dotenv';
dotenv.config();

// .env degbuging
console.log('Reading .env WEBFLOW_SITE_API_TOKEN:', process.env.WEBFLOW_SITE_API_TOKEN);
console.log('Reading .env WEBFLOW_SITE_ID:', process.env.WEBFLOW_SITE_ID);

// Replace with your Webflow API Token and Site ID
const WEBFLOW_API_TOKEN = process.env.WEBFLOW_SITE_API_TOKEN;
const SITE_ID = process.env.WEBFLOW_SITE_ID;

// script degbuging
console.log('Reading Script Variable WEBFLOW_API_TOKEN:', WEBFLOW_API_TOKEN);
console.log('Reading Script Variable SITE_ID', SITE_ID);

async function fetchWebflowVariables() {
  const response = await fetch(`https://api.webflow.com/v2/sites/${SITE_ID}/variables`, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
      "accept-version": "1.0.0"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch variables: ${response.statusText}`);
  }
  return await response.json();
}

function transformToTokensStudioFormat(webflowData) {
  const tokens = { color: {}, spacing: {}, typography: {}, borderRadius: {} };

  webflowData.variables.forEach((variable) => {
    const name = variable.name.replace(/^--/, ""); // Strip leading "--"
    const value = variable.value;

    switch (variable.category) {
      case "color":
        tokens.color[name] = { value, type: "color" };
        break;
      case "spacing":
      case "size":
        tokens.spacing[name] = { value, type: "dimension" };
        break;
      case "typography":
        tokens.typography[name] = { value, type: "typography" };
        break;
      case "radius":
        tokens.borderRadius[name] = { value, type: "borderRadius" };
        break;
      default:
        console.log(`Skipping unhandled category: ${variable.category}`);
    }
  });

  return tokens;
}

async function run() {
  try {
    const webflowData = await fetchWebflowVariables();
    const tokens = transformToTokensStudioFormat(webflowData);
    fs.writeFileSync("tokens.json", JSON.stringify(tokens, null, 2));
    console.log("✅ tokens.json created for Tokens Studio!");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

run();
