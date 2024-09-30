FROM denoland/deno:alpine-1.46.3

WORKDIR /usr/src/app

COPY ./deps.ts .

RUN deno cache ./deps.ts

COPY . .

CMD [ "run", "--watch", "--allow-net", "--allow-read", "--allow-env", "app.ts" ]