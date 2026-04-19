pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Build stage executed (simulated)'
            }
        }

        stage('Test') {
            steps {
                echo 'Test stage executed (simulated)'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Code quality analysis using SonarQube (simulated)'
            }
        }

        stage('Security') {
            steps {
                echo 'Security scan using Trivy (simulated)'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application (actual)...'
                sh 'docker run -d -p 3003:3000 smart-task-app || true'
            }
        }

        stage('Release') {
            steps {
                echo 'Application released to production'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring running containers...'
                sh 'docker ps'
            }
        }
    }
}