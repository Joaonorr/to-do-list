FROM node:latest as angular
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm run build