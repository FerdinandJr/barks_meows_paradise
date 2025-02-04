pipeline {
    agent any

    environment {
        ImageRegistry = 'ferdinandjrdocker'
        EC2_IP = '13.229.197.98'
        DockerComposeFile = 'docker-compose.yml'
        DotEnvFile = '.env'
        Dimage = 'barks_meows_paradise1'
        DOCKER_CREDENTIALS = credentials('barks_meows_paradise1')
    }

    stages {

        stage("buildImage") {
            steps {
                script {
                    echo "Building Docker Image..."
                    sh 'docker build -t ferdinandjrdocker/barks_meows_paradise1:1.0 .'
                }
            }
        }


        stage("Login") {
            steps {
                script {
                    echo "Login"
                        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin'
                    }
                }
            }

        stage("pushImage") {
            steps {
                script {
                    echo "Pushing Image to DockerHub..."
                        sh "docker push ${ImageRegistry}/${Dimage}:1.0 "
                    }
                }
            }
        }

    
    }
