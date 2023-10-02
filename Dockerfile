# FROM public.ecr.aws/lambda/nodejs:18
FROM node:18.4.0

ARG awsExportsFile

WORKDIR /asset

COPY . /asset

RUN corepack enable

# RUN yarn workspaces focus @typescript-backend-cdk-starter/api --production