FROM node:12-slim

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

# Enables some build args and environment variables
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the production assets and compile the typescript
RUN npm run build

EXPOSE 80

# Run npm start using pm2
CMD ["pm2-runtime", "start", "dist/Main.js", "-i", "max" ]
