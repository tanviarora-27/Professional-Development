pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building application...'
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
                echo 'Code quality analysis (simulated)'
            }
        }

        stage('Security') {
            steps {
                echo 'Security scan (simulated)'
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
                echo 'Application released'
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