FROM node:18-alpine as client
LABEL authors="przb"
WORKDIR /usr/src/frontend
COPY public /usr/src/frontend/public
COPY src /usr/src/frontend/src
COPY package.json /usr/src/frontend/
RUN npm install

CMD ["npm", "start"]