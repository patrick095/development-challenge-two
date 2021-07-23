FROM node

WORKDIR /usr/src

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

ENV DB_HOST=postgres

CMD ["node", "dist/index.js"]
