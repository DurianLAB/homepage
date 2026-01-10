# Build stage
FROM node:18-alpine AS build

ARG VERSION=1.3

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install --no-audit --no-fund

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Replace version placeholder
RUN sed -i "s/DOCKER_IMAGE_VERSION/$VERSION/g" build/index.html

# Production stage
FROM nginx:alpine

# Install Node.js
RUN apk add --no-cache nodejs npm

# Copy built app from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy backend files
COPY server.js package*.json ./

# Install backend dependencies
RUN npm install --production

# Copy start script
COPY start.sh ./
RUN chmod +x start.sh

# Expose port 80
EXPOSE 80

# Start both nginx and Node.js server
CMD ["./start.sh"]
