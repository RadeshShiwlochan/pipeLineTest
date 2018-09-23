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
                nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') 
                {
                    sh 'npm config ls'
                }
            }
        }
    }
}    