# Step 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with NGINX (production-grade)
FROM nginx:alpine
COPY public /usr/share/nginx/html   
ENV BACKEND_URL=http://backend:5000
CMD ["nginx", "-g", "daemon off;"]
    