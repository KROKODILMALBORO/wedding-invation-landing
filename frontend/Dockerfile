FROM node:20 AS builder

COPY . ./app

WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
