FROM node:18 as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY public ./public
COPY src ./src
COPY .env.production .env     

RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
