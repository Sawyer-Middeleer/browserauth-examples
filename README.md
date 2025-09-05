# BrowserAuth Examples

A collection of example TypeScript scripts demonstrating how to use [BrowserBase](https://browserbase.com), [Stagehand](https://github.com/browserbase/stagehand), and future [BrowserAuth](https://github.com/browserbase/browserauth) for browser automation.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A BrowserBase account and API key

### Installation

1. Clone this repository:

```bash
git clone <your-repo-url>
cd browserauth-examples
```

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

1. Set up your environment variables:

```bash
cp .env.example .env
```

Edit `.env` and add your BrowserBase credentials:

```env
BROWSERBASE_API_KEY=your-api-key-here
BROWSERBASE_PROJECT_ID=your-project-id-here
```

### Running Examples

Run the default example:

```bash
npm start
```

Run a specific example:

```bash
npm run run <example-name>
```

For example:

```bash
npm run run example
```

## Examples

- `example.ts` - Basic Stagehand usage including navigation, screenshots, and form interaction

## Scripts

- `npm start` - Run the default example
- `npm run dev` - Run example in watch mode for development
- `npm run run <script>` - Run a specific TypeScript file

## Contributing

Feel free to add more examples by creating new `.ts` files in the root directory. Each example should be self-contained and demonstrate a specific BrowserBase, Stagehand, or future BrowserAuth feature or use case.

## Documentation

- [BrowserBase Documentation](https://docs.browserbase.com)
- [Stagehand Documentation](https://github.com/browserbase/stagehand)
- BrowserAuth documentation (coming soon)
