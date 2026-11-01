This project uses [vinext](https://github.com/cloudflare/vinext), Vite, and the Cloudflare Vite plugin.

## Development

Use Node.js 22.18 or newer. Bun is not supported for loading the Cloudflare configuration.

```bash
npm ci
npm run dev
```

The vinext development server runs at [http://localhost:3001](http://localhost:3001). To create a production build, run `npm run build:vinext`.
