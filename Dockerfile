# Use an official Node.js image as the base image 
FROM mcr.microsoft.com/playwright:v1.41.1-jammy

# Set the working directory inside th container
WORKDIR /tests

# Copy package.json and packagelock.json to the wrking directory 
COPY . /tests

# Installproject dependencies
RUN npm install

# coomand to run your playwright tests
CMD ["npm", "run", "runTests"]