FROM node:12.2.0-alpine
WORKDIR /usr/src/app/e-wallet-web

COPY package*.json ./

RUN npm install -g @angular/cli@10.0.1 @angular-devkit/build-angular @angular/material@10.0.1 @angular/flex-layout@10.0.0-beta.32 && npm install

EXPOSE 4200

CMD ng serve --host 0.0.0.0