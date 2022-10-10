FROM node:14.2.4 
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]