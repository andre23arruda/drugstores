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

	echo "from django.contrib.auth.models import User; User.objects.create_superuser('dev', 'dev@email.com', '123')" | python manage.py shell

	printf "\n User created successfully!!"

	printf "\n User: dev"

	printf "\n Password: 123 \n\n"

}

create_su