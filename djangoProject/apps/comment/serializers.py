from rest_framework.serializers import ModelSerializer

from apps.comment.models import CommentModel


class CommentSerializer(ModelSerializer):
    class Meta:
        model = CommentModel
        fields = ["id", "user", "created", "updated", "post", "content"]
        extra_kwargs = {"user": {"read_only": True}, "post": {"read_only": True}}
