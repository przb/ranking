FROM node:18-alpine as client
LABEL authors="przb"

WORKDIR /usr/src/frontend
COPY public /usr/src/frontend/public
COPY src /usr/src/frontend/src
COPY package.json /usr/src/frontend/
RUN npm install

RUN npm install serve -g
RUN npm run build


CMD ["serve", "-s", "build"]
