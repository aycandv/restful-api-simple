FROM node

WORKDIR /opt/app/
COPY app/ .

RUN npm install
CMD [ "node", "app.js" ]