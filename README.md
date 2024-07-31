# Playwright TypeScript test framework

A test framework using Playwright and TypeScript for end-to-end testing, including accessibility, performance audits, and network request recording.


## Getting started

### Prerequisites

The following software are required:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/en/download/)
- **Java 8 or above**: Allure Reports require Java 8 or higher. If you intend to use SonarQube, install Java 11
- **Allure Commandline**: Install Allure command line for generating Allure Reports:
```sh
  npm ci -g allure-commandline
```

### Installation

1. Clone the repository:

```sh
git clone https://github.com/ArmanSakurov/playwright-typescipt-playwright-test.git
```

2. Navigate to the project folder and install npm packages:

```sh
cd playwright-typescipt-playwright-test
npm install
```
3. Download required browsers (for the first time installation):

```sh
npx playwright install
```

## Usage

### Browser configuration
Change required parameters in `playwright.config.ts` for browser configuration.

### Running tests

- Execute video test:
```sh
npm run test:video
```

- Check page accessibility:

```sh
npm run test:accessibility
```

- Record and use network requests:

```sh
npm run test:har
```

HAR (HTTP Archive) is a file format used by several HTTP session tools to export the captured data. This can be useful in troubleshooting complex issues by obtaining additional information about the network requests generated in the browser while an issue occurs.


- Perform a performance audit of a web page.
Reports will be generated in HTML format in the root directory with the name `LighthouseReport.html`

```sh
npm run lighthouse
```

- Generate Allure Report:

```sh
npm run allureReport
```

### Logging
Logging is implemented in `CustomReporterConfig.ts` using Winston logger. 
Logs are written to both console and a file `logs/info.log`.

### GitHub Actions
GitHub Actions is configured in `.github/workflows/playwright.yml`. 
Events (trigger points) are set to push/pull actions on the main branch. 
Changes in commands to run test cases can be made in the "Run tests" section in this file.

Once the GitHub Actions job is completed, a Slack notification is triggered to the assigned channel with build status and an HTML report link.
