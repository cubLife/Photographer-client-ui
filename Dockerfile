FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN  yarn install --frozen-lockfile
COPY . .
RUN npm run build

FROM node:alpine
EXPOSE 3000
RUN mkdir /app
COPY --from=build /app/build /app
RUN npm install -g serve
CMD ["serve", "-s build"]