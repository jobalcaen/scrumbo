from django.test import TestCase
from scrumbo.models import Board
from django.test import Client
from rest_framework.reverse import reverse
from scrumbo.constants import TEST_BOARD_NAME
import io
from rest_framework.parsers import JSONParser
from scrumbo.serializers import BoardModelSerializer
from scrumbo.views import BoardViewSet
from rest_framework.test import APIRequestFactory
from rest_framework.request import Request


# Create your tests here.

class BoardTest(TestCase):
    """ unit tests for Board model """

    def setUp(self):
        return

    def test_create_a_board(self):
        Board.objects.create(name=TEST_BOARD_NAME)
        self.assertTrue(Board.objects.all().count(), 1)


    def test_board_cannot_have_duplicate_name(self):
        before_board_count = Board.objects.all().count()

        try:
            with transaction.atomic():
                Board.objects.create(name=TEST_BOARD_NAME)
        except:
            pass

        after_board_count = Board.objects.all().count()
        self.assertTrue(after_board_count == before_board_count)


class BoardAPITest(TestCase):
    factory = APIRequestFactory()
    request = factory.get('/')
    serializer_context = {
        'request': Request(request),
    }

    def setUp(self):
        pass

    def test_can_get_boards_using_rest(self):
        
        Board.objects.create(name=TEST_BOARD_NAME)
        Board.objects.create(name=TEST_BOARD_NAME+"a")
        boards = Board.objects.all()
        serializer = BoardModelSerializer(boards, many=True, context={'request': self.request})
        response = self.client.get(reverse('board-list'), format='json')
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, 200)

    def test_can_post_board_using_rest(self):
        boards_count = Board.objects.count()
        self.assertEqual(boards_count, 0)
        response = self.client.post(reverse('board-list'), {"name": TEST_BOARD_NAME})
        self.assertEqual(response.status_code, 201)

        boards_count = Board.objects.count()
        self.assertEqual(boards_count, 1)


    def test_url_friendly_name_gets_generated(self):
        sample_url_friendly_name = BoardModelSerializer.make_url_friendly_name(self, TEST_BOARD_NAME)
        response = self.client.post(reverse('board-list'), {"name": TEST_BOARD_NAME})
        self.assertEqual(sample_url_friendly_name, response.data['url_friendly_name'])
