pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing Node.js...'
                sh 'apt update'
                sh 'apt install -y nodejs npm'
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
                echo 'Code quality analysis (simulated with SonarQube)'
            }
        }

        stage('Security') {
            steps {
                echo 'Security scan (simulated with Trivy)'
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