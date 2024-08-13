# Use the official Node.js 18 image as a base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and package-lock.json files first to leverage Docker's layer caching
COPY package*.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the application (transpile TypeScript, bundle code, etc.)
RUN pnpm run build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application in production mode
CMD ["pnpm", "run", "start"]
