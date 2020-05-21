FROM node:12.16.3

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Install pm2
RUN npm install pm2 -g

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 80
# Run npm start using pm2
CMD ["pm2-runtime", "start", "npm", "--", "start" ]
