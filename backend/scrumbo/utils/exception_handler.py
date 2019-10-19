from rest_framework.views import exception_handler
from .exceptions import UniqueBoardException
from rest_framework.response import Response


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    if response is not None:
        response.data['status_code'] = response.status_code

    elif isinstance(exc, UniqueBoardException):
        data = {'detail': exc.detail}
        return Response(data, status=UniqueBoardException.status_code)

    return response
