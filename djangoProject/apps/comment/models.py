from django.contrib.auth import get_user_model
from django.db import models


from apps.post.models import PostModel


class CommentModel(models.Model):
    class Meta:
        db_table = "comments"

    content = models.CharField(max_length=5000)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    post = models.ForeignKey(PostModel(), on_delete=models.CASCADE, related_name="post")
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="user"
    )
