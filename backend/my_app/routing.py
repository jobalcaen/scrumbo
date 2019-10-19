from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.urls import path

from scrumbo.consumers import BoardConsumer

application = ProtocolTypeRouter({
    # Empty for now (http->django views is added by default)
    'websocket': AllowedHostsOriginValidator(
        URLRouter(
            [
                path('<slug:board_url>', BoardConsumer),
            ]    
        )
    )
})