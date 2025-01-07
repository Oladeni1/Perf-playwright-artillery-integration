### Inside that directory, you can run several commands:

## To install playwright
 Run > npm install playwright@latest

## To install otpauth
 Run > npm install otpauth

## To export credentials fot the runtime engine:
 Run > export HEROKU_EMAIL=olatundeoladeni@yahoo.com
 Run > export HEROKU_PASSWORD=1@ManchesterOla
 Run > export HEROKU_SECRET=NB2W45DFOIZA

## To Run test:
 Run > PWDEBUG=1 npx playwright test heroku2fa.spec.js --headed
 Run > npx playwright test heroku2fa.spec.js --headed

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

## To run this artillery test/ view result in artillery cloud dashboard:,
 Run > artillery run artillery.yml --name "my-economy-web-test" --record --key a9_Sgkoahg_eM87ocuKvEmMTPpc5qw8Q8c6

## Framework authour
 Olatunde Oladeni
