# Desafio Crud

Desafio de criar uma API utilizando laravel, banco de dados de usuário com MYSQL, frontend com Angular, frontend e backend apartados.

## Objetivo
No desafio era necessário criar uma API em Laravel, que irá comunicar com um banco de dados MYSQL, do qual deve acessar uma tabela de usuários, o frontend deveria ser CRUD em Angular. A regra era o frontend e backend estarem apartados. Nesse caso a API acessa uma tabela de usuário onde você pode fazer um cadastro e acessar ele.

## Requisitos
* [PHP 7.2.18](https://www.php.net/releases/7_2_18.php)
* [NPM 6.4.1](https://code.visualstudio.com)
* [Node 10.15.3](https://angular.io/)
* [Angular CLI 8.3.17](https://angular.io/)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/)
* [Laravel 5.5](https://laravel.com/docs/5.5/installation)
* [WampServer](http://www.wampserver.com/en/)

## Execução
Para executar o frontend:
Instalar os pacotes com o comando na pasta 'frontend' e executar o comando
```npm install```
Ainda na pasta 'frontend' executar o comando abaixo para executar a aplicação
```ng serve --open```
Será aberta a URL [http://localhost:4200/](http://localhost:4200/)

Para executar o backend:
Instalar os pacotes na pasta 'backend' e executar o comando
```npm install```
Em seguida, executar o seguinte comando dentro da pasta 'backend' para executar a aplicação
```php artisan serve --port 8000```
