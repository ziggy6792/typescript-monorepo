FROM node:18.4.0

ARG PACKAGE_NAME

WORKDIR /asset

COPY . /asset

RUN corepack enable

RUN yarn workspaces focus ${PACKAGE_NAME} --production