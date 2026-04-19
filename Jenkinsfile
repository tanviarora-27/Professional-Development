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
                echo 'Deployment completed (Docker tested separately)'
            }
        }

        stage('Release') {
            steps {
                echo 'Application released to production'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring stage executed (logs & status simulated)'
            }
        }
    }
}
