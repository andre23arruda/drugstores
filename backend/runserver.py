import socket, subprocess

PORT = '8000'

def get_ip_address():
    '''Return IP adress'''
    hostname = socket.gethostname()
    ip_address = socket.gethostbyname(hostname)
    return ip_address


def put_ip_in_api_file(folder: str):
    '''Put ip address in api.js'''
    FILE_PATTERN = 'const API_URL'
    file_path = fr'../{ folder }/src/services/api.ts'

    with open(file_path, 'r+') as f:
        lines = f.readlines()
        f.seek(0)

        for line in lines:
            if not line.startswith(FILE_PATTERN):
                f.write(line)
            else:
                f.write(f'{ FILE_PATTERN } = `{ get_ip_address() }:{ PORT }`\n')

        f.truncate()


def main():
    '''Run'''
    subprocess.call(f'python manage.py runserver { get_ip_address() }:{ PORT }', shell=True)
    # subprocess.call(f'python manage.py runserver { PORT }', shell=True)


if __name__ == '__main__':
    main()