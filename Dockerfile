# Stage 1
FROM node:14 as build-step
RUN mkdir -p /app/src
WORKDIR /app/src

COPY package.json /app/src
RUN npm install
COPY . /app/src
RUN npm run build

#stage 2

FROM node:14
RUN mkdir -p /app/edume_property
WORKDIR /app/edume_property
COPY --from=build-step /app/src/build /app/edume_property
COPY package*.json /app/edume_property
RUN npm install && npm i -g nodemon

CMD [ "npm", "run", "run-build" ]
EXPOSE 33003
