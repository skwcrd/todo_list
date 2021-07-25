FROM node:14

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Disabling ssl for npm for Dev or if you are behind proxy
RUN npm set strict-ssl false

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD [ "npm", "start" ]