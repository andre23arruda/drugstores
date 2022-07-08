#!/bin/bash
# run with `. create_su.sh`
PWD=`pwd`

create_su () {
	if [ "$(uname)" == "Darwin" ]; then
		. $PWD/venv/bin/activate
	elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
		. $PWD/venv/bin/activate
	elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
		. $PWD/venv/Scripts/activate
	elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
		. $PWD/venv/Scripts/activate
	fi

	printf "\n Virtual enviroment activated. \n\n Use 'deactivate' to close it. \n"

	echo "from django.contrib.auth.models import User; User.objects.create_superuser('teste', 'teste@example.com', 'teste1234')" | python manage.py shell

	printf "\n User created successfully!!"

	printf "\n User: teste"

	printf "\n Password: teste1234 \n\n"

}

create_su