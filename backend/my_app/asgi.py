# import os
# from channels.asgi import get_channel_layer

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "my_app.settings")

# channel_layer = get_channel_layer()



import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "my_app.settings")
django.setup()
application = get_default_application()
