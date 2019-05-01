from django.test import TestCase
from scrumbo.models import Board
from django.test import Client
from rest_framework.reverse import reverse
from scrumbo.constants import TEST_BOARD_NAME_1, TEST_BOARD_NAME_2, BOARDS_LIST_URL, NOTES_LIST_URL, NOTE_BODY_1, NOTE_BODY_2
import io
from rest_framework.parsers import JSONParser
from scrumbo.serializers import BoardSerializer
from scrumbo.views import BoardView
from rest_framework.test import APIRequestFactory
from rest_framework.request import Request
from rest_framework import status


# Create your tests here.

# class BoardTest(TestCase):
#     """ unit tests for Board model """

#     def setUp(self):
#         return

#     def test_create_a_board(self):
#         Board.objects.create(name=TEST_BOARD_NAME)
#         self.assertTrue(Board.objects.all().count(), 1)


#     def test_board_cannot_have_duplicate_name(self):
#         before_board_count = Board.objects.all().count()

#         try:
#             with transaction.atomic():
#                 Board.objects.create(name=TEST_BOARD_NAME)
#         except:
#             pass

#         after_board_count = Board.objects.all().count()
#         self.assertTrue(after_board_count == before_board_count)       

def url_builder(board):
    board_id = getattr(board, 'id')
    
    return '%s%s%s' % (BOARDS_LIST_URL, board_id, NOTES_LIST_URL)

class BoardAPITest(TestCase):
    factory = APIRequestFactory()
    request = factory.get('/')
    serializer_context = {
        'request': Request(request),
    }


    def setUp(self):
        pass

    def test_can_get_boards_using_rest(self):
        Board.objects.create(
            name=TEST_BOARD_NAME_1,
            url_friendly_name=BoardSerializer.make_url_friendly_name(self, TEST_BOARD_NAME_1)
        )
        Board.objects.create(
            name=TEST_BOARD_NAME_2,
            url_friendly_name=BoardSerializer.make_url_friendly_name(self, TEST_BOARD_NAME_2)
        )        
        boards = Board.objects.all()
        serializer = BoardSerializer(boards, many=True, context={'request': self.request})
        response = self.client.get(BOARDS_LIST_URL, format='json')
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_unknown_board_returns_404(self):
        response = self.client.get(BOARDS_LIST_URL+'3/', format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


    def test_can_post_board_using_rest(self):
        boards_count = Board.objects.count()
        self.assertEqual(boards_count, 0)
        response = self.client.post(BOARDS_LIST_URL, {"name": TEST_BOARD_NAME_1})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        boards_count = Board.objects.count()
        self.assertEqual(boards_count, 1)


    def test_url_friendly_name_gets_generated(self):
        sample_url_friendly_name = BoardSerializer.make_url_friendly_name(self, TEST_BOARD_NAME_1)
        response = self.client.post(BOARDS_LIST_URL, {"name": TEST_BOARD_NAME_1})
        self.assertEqual(sample_url_friendly_name, response.data['url_friendly_name'])

    def test_board_name_alphanumeric_characters_only(self):
        response = self.client.post(BOARDS_LIST_URL, {"name": TEST_BOARD_NAME_1+'$'})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_unique_board_name(self):
        self.client.post(BOARDS_LIST_URL, {"name": TEST_BOARD_NAME_1})
        response = self.client.post(BOARDS_LIST_URL, {"name": TEST_BOARD_NAME_1})
        # Idealy I want to return a 409 status code
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

class NoteAPITest(TestCase):
    factory = APIRequestFactory()
    request = factory.get('/')
    serializer_context = {
        'request': Request(request),
    }
    

    def test_can_create_a_note(self):
        board = Board.objects.create(
            name=TEST_BOARD_NAME_1,
            url_friendly_name=BoardSerializer.make_url_friendly_name(self, TEST_BOARD_NAME_1)
        )
        self.assertTrue(Board.objects.all().count(), 1)

        url = url_builder(board)
        response = self.client.post(url, {"body": NOTE_BODY_1})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_board_deletion_also_deletes_notes:
         board = Board.objects.create(
            name=TEST_BOARD_NAME_1,
            url_friendly_name=BoardSerializer.make_url_friendly_name(self, TEST_BOARD_NAME_1)
        )
        self.assertTrue(Board.objects.all().count(), 1)
        url = url_builder(board)
        response = self.client.post(url, {"body": NOTE_BODY_1})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        note = Board.objects.note_set()

        response = self.client.post(url+getattr(board, 'id'), )