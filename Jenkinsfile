pipeline {
    agent any
    stages {
        stage("ESLint JS Code frontend"){
            steps{
             sh "npm install"
             sh "node_modules/.bin/eslint src/*.js --fix"                
            }
        }
        stage("Build Docker image frontend"){
            steps{
                echo "========Building Docker image frontend============"
                echo "Build number id ${BUILD_NUMBER}"
                
                sh ''' docker build -t 321304165861.dkr.ecr.us-west-2.amazonaws.com/translation-frontend:v${BUILD_NUMBER} . \
                --build-arg getlanguages="http://internal-service:4000.microservices/translate/languages" \
                --build-arg urltranslate="http://internal-service:4000.microservices/api/translate" \
                '''
            }
            post{
                success{
                    echo "========Docker image Builded========"
                    echo "Docker image build successfully"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage("Upload Image to ECR frontend"){
            steps{
                echo "========Uploading Docker image frontend========"
                sh ''' 
                    aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 321304165861.dkr.ecr.us-west-2.amazonaws.com
                '''
                sh '''
                    docker push 321304165861.dkr.ecr.us-west-2.amazonaws.com/translation-frontend:v${BUILD_NUMBER}
                    
                '''                
            }
            post{
                success{
                    echo "====++++only when successful++++===="
                }
                failure{
                    echo "======++++only when failed++++===="
                }
            }
        }
         stage("Deploy to AWS EKS"){
            steps{
             withAWS(region:'us-west-2',credentials:'AWS_EKS'){
                sh ''' 
                    aws sts get-caller-identity
                '''
                sh ''' 
                   aws eks --region us-west-2 update-kubeconfig --name EKSUdacityCapstone
                '''
                sh '''
                    kubectl set image deployment.apps/frontend-deployment frontend-translator=321304165861.dkr.ecr.us-west-2.amazonaws.com/translation-frontend:v${BUILD_NUMBER} -n frontend-translator 
                    
                 '''

                 sh 'kubectl get all -n frontend-translator'
             }
            }
        }
    }
}