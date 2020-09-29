#Stage build the application
FROM node:10.22.1 AS build
ARG url_backend_get_languages
ARG url_backend_translate
RUN mkdir /app
WORKDIR /app
COPY . /app

ENV URL_BACKEND_GET_LANGUAGES=$url_backend_get_languages
ARG URL_BACKEND_TRANSLATE=$url_backend_translate

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run build

#Stage execute nginx
FROM nginx:1.13.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

