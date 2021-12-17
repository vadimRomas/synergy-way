from rest_framework import status
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from apps.post.models import PostModel
from apps.post.serializers import PostSerializer


class PostListCreateView(ListCreateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class PostRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer


class UserPosts(ListAPIView):
    serializer_class = PostSerializer

    def get(self, request, *args, **kwargs):
        qs = PostModel.objects.all()
        pk = self.request.user
        qs = qs.filter(author_id=pk)
        res = PostSerializer(qs, many=True).data
        return Response(res, status.HTTP_200_OK)


class LikeView(ListCreateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def post(self, request, *args, **kwargs):
        post = PostModel.objects.get(pk=self.kwargs.get("pk"))
        user = self.request.user
        res = post.liked_by.add(user)
        return Response(res, status.HTTP_200_OK)
