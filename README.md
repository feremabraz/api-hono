# Hono RPC API with Auth and Email

This is a boilerplate project for building a type-safe API using Hono RPC. It comes pre-configured with a modern technology stack, designed to provide a straightforward foundation.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffrbrz%2Fapi-hono&env=DATABASE_URL,STACK_PROJECT_ID,STACK_PUBLISHABLE_CLIENT_KEY,STACK_SECRET_SERVER_KEY,PLUNK_API_KEY&envDescription=API%20keys%20and%20database%20connection%20string%20for%20the%20application.&envLink=https%3A%2F%2Fgithub.com%2Ffrbrz%2Fapi-hono%233-configure-environment-variables)

## Technology Stack

- **API Framework**: [Hono](https://hono.dev/) (with RPC mode)
- **Authentication**: [Neon Auth](https://neon.tech/docs/reference/auth) with [Stack Auth](https://www.stack-auth.com/)
- **Database**: Serverless PostgreSQL with [Neon](https://neon.tech/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Email Service**: [Plunk](https://useplunk.com/)
- **Runtime**: [Node.js](https://nodejs.org/) with [tsx](https://github.com/esbuild-kit/tsx) for live-reloading
- **Linting & Formatting**: [Biome](https://biomejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Manual Setup

### 1. Configure Environment Variables

Create a `.env` file in the root of the project by copying the example file:

```sh
cp .env.example .env
```

Now, open the `.env` file and fill in the following values:

- `DATABASE_URL`: Your Neon PostgreSQL connection string.
- `STACK_PROJECT_ID`: Your Stack Auth project ID.
- `STACK_PUBLISHABLE_CLIENT_KEY`: Your Stack Auth publishable client key.
- `STACK_SECRET_SERVER_KEY`: Your Stack Auth secret server key.
- `PLUNK_API_KEY`: Your Plunk API key.

### 2. Run Database Migrations

Apply the initial database schema to your Neon database:

```sh
pnpm run migrate:dev
```

## Development

This template provides two scripts for development:

- **Run the API server**:
  This will start the Hono server in watch mode, automatically restarting it when you make changes.
  ```sh
  pnpm run dev:server
  ```

- **Run the RPC client**:
  This will execute the example RPC client (`src/client.ts`), which calls the `/rpc/hello` endpoint.
  ```sh
  pnpm run dev:client
  ```

## Project Structure

- `src/`
  - `index.ts`: The main entry point for the Hono server.
  - `rpc.ts`: Defines the RPC routes and their types.
  - `client.ts`: An example RPC client.
  - `plunk.ts`: The Plunk email service module.
  - `stack/`
    - `server.ts`: The Stack Auth server configuration.
- `prisma/`
  - `schema.prisma`: The Prisma schema for your database.
  - `migrations/`: Your database migration history.
- `.env`: Your environment variables (ignored by git).
- `package.json`: Your project's dependencies and scripts.
- `tsconfig.json`: The TypeScript configuration.
