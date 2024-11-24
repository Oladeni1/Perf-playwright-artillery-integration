### Inside that directory, you can run several commands:

## To install playwright
 Run > npm install playwright@latest

## Runs the end-to-end tests.
  Run > npx playwright test
    
## Starts the interactive UI mode.
  Run > npx playwright test --ui
    
## Runs the tests only on Desktop Chrome.
  Run > npx playwright test --project=chromium
    
## Runs the tests in a specific file.
  Run > npx playwright test example
    
## Runs the tests in debug mode.
  Run > npx playwright test --debug
    
## Auto generate tests with Codegen.
  Run > npx playwright codegen
   
## We suggest that you begin by typing:
  Run > npx playwright test


### Artillery Load Testing Note:

## To install artillery
 Run > npm install -g artillery@latest

## Runs the artillery script.
 Run > artillery run artillery.yml

## To run this artillery test and output JSON report:
 Run > artillery run artillery.yml -o results.json

## To convert the generated JSON to HTML then:,
 Run > artillery report results.json

## To run this artillery test in quite mode without writing output in console but output JSON report:
 Run > artillery run --quiet -o results2.json artillery.yml

## Framework authour
 Olatunde Oladeni