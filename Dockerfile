FROM node:12-alpine

ENV ENV=production

WORKDIR /app
COPY package.json /app
COPY .env /app
COPY ecosystem.config.json /app
COPY . /app

RUN npm i pm2 -g
RUN npm i
COPY . .
EXPOSE 8000

CMD ["npm", "run", "start"]