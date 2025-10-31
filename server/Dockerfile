# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "run", "start"]
