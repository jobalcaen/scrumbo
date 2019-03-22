from django.test import TestCase
from scrumbo.models import Board, Note
from scrumbo.constants import TEST_BOARD_NAME

# Create your tests here.

class BoardTestCase(TestCase):

    def setUp(self):
        test_board = Board.objects.create(name=TEST_BOARD_NAME)
        

    def test_board_cannot_have_duplicate_name(self):
        before_board_count = Board.objects.all().count()

        try:
            with transaction.atomic():
                Board.objects.create(name=TEST_BOARD_NAME)
        except:
            pass

        after_board_count = Board.objects.all().count()

        self.assertTrue(after_board_count == before_board_count)