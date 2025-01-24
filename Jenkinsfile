pipeline {
    agent any

    environment {
        ImageRegistry = 'ferdinandjrdocker'
        EC2_IP = '18.139.116.32'
        DockerComposeFile = 'docker-compose.yml'
    }

    stages {

        stage("buildImage") {
            steps {
                script {
                    echo "Building Docker Image..."
                    sh "docker build -t ${ImageRegistry}/${JOB_NAME}:${BUILD_NUMBER} ."
                }
            }
        }

        stage("pushImage") 
            steps {
                script {
                    echo "Pushing Image to DockerHub..."
                    withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${ImageRegistry}/${JOB_NAME}:${BUILD_NUMBER}"
                    }
                }
            }
        }

        stage("deployCompose") {
            steps {
                script {
                    echo "Deploying with Docker Compose..."
                    sshagent(['ec2']) {
                        // Upload files once to reduce redundant SCP commands
                        sh """
                        scp -o StrictHostKeyChecking=no ubuntu@${EC2_IP}:/home/ubuntu
                        ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} "docker compose -f /home/ubuntu/${DockerComposeFile} down"
                        ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} "docker compose -f /home/ubuntu/${DockerComposeFile} up -d"
                        """
                    }
                }
            }
        }
    }
}