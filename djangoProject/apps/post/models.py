from django.db import models
from django.contrib.auth import get_user_model


# title, link, creation date, amount of upvotes, author-name
class PostModel(models.Model):
    class Meta:
        db_table = "posts"

    title = models.CharField(max_length=255)
    link = models.CharField(max_length=500)
    create_date = models.DateField(auto_now_add=True)
    liked_by = models.ManyToManyField(get_user_model())
    author = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="post"
    )
