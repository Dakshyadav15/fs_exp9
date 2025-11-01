# -------- Build stage (Node) --------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package files first for better cache
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies (prod + dev) required to build
RUN npm ci --silent

# Copy source
COPY public ./public
COPY src ./src

# Build the app
ARG REACT_APP_ENV=production
ENV NODE_ENV=production
RUN npm run build

# -------- Production stage (Nginx) --------
FROM nginx:stable-alpine AS production

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: copy a custom nginx config (if you have one)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx (default CMD is fine)
CMD ["nginx", "-g", "daemon off;"]

