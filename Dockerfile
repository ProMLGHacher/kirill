FROM node:22.4.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build:clean

CMD ["npm", "run", "preview"]