// https://nuxt.com/docs/api/configuration/nuxt-config
import startIoServer from "./io"

export default defineNuxtConfig({
  devtools: { enabled: true },

  hooks: {
    listen: (server) => startIoServer(server)
  }
})
