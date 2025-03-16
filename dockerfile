# Use a lightweight Node.js image
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight web server for serving static files
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only the built output
COPY --from=builder /app .

# Start Next.js in production mode
CMD ["npm", "run", "start"]
