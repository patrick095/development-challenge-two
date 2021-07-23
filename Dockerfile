FROM node

WORKDIR /usr/src/api

COPY package*.json ./api

RUN yarn install

COPY ./api .

RUN yarn build

ENV DB_HOST=db

WORKDIR /usr/src/app

COPY package*.json ./app

RUN yarn install

COPY ./app .

RUN yarn build

WORKDIR /usr/src

COPY package*.json ./

RUN yarn install

EXPOSE 3000 3001

CMD ["yarn", "start"]
