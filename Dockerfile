FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN  yarn install --frozen-lockfile
COPY . .
RUN npm ci 
RUN npm run build

FROM nginx:alpine as production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]