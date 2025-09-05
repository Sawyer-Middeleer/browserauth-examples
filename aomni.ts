
import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";

async function main() {
  const stagehand = new Stagehand({
    env: "BROWSERBASE",
    headless: false
  });

  await stagehand.init();
  
  const page = stagehand.page;

  await page.goto("https://www.aomni.com/app");
  
  /**
   * Log in
   */

  // Fill credentials
  await page.act({
    action: "Fill the email field with %email%",
    variables: {
      email: process.env.AOMNI_EMAIL as string
    },
  });

  await page.act({
    action: "Fill the password field with %password%",
    variables: {
      password: process.env.AOMNI_PASSWORD as string
    },
  });

  // Log in
  await page.act("Click the `log in with email` button");
  
  // Extract structured data
  const { title } = await page.extract({
    instruction: "extract the page title",
    schema: z.object({
      title: z.string(),
    }),
  });

  /**
   * Create a new account
   */

  const accountWebsite = "browserbase.com"
  const modelName = "Aomni"
  const additionalDirections = ""
  const syncInCRM  = "false"

  await page.act("Click the `new account` button");

  await page.act({
    action: "Fill the account website field with %accountWebsite%",
    variables: {
      accountWebsite: accountWebsite
    },
  });

  await page.act({
    action: "Click the Use %accountWebsite% option from the account website dropdown",
    variables: {
      accountWebsite: accountWebsite
    },
  });
 
  await page.act("Click the Connect model dropdown button");

  let allOptions = await page.observe("Find all available options in the opened dropdown"); 
  let targetOption = allOptions.find(option => {
    const modelNameFromDesc = option.description.replace("Option in dropdown: ", "").trim();
    return modelNameFromDesc.toLowerCase() === modelName.toLowerCase();
  });
  
  while (!targetOption) {    
    await page.keyboard.press("ArrowDown");
    allOptions = await page.observe("Find all available options in the opened dropdown");
    
    targetOption = allOptions.find(option => {
      const modelNameFromDesc = option.description.replace("Option in dropdown: ", "").trim();
      return modelNameFromDesc.toLowerCase() === modelName.toLowerCase();
    });
  }
  if (targetOption) {
    await page.act(targetOption);
  } else {
    throw new Error(`Could not find ${modelName} in the dropdown options`);
  }

  await page.act("Click the `Create` button");

  console.log(`Account ${accountWebsite} created`);

  await stagehand.close();
}

// Run the example
main().catch(console.error);
