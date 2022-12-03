FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN  yarn install --frozen-lockfile
COPY . .
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]