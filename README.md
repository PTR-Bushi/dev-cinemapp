# dev-cinemapp

### Olá dev,

### Requisitos/especificações para o projeto

- Xcode 12.4
- node v12.22.1
- npm v6.14.12

### Instruções para rodar o projeto

1. No terminal, navegue até a pasta do projeto.
2. Instale as dependências do projeto:
   ```
   npm install
   ```
3. Vá na pasta `ios` e instale os pods:
   ```
   cd ios/ && pod install && cd ..
   ```
4. Finalmente o comando para buildar o projeto no simulador:
   ```
   npx react-native run-ios
   ```
