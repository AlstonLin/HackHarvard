FROM node:8.11.3-alpine
ENV NODE_ENV production
RUN mkdir -p /code
WORKDIR /code
COPY . /code
RUN apk add --no-cache --update make gcc g++ python-dev linux-headers musl-dev bash && \
  npm install && \
  apk del make gcc g++ python-dev linux-headers musl-dev && \
  npm prune --production
CMD ["sh", "-c", "npm start"]
