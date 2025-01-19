# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the build output from the previous stage to the NGINX HTML directory
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
