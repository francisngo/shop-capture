# Use official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire client directory to the working directory
COPY . .

# Build the app
RUN npm run build

# Set the environment variable for the API endpoint
ENV REACT_APP_API_URL=http://localhost:4000

# Expose port 3000 to serve the app
EXPOSE 3000

# Start the server 
CMD [ "npm", "start" ]