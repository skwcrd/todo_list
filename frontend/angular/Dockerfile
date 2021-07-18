# Create image based off of the official Node 10 image
FROM node:16-alpine as builder

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

RUN npm install

# Get all the code needed to run the app
COPY . .

RUN npm run build

FROM node:16-alpine

## From 'builder' copy published folder
COPY --from=builder /app /app

WORKDIR /app

# Expose the port the app runs in
EXPOSE 4000

CMD [ "node", "dist/todo_list/main.js" ]