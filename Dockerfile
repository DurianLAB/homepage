# Use nginx as the base image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy static files
COPY . .
ARG DOCKER_IMAGE_VERSION
RUN sed -i "s/DOCKER_IMAGE_VERSION/${DOCKER_IMAGE_VERSION}/g" index.html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]