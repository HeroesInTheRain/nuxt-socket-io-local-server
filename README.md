# nuxt-socket-io-local-server
Nuxt 3 local socket.io server for testing

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Run server for testing

1. Add your code for testing on client side

2. Add your code for testing on server side
    - Don't forget to add the corresponding event to the socket on server side (this project)
  
3. Make sure the path and port inside the client is refering to the correct server path and port

4. Run THIS PROJECT FIRST so the server would be at `http://localhost:3000`
    - Otherwise, you must adjust the server path on the client side (the main project you are testing)

5. Run the project containing the client you want to test

6. Once the server and client are connected, you should see a message containing the created socket id on `http://localhost:3000`
    - If the message is nos visible, check the port inside @/io/client.js inside this project
