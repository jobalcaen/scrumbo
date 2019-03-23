from django.test import TestCase
from scrumbo.models import Board, Note
from scrumbo.constants import TEST_BOARD_NAME

# Create your tests here.

class BoardTestCase(TestCase):

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