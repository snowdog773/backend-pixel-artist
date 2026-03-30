FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
# If your app uses a different port, change it here and in NPM
EXPOSE 6001
CMD ["node", "index.js"]