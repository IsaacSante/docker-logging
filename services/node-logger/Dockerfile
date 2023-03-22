#Specify a base image
FROM node:latest
# Import token argument for buildtime
ARG NPM_TOKEN  
#Specify a working directory
WORKDIR /app
#Copy the dependencies file
COPY ./package.json ./
#Install dependencies
RUN npm install && npm cache clean --force
#Copy remaining files
COPY ./ ./

EXPOSE 8081

#Default command
CMD ["npm","start"]