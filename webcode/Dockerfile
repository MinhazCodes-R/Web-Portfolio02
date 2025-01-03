# Step 1: Use a Node.js image as the base for building the app
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy only package-related files first for caching
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm ci

# Copy the rest of the app's source code
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Use a minimal Node.js image for serving the app
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the production build and necessary files
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/public public


# Set the environment variable to production
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "start"]
