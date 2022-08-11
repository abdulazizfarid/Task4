FROM node

USER node

WORKDIR /app

COPY . .
RUN npm i

CMD [ "npm", "start" ]

