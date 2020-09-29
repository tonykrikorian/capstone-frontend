#Stage build the application

FROM node:10.22.1 AS build
ARG getlanguages
ARG urltranslate
RUN mkdir /app
WORKDIR /app


RUN echo "${getlanguages}"
RUN echo "${urltranslate}"

ENV REACT_APP_GET_LANGUAGES=$getlanguages
ENV REACT_APP_TRANSLATE=$urltranslate

COPY . /app
RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run build

#Stage execute nginx
FROM nginx:1.13.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

