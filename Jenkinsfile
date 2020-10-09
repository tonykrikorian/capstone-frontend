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
               
                sh 'docker build -t 321304165861.dkr.ecr.us-west-2.amazonaws.com/capstone-frontend:v${BUILD_NUMBER} .'
            }
        }
        stage("Upload Image to ECR frontend"){
            steps{
                echo "========Uploading Docker image frontend========"
                sh ''' 
                    aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 321304165861.dkr.ecr.us-west-2.amazonaws.com
                '''
                sh '''
                    docker push 321304165861.dkr.ecr.us-west-2.amazonaws.com/capstone-frontend:v${BUILD_NUMBER}
                    
                '''                
            }
        }
         stage("Deploy to AWS EKS"){
            steps{
             withAWS(region:'us-west-2',credentials:'AWS_EKS'){
                
                sh 'aws sts get-caller-identity'
                
                sh 'aws eks --region us-west-2 update-kubeconfig --name EKSUdacityCapstone'
                
                sh 'kubectl set image deployment.apps/capstone-frontend  capstone-frontend=321304165861.dkr.ecr.us-west-2.amazonaws.com/capstone-frontend:v${BUILD_NUMBER}'

                sh 'kubectl get all'
             }
            }
        }
    }
}