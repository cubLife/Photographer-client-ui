FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

COPY yarn.lock ./

RUN  yarn install --frozen-lockfile

COPY . .

CMD ["npm", "start"]