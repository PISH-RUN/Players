FROM node:14.17.0-alpine as build-deps

WORKDIR /usr/src/app
RUN apk add g++ make python
RUN apk add --no-cache git
COPY package.json yarn.lock ./
COPY packages packages
RUN yarn install --pure-lockfile --no-progress
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
