<h1 align="center">
    <img alt="Drugstores" title="Drugstores" src="backend/setup/static/images/logo.svg" width="100px" />
</h1>

<h1 align="center">
    Drugstores
</h1>

<p align="center">
	<a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#instalação">Exemplo</a>
</p>

## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
- [Django](https://www.djangoproject.com/)
- [Django-Rest-Framework](https://www.django-rest-framework.org/)
- [Next.js](https://nextjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)


## 💻 Projeto
**Projeto para cadastrar medicamentos, farmácias e colaboradores**
<div align="center">
    <img alt="models" title="models" src=".github/drugstore.png" width="300px" />
</div>

## Instalação
### Pré requisitos
Ter instalado:
- [Python](https://www.python.org/downloads/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Expo](https://docs.expo.dev/get-started/installation/)


### Backend
```sh
# clonar repositório
git clone https://github.com/andre23arruda/drugstores

# Entrar na pasta
cd backend

# Renomear env_example.py para env.py
cp setup/env_example.py setup/env.py

# Criar um ambiente virtual
python -m venv venv

# Ativar o ambiente virtual
. activate.sh
# ou . venv/Scripts/activate
# ou . venv/bin/activate
# ou source venv/Scripts/activate

# Instalar os pacotes necessários
pip install -r requirements.txt

# Executar as migrações
python manage.py migrate

# Criar superusuário (poderá fazer login e entrar no admin)
. create_su.sh
# username -> teste
# password -> teste1234

# Criar usuário client com token
. create_client.sh
# guarde o tokken gerado

# Carregar fixtures (exemplo para colocar no banco de dados)
python manage.py loaddata medicines groups

# Start
. run.sh
```

### Web
```sh
# Entrar na pasta
cd web_next

# Renomear .env_example para .env
cp .env_example.local .env.local
# adicione o token gerado

# Instalar os pacotes do projeto
yarn install

# Rodar
yarn start
```

### Mobile
```sh
# Entrar na pasta
cd mobile

# Instalar os pacotes do projeto
yarn install

# Adicione o token gerado em config.js

# Rodar
expo start
```

### Rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app


## Exemplo
<div align="center">
    <img alt="Splash Screen" title="Splash Screen" src=".github/screen-1.png" width="200px" />
    <img alt="Screen 2" title="Screen 2" src=".github/screen-2.png" width="200px" />
    <img alt="Screen 3" title="Screen 3" src=".github/screen-3.png" width="200px" />
    <img alt="Screen 4" title="Screen 4" src=".github/screen-4.png" width="200px" />
</div>
<hr>
