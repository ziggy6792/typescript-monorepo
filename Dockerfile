FROM node:18.4.0

ARG PACKAGE_NAME

# CDK expectects output to be in asset/
WORKDIR /asset

# .dockerignore filters out node_modules and other unneeded files
COPY . /asset

# Init yarn
RUN corepack enable

# Intall production dependencies for package being deployed
RUN yarn workspaces focus ${PACKAGE_NAME} --production