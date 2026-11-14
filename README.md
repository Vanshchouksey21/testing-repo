# Live Site Tests (3 Unit, 2 Integration, 2 E2E)

This test suite covers production testing against live web services:
- **Unit Tests**: Data helpers, price parsers, string & email validation.
- **Integration Tests**: Direct HTTP calls against live `https://reqres.in/api` verifying real 200 responses and 404 error handling.
- **E2E Tests**: Headless browser flows against `http://books.toscrape.com/` testing category filtering, navigation, stock check and product details.

## How to push to GitHub:
```bash
git init
git add .
git commit -m "feat: add 3 unit, 2 integration and 2 e2e live site tests"
git branch -M main
git remote add origin https://github.com/<YOUR_USER>/<YOUR_REPO_NAME>.git
git push -u origin main
```

## Running locally:
```bash
npm install
npm run test:unit
npm run test:integration
npm run test:e2e
```

