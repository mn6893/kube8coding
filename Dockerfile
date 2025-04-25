# ---------- 1️⃣  build stage ----------
FROM node:23-alpine AS builder
WORKDIR /app

# copy dependency manifests first (better cache)
COPY package*.json ./
RUN npm install

# copy the rest of the source
COPY . .

# build the production bundle
RUN npm run build

# ---------- 2️⃣  runtime stage ----------
FROM nginx:alpine
# copy compiled assets to Nginx html folder
COPY --from=builder /app/build /usr/share/nginx/html

# expose default Nginx port
EXPOSE 80

# health‑check (optional)
HEALTHCHECK CMD wget -qO- http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]
