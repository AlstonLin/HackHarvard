FROM node:8.11.3-alpine
ENV NODE_ENV production
RUN mkdir -p /code
WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN apk add --no-cache --update make gcc g++ python-dev linux-headers musl-dev bash && \
  npm install && \
  apk del make gcc g++ python-dev linux-headers musl-dev && \
  npm prune --production
COPY . /code
CMD ["sh", "-c", "npm start"]
