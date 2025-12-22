
# 📄Real-Time-Docs

A real-time collaborative document editor where multiple users can create, edit, and view documents simultaneously with live updates.
Built with modern web technologies and designed to scale with additional features.


## Live Demo

🔗 https://real-time-docs-wine.vercel.app/
## Overview

Real-Time Docs is a Google-Docs-style application focused on real-time collaboration.
Users can work on the same document together and see updates instantly without refreshing the page.
The core functionality is complete and working.
The project is open for enhancements and advanced features.
## Key Features

- Real-time multi-user editing
- Live synchronization across clients
- Modern UI with responsive design
- Scalable architecture
- Clean and maintainable codebase


## Tech Stack

- Next.js – App framework
- TypeScript – Type safety
- Tailwind CSS – Styling
- Liveblocks – Real-time collaboration
- Vercel – Deployment


## Run Locally

Clone the project

```bash
  git clone https://github.com/Bhavykun/Real-Time-Docs.git
```

Go to the project directory

```bash
  cd Real-Time-Docs
```

Install dependencies

```bash
  npm install
```

Configure Environment Variables (add all necessary vars like, clerk's and liveblocks' keys)

```bash
  touch .env.local
```

Start the server

```bash
  npm run dev
```

Start the convex client

```bash
  npx convex dev
```



## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

