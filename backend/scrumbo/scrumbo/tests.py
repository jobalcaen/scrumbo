from django.test import TestCase
from scrumbo.models import Board
from rest_framework.test import APIRequestFactory
from rest_framework.reverse import reverse
from scrumbo.constants import TEST_BOARD_NAME
import io
from rest_framework.parsers import JSONParser
from scrumbo.serializers import BoardModelSerializer

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
    def test_can_get_boards_using_rest(self):

        Board.objects.create(name=TEST_BOARD_NAME)
        Board.objects.create(name=TEST_BOARD_NAME+"a")

        response = self.client.get(reverse('boards-list'))

        serializer = BoardModelSerializer(data=response)

        print(serializer.is_valid())

