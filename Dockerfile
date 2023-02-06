FROM node:16.18.0-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . . 

COPY ./dist ./dist

CMD ["yarn", "start:dev"]