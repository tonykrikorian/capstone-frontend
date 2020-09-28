#Stage build the application
FROM Node:10.22.1 AS build
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run build

#Stage execute nginx
FROM nginx:1.13.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

