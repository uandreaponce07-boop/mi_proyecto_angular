pipeline {
    agent any 
    stages {
        stage('Paso 1: Preparar') {
            steps {
                // El robot entra a la carpeta y descarga lo necesario
                bat 'cd /d "C:\\DesarrolloWeb2\\ProyectoFac" && npm install'
            }
        }
        stage('Paso 2: Probar') {
            steps {
                // El robot corre tus 10 tests de Angular
                bat 'cd /d "C:\\DesarrolloWeb2\\ProyectoFac" && npx ng test --watch=false --browsers=ChromeHeadless'
            }
        }
    }
    post {
        always {
            // No importa si falló o ganó, el robot SIEMPRE hace las gráficas
            junit 'C:/DesarrolloWeb2/ProyectoFac/test-results/*.xml'
        }
    }
}