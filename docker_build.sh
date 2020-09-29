#Execute docker build 

docker build -t tkrikoriam/translation-frontend:v2  
\ --build_arg url_backend_get_languages=http://localhost:3500/api/translate/languages  url_backend_translate=http://localhost:3500/api/translate .

#Docker run
docker run -d -p3501:80 --name translation-frontend tkrikoriam/translation-frontend:v2