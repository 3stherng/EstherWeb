# EstherWeb Server

This is the backend server component of EstherWeb, built with Node.js and TypeScript.

## Project Structure

```
server/
├── src/
│   ├── index.ts     # Main application entry point
│   └── config/      # Configuration management
│       └── index.ts # Environment and app configuration
├── package.json     # Project dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Environment Management**: dotenv, cross-env

## Initial Setup Steps

1. Initialize the Node.js project:
```bash
npm init -y
```

2. Install core dependencies:
```bash
# Install Express and environment handling
npm install express dotenv
npm install --save-dev typescript @types/node @types/express ts-node cross-env
```

3. Install development tools:
```bash
# Install Prettier for code formatting
npm install --save-dev prettier
```

4. Configure TypeScript:
```bash
npx tsc --init
```

These commands set up:
- Basic Node.js project structure
- TypeScript compilation and type definitions
- Development environment with hot-reload (nodemon)
- Express.js framework for building the API

## Code Formatting

This project uses Prettier for consistent code formatting. The configuration is defined in `.prettierrc` and includes:
- Single quotes for strings
- Semicolons at the end of statements
- 2 spaces for indentation
- 80 characters line length
- No tabs (using spaces)

### Prettier Setup

1. Install Prettier:
```bash
npm install --save-dev prettier
```

2. Format files:
```bash
npm run format          # Format all files
npm run format:check    # Check if files need formatting
```

### Configuration Files
- `.prettierrc` - Contains Prettier configuration settings
- `.prettierignore` - Lists files and directories to be ignored by Prettier

### VS Code Integration
For the best development experience, install the Prettier extension for VS Code and enable "Format on Save" in your settings.

## Environment Setup and Running the Application

The application supports different environments through environment variables. A `.env.example` file is provided as a template.

## Configuration System

The application uses a robust configuration system that adapts based on the environment.

### Environment Files

1. Development (`.env`):
```env
NODE_ENV=development
PORT=3000
LOG_LEVEL=debug
```

2. Production (`.env.prod`):
```env
NODE_ENV=production
PORT=3000
LOG_LEVEL=info
```

### Configuration Features

The `src/config/index.ts` manages:
- Environment-based configuration loading
- Feature flags for different environments
- Type-safe configuration access
- Security settings

## Running the Application

### Development Mode

```bash
npm run dev
```
Features:
- Hot reload enabled
- Debug endpoints available (`/debug`)
- Detailed error messages
- Debug logging
- Environment variables from `.env`

### Production Mode

```bash
npm run build
npm start
```
Features:
- Optimized build
- Security headers enabled
- Minimal error exposure
- Production logging
- Environment variables from `.env.prod`

## Available Scripts

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development node --loader=ts-node/esm --env-file=.env --watch src/index.ts",
    "build": "tsc",
    "start": "cross-env NODE_ENV=production node dist/index.js",
    "format": "prettier --write \"src/**/*.{js,ts}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts}\""
  }
}
```
The production server will:
- Run the optimized build
- Use production environment variables
- Disable development features
- Enable performance optimizations

## Environment Control

The application's behavior is controlled through `NODE_ENV`:

### Development Features (`NODE_ENV=development`):
- Debug endpoint at `/debug` showing full configuration
- Detailed error messages in responses
- Debug level logging
- Hot reload enabled

### Production Features (`NODE_ENV=production`):
- Security headers automatically applied
- Generic error messages only
- Info level logging
- Debug endpoints disabled
- Performance optimizations enabled
