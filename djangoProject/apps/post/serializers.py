from rest_framework.serializers import ModelSerializer

from apps.post.models import PostModel
from apps.user.serializers import UserSerializer


class PostSerializer(ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = PostModel
        fields = ["id", "author", "create_date", "title", "link", "liked_by"]
        extra_kwargs = {
            "author": {"read_only": True},
            "liked_by": {"read_only": True},
        }
