# Use official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire server directory to the working directory
COPY . .

# Set the environment variable for the server port
ENV PORT=4000

# Expose the server port
EXPOSE 4000

# Start the server
CMD ["npm", "start"]