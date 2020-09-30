kubectl apply -f frontend-namespace.yml
kubectl apply -f frontend-configmap.yml
kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-external-service.yml

kubectl get all -n frontend-translator

