#!groovy

def PROJECT_NAME='astro'
def branch = env.BRANCH_NAME.replace("/","-").toLowerCase()
def project=PROJECT_NAME + '-' + branch

node {
  properties([
    [
      $class: 'jenkins.model.BuildDiscarderProperty',
      strategy: [
        $class: 'LogRotator',
        numToKeepStr: '5'
      ]
    ],
    disableConcurrentBuilds()
  ])

  try {
    stage('Initialize') {
      echo 'Initializing...'
      def node = tool name: 'NodeJs-8.11.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
      env.PATH = "${node}/bin:${env.PATH}"
    }

    stage('Checkout') {
      echo 'Getting source code...'
      checkout scm
    }

    stage('Create Dokku App') {
      timeout(15) {
        configFileProvider([configFile(fileId: 'create-dokku-app', variable: 'CREATE_APP')]) {
          def path = CREATE_APP.replace("\\", "/").replace('e:/','/e/')
          bat "scp -i /c/windows/system32/config/systemprofile/.ssh/id_rsa ${path} ec-deploy@172.24.205.20:/home/ec-deploy/create-app.sh"
        }

        bat "ssh -t -o PubkeyAuthentication=yes -o PasswordAuthentication=no -X ec-deploy@172.24.205.20 \"./create-app.sh ${project}\""
        bat "ssh -t -o PubkeyAuthentication=yes -o PasswordAuthentication=no -X ec-deploy@172.24.205.20 \"dokku proxy:ports-add ${project} http:80:9000\""
      }
    }

    stage('Push application') {
      def remote = bat(returnStdout: true, script: 'git remote -v')
      if(!remote.contains('dokkus3')) {
        echo "Set Remote for ${project}"
        bat "git remote add dokkus3 dokku@172.24.205.20:${project}"
      }

      def branches = bat(returnStdout: true, script: 'git branch --list')

      if(branches.contains("""${env.BRANCH_NAME}""")) {
        echo "Remove old branch"
        bat "git branch -D ${env.BRANCH_NAME}"
      }

      bat "git checkout -b ${env.BRANCH_NAME}"
      bat "git push dokkus3 ${env.BRANCH_NAME}:master"

    }

    stage('Audits') {
      nodejs('NodeJs-8.11.0') {
        bat "lighthouse --maxWaitForFcp 120000 --output-path=./lighthouse-report.html --enable-error-reporting  --quiet --chrome-flags='--headless' http://${project}.s3.ecinternal.com"
      }

      publishHTML (target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: '.',
        reportFiles: 'lighthouse-report.html',
        reportName: "Lighthouse"
      ])
    }
  } catch (e) {
    echo 'Build failed.'
    throw e
  } finally {
    emailext body: 'The $PROJECT_NAME - Build # $BUILD_NUMBER has finished with a status of $BUILD_STATUS', recipientProviders: [developers()], subject: 'Jenkins | $PROJECT_NAME - $BUILD_STATUS:'
    echo 'Jenkins job completed'
  }
}
