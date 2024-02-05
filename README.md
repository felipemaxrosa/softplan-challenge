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

### Editando o próprio perfil

Para que um usuário possa editar seu próprio perfil, basta ele clicar no Avatar que contém a inicial do seu usuário, no canto superior direito da tela e clicar em `Meu Perfil`:
![meu-perfil-acesso](docs/images/meu-perfil-acesso.jpeg)

E depois disso um modal irá se abrir onde o usuário poderá fazer as edições que desejar:

![meu-perfil](docs/images/meu-perfil.jpeg)

### Cadastrando um novo usuário

Para que um usuário de nível `ADMIN` possa cadastrar um outro usuário, ele deve clicar no botao `NOVO USUARIO` ao lado direito da barra de pesquisa:
![novo-usuario-botao](docs/images/novo-usuario-botao.jpeg)

E depois disso um modal irá se abrir onde o usuário poderá adicionar um novo usuário:
![novo-usuario](docs/images/novo-usuario.jpeg)

### Editando um novo usuário

Para que um usuário de nível `ADMIN` possa editar um outro usuário, ele deve clicar no botao com icone de lapis chamado `Editar Usuário` que fica localizado no final de cada linha da tabela e representa o usuário da linha.
![editar-usuario-botao](docs/images/editar-usuario-botao.jpeg)

E depois disso um modal irá se abrir onde o usuário poderá editar um usuário:
![editar-usuario](docs/images/editar-usuario.jpeg)

### Deletando um usuário

Para que um usuário de nível `ADMIN` possa deletar um outro usuário, ele deve clicar no botao com icone de lixeira chamado `Deletar Usuário` que fica localizado no final de cada linha da tabela e representa o usuário da linha.
![remover-usuario-botao](docs/images/remover-usuario-botao.jpeg)

E depois o usuário sera removido da tabela e tambem o `localStorage` onde os dados estao sendo persistidos:
![remover-usuario](docs/images/remover-usuario.jpeg)
