pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
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
                echo 'Deploying application...'
                sh 'nohup node app.js &'
            }
        }

        stage('Release') {
            steps {
                echo 'Application released to production'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring running process...'
                sh 'ps aux | grep node'
            }
        }
    }
}