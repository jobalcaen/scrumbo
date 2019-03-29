from django.test import TestCase
from scrumbo.models import Board
from django.test import Client
from rest_framework.reverse import reverse
from scrumbo.constants import TEST_BOARD_NAME
import io
from rest_framework.parsers import JSONParser
from scrumbo.serializers import BoardModelSerializer
from scrumbo.views import BoardViewSet

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
    def setUp(self):
        pass

    def test_can_get_boards_using_rest(self):
        c = Client()
        Board.objects.create(name=TEST_BOARD_NAME)
        Board.objects.create(name=TEST_BOARD_NAME+"a")
        boards = Board.objects.all()
        serializer = BoardModelSerializer(boards, many=True)
        response = c.get(reverse('boards-list'))
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, 200)


