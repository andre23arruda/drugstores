from django.contrib.messages import constants as messages
from django.utils.translation import gettext_lazy as _
from pathlib import Path
import os, sys, json
from setup import env

BASE_DIR = Path(__file__).resolve(strict=True).parent.parent
SECRET_KEY = os.environ['SECRET_KEY']
DEBUG = os.environ['DEBUG']
ALLOWED_HOSTS = json.loads(os.environ['ALLOWED_HOSTS'])

# Application definition
INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # third party apps
    'django_filters',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    # project apps
    'drugstore',
]

JAZZMIN_SETTINGS = {
    "site_title": "Estoque de medicamentos",
    "site_header": "Farmácias - Admin",
    "site_brand": "Farmácias - Admin",
    "site_logo": "images\logo-key.svg",
    "login_logo": "images\logo.svg",
    "login_logo_dark": None,
    "site_logo_classes": "img-circle",
    "site_icon": None,
    "welcome_sign": "",
    "copyright": "a²rruda",
    "custom_css": 'css/custom-theme.css',
    "search_model": "drugstore.Medicine",

    # Links to put along the top menu
    "topmenu_links": [
        {"name": "Home",  "url": "admin:index", "permissions": ["auth.view_user"]},
        {"app": "drugstore"},
        {"name": "Site", "url": "https://github.com/farridav/django-jazzmin/issues", "new_window": True},
    ],

    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
        "drugstore.Drugstore": "fas fa-clinic-medical",
        "drugstore.Medicine": "fas fa-pills",
        "drugstore.MedicineRegister": "fas fa-edit",
        "admin.LogEntry": "fas fa-dolly",
    },

    # "show_ui_builder": True
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": False,
    "accent": "accent-primary",
    "navbar": "navbar-dark",
    "no_navbar_border": True,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": True,
    "sidebar_nav_flat_style": False,
    "theme": "default",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-outline-primary",
        "secondary": "btn-outline-secondary",
        "info": "btn-outline-info",
        "warning": "btn-outline-warning",
        "danger": "btn-outline-danger",
        "success": "btn-outline-success"
    }
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'setup.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [ BASE_DIR / 'templates' ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'setup.wsgi.application'

# database
USE_SQLITE = os.environ['USE_SQLITE']
if USE_SQLITE: # sqlite
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else: # postgres
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'database_name',
            'USER': 'username',
            'PASSWORD': 'password',
            'HOST': 'localhost',
        }
    }


AUTH_PASSWORD_VALIDATORS = [
    { 'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    { 'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    { 'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    { 'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]


# time zone and language
LANGUAGES = (
    ('en', _('English')),
    ('pt-br', _('Portuguese')),
)
LANGUAGE_CODE = os.environ['LANGUAGE_CODE']
TIME_ZONE = os.environ['TIME_ZONE']
USE_I18N = True
USE_L10N = True
USE_TZ = True
LOCALE_PATHS = [ BASE_DIR / 'locale' ]

# static and media
STATIC_ROOT = BASE_DIR / 'static'
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
STATICFILES_DIRS = [ BASE_DIR / 'setup/static' ]

# apps folder
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))

# Messages
MESSAGE_TAGS = {
    messages.ERROR: 'danger',
    messages.SUCCESS: 'success',
}

# API configuration
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication'
    ],
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
}

# CORS
CORS_ALLOWED_ORIGINS = json.loads(os.environ['CORS_ALLOWED_ORIGINS'])

# Admin theme
from .theme import JAZZMIN_SETTINGS, JAZZMIN_UI_TWEAKS