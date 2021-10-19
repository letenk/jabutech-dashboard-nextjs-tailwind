# Image node js
FROM node:lts-alpine as build-stage

# Work Directory
WORKDIR /app

# install and cache app dependencies
COPY package.json ./

COPY . .
RUN yarn install

# start app
CMD ["yarn", "dev"]