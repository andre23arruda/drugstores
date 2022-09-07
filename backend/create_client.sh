
#!/bin/bash
# run with `. create_su.sh`
PWD=`pwd`

create_client () {
	if [ "$(uname)" == "Darwin" ]; then
        . $PWD/venv/bin/activate
        elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
                . $PWD/venv/bin/activate
        elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
                . $PWD/venv/Scripts/activate
        elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
                . $PWD/venv/Scripts/activate
        fi

        echo "from django.contrib.auth.models import User; User.objects.create_user('client', 'teste@example.com', '#Test1234')" | python manage.py shell
		printf "\nUser created successfully!!\n"
        python manage.py drf_create_token client
		printf "\nSAVE THIS TOKEN!"
}

create_client