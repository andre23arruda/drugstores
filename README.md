<h1 align="center">
    <img alt="Drugstores" title="Drugstores" src="backend/setup/static/images/logo.svg" width="100px" />
</h1>

<h2 align="center">
    Drugstores
</h2>

## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)

## 💻 Projeto
**Projeto para cadastrar medicamentos e farmácias**


### Run
```sh
# clonar repositório
git clone https://github.com/andre23arruda/drugstores

# Entrar na pasta
cd event-qr-code

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

# Carregar fixtures (exemplo para colocar no banco de dados)
python manage.py loaddata medicines groups

# Start
. run.sh
```
