FROM node:16.15-alpine as base

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install

# Bundle app source
COPY . .


FROM base as production

RUN yarn build