pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                sh 'git clone https://github.com/RadeshShiwlochan/pipeLineTest.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}