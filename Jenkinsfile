pipeline {
    agent any 
    
    options {
        // Esto le dice a Jenkins: "No intentes copiar archivos, yo te diré dónde están"
        skipDefaultCheckout() 
    }

    stages {
        stage('Paso 1: Preparar') {
            steps {
                // Usamos "bat" para entrar a la carpeta y preparar todo
                bat 'cd /d "C:\\DesarrolloWeb2\\ProyectoFac" && npm install'
            }
        }
        stage('Paso 2: Probar') {
            steps {
                // Corremos los tests
                bat 'cd /d "C:\\DesarrolloWeb2\\ProyectoFac" && npx ng test --watch=false --browsers=ChromeHeadless'
            }
        }
    }
    
    post {
       always {
            // Usamos comillas dobles y doble barra para que Windows no se confunda
            junit testResults: "C:\\DesarrolloWeb2\\ProyectoFac\\test-results\\*.xml"
        }
    }
}