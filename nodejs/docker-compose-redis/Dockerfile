#Specify a base iamge
FROM node:alpine

WORKDIR /usr/app

# Install dependencies
COPY ./ ./
RUN npm install -g npm@latest



#Default Command
CMD [ "npm", "start" ]