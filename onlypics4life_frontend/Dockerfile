# Use Node.js base image to build the frontend
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the frontend application
RUN npm run build

# Use Nginx to serve the static frontend files
FROM nginx:alpine

# Copy build output from previous stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
