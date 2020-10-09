#Execute docker build 

docker build -t tkrikoriam/translation-frontend:v9 . #--build-arg getlanguages="http://localhost:3500/api/translate/languages"  --build-arg urltranslate="http://localhost:3500/api/translate" 

#Docker run
#docker run -d -p3501:80 --name translation-frontend tkrikoriam/translation-frontend:v5