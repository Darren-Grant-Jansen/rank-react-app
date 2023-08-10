# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

- Clone/download the repository to your local machine.
- Install Node.js: If you don't have it already, download and install the latest version of Node.js from the official website (https://nodejs.org).
- Navigate to the project directory.
    * cd rank-react-app      
- Install any necessary dependencies
    * npm install
- Run the development server. To start the development server, run the following command:
    * npm run dev
    your development server will start running and you can access the project through the URL (usually http://localhost:port_num) in your terminal

## Testing
 For testing the credit card number input, these numbers are universally recognized as test numbers and won't result in an actual transaction.
 Here are some test numbers:

   * 4111 1111 1111 1111 - VISA
   * 5555 5555 5555 4444 - MasterCard
   * 3400 0000 0000 009 - American Express (AMEX)
   * 6011 0000 0000 0004 - Discover
   * 3530 1113 3330 0000 - JCB
   * 3566 0020 2036 0505 - JCB
   * 2222 4200 0000 1112 - MasterCard (2-series)
   * 5018 0000 0009 - Maestro

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
