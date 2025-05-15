## Pipeline Setup

```yaml
# azure-pipelines.yml example
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: QA
  displayName: 'Execute tests QA'
  variables:
  - group: QA_Vars  # Variable group with CYPRESS_URL=QA and credentials
  jobs:
  - job: Cypress_Tests
    strategy:
      matrix:
        chrome:
          browser: 'chrome'
        edge:
          browser: 'edge'
        firefox:
          browser: 'firefox'
      maxParallel: 3
    displayName: 'Tests in ${{ matrix.browser }}'
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '16.x'
    
    - script: npm install
      displayName: 'Install dependencies'
    
    - script: |
        npx cypress run --browser $(browser) --spec "cypress/e2e/E2ERouteRunner"
      displayName: 'Execute E2E tests'
      env:
        URL: $(URL)
        USER: $(USER)
        EMAIL: $(EMAIL)
        PASSWORD: $(PASSWORD)
```