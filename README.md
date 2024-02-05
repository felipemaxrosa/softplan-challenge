# Softplan Challenge UNIC

Este projeto foi desenvolvido para avaliação do processo seletivo para desenvolvedor da UNIC.

## 🚀 Instalação de Dependências

```bash
yarn install
```

## ⚡️ Executando a Aplicação

```bash
yarn start
```

## Usando a Aplicação

Ao acessar a aplicação, o usuário será direcionado automaticamente para uma tela de login, onde temos a princípio dois usuários pré-cadastrados que podem ser utilizados com o seguinte acesso:
![tela-login](docs/images/tela-login.jpeg)

Usuário com acesso `ADMIN` (completo):

```
Usuário: admin
Senha: admin
```

Usuário com acesso `USER` (limitado)

```
Usuário: user
Senha: user
```

O usuário que tem acesso `ADMIN` pode executar ações como:

- Criar um novo usuário
- Editar um usuário
- Excluir um usuário
- Consultar usuários
  ![tela-usuario-admin](docs/images/tela-usuario-admin.jpeg)

O usuário que tem acesso `USER` pode executar ações como:

- Editar seu próprio perfil, com exceção de mudar a si próprio para um usuário de nível `ADMIN`
- Consultar outros usuários
  ![tela-usuario-user](docs/images/tela-usuario-user.jpeg)
