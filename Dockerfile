FROM node:10

WORKDIR "/app"

COPY package.json /app

RUN npm install

COPY . /app

ENV MONGO_URL=""
ENV NODE_ENV=""
ENV PORT=""

CMD node bin/cli.js --rpc --rpcport=${PORT}

EXPOSE ${PORT}}
