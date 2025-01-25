pipeline {
    agent any

    environment {
        ImageRegistry = 'ferdinandjrdocker'
        EC2_IP = '54.179.104.231'
        DockerComposeFile = 'docker-compose.yml'
        DotEnvFile = '.env'
        Dimage = 'barks_meows_paradise1'
    }

    stages {

        stage("buildImage") {
            steps {
                script {
                    echo "Building Docker Image..."
                    sh "docker build -t ${ImageRegistry}/${Dimage}:1.0 ."
                }
            }
        }

        

        
    }
}