FROM node:12-alpine

EXPOSE 80
ENV ENV=production

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm i pm2 -g
RUN npm i
COPY . .
RUN tsc


CMD ["pm2-runtime", "./dist/index.js"]