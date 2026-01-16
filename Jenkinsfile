pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
        bat 'npx playwright install'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          bat 'npx playwright test'
        }
      }
    }

    stage('Publish Report') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
      }
    }
  }
}
