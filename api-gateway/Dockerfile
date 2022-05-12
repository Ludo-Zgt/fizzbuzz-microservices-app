FROM docker.io/node:16

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm i -g @nestjs/cli
RUN npm i
COPY . .
RUN npm run build
CMD npm run start