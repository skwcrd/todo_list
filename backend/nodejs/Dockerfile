# docker build -t alpine-node
FROM node:10.14-alpine

RUN npm install -g nodemon
RUN npm install -g serve

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]