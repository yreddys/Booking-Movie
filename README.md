## Installation Steps

To set up the project and ensure the correct dependencies, follow these steps:

### 1. Update React and React DOM to Version 18.2.0

Run the following command to update `react` and `react-dom` to the latest stable version (18.2.0):

```bash
npm install react@18.2.0 react-dom@18.2.0

rm -rf node_modules package-lock.json

npm install

npm cache clean --force
npm start

