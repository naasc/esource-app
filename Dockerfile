FROM node:8.0

# Prepare app dir
RUN mkdir -p /usr/scr/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install && \
    npm install -g pushstate-server

# Bundle app source
COPY . /usr/src/app

# Build the app
#RUN npm run build

# Expose the app port
EXPOSE 9000

# defined in package.json
CMD [ "npm", "run", "start:prod" ]