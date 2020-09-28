#Execute docker build 
sudo docker build -t tkrikoriam/translation-frontend:v1 . 

#Docker run
docker run -d -p3501:80 --name translation-frontend tkrikoriam/translation-frontend:v1