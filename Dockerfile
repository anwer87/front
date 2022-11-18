FROM alpine as BASE
USER root
WORKDIR /div/
COPY . ./

FROM node:lts-slim as REACTBUILDER
WORKDIR /root/
COPY --from=BASE /div/ .
RUN yarn
RUN yarn build

FROM node:lts-slim as SERVERBUILDER
WORKDIR /root/api
COPY --from=REACTBUILDER /root/div/api .
RUN yarn
RUN yarn build
RUN yarn pm2 -g
CMD ["pm2-runtime", "dist/main"]

FROM nginx:stable as STARTPROJECT
COPY --from=REACTBUILDER /root/div/build /usr/share/nginx/html