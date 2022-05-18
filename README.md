# Api_CEP

> Aplicação construida para consumir informações https://viacep.com.br/ , 
> buscando usar as melhores práticas com Javascript. 

## 🚀 Instalando <Api_CEP>

Para instalar o <Api_CEP>, siga estas etapas:

```
npm install
Realize o download e instalção do Docker

Repita os comando no terminal:
docker pull redis
docker run --name redis13 -p 6379:6379 -d redis 

```

```
TESTES : 
```

```
  ** Obter Token de autenticação **
  Metodo: POST /auth
  URL: localhost:3000
  Content-Type: application/json
  body:
  {
    "email": "teste@teste.com",
    "password": "teste"
  }

  retorno: 
  {
    "user": "teste@teste.com",
    "sucess": true,
    "token": "TOKEN_VALIDO",
    "message": "Authentication successful"
  }
```
```
 ** Obter CEP  **
  Metodo: POST /cep
  URL: localhost:3000
  authorization: PEGAR_TOKEN_DA_REQUISICAO_ANTERIOR
  Content-Type: application/json
  body:
  {
    "cep": "37200900"
  }

  retorno: 
  {
    {"cep":"37200-900","logradouro":"Rua Doutor Baker",
    "complemento":"s/n","bairro":"Ignácio Valentin", 
    "localidade":"Lavras","uf":"MG" 
    "ibge":"3138203","gia":"","ddd":"35","siafi":"4763"}
  }
```
```
O projeto foi realizado com JWT para autenticação.
Redis para guardar as informações assim evitando outra requisição.
Docker para gerenciar as versões do redis.

```
## 🤝 Desenvolvedor

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/44575356?v=4" width="100px;" alt="Foto do David Oliveira no GitHub"/><br>
        <sub>
          <b>David Oliveira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


[⬆ Voltar ao topo](#Api_CEP)<br>