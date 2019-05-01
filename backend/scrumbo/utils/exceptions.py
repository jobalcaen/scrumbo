from rest_framework.exceptions import APIException
from rest_framework import status


class UniqueBoardException(APIException):
    status_code = status.HTTP_409_CONFLICT
    default_detail = 'This board name already exists. Please choose another one.'
    default_code = 'existing_board_name'

class InvalidBoardNameException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'Only alpha numberic characters and white spaces alowed in board name.'
    default_code = 'invalid_character'

