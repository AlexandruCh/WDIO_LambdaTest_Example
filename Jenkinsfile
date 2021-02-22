pipeline {
        agent {
            docker {
                image 'registry.metroscales.io/transportation/transportation_build_image_selenium'
            }
        }

    stages {
        stage('run') {
            steps {
                    sh './gradlew test -PSUITE=LambdaTest'
            }
        }
    }
}
