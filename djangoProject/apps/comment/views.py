from rest_framework import status
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    ListAPIView,
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from apps.comment.models import CommentModel
from apps.comment.serializers import CommentSerializer
from apps.post.models import PostModel


class CommentListCreateView(ListCreateAPIView):
    queryset = CommentModel.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        pk = self.kwargs.get("pk")
        serializer.save(user=self.request.user, post=PostModel.objects.get(pk=pk))

    def get(self, request, *args, **kwargs):
        qs = CommentModel.objects.all()
        pk = self.kwargs.get("pk")
        qs = qs.filter(post_id=pk)
        res = CommentSerializer(qs, many=True).data
        return Response(res, status.HTTP_200_OK)


class CommentRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = CommentModel.objects.all()
    serializer_class = CommentSerializer


class UserComments(ListAPIView):
    serializer_class = CommentSerializer

    def get(self, request, *args, **kwargs):
        qs = CommentModel.objects.all()
        pk = self.request.user
        qs = qs.filter(user_id=pk)
        res = CommentSerializer(qs, many=True).data
        return Response(res, status.HTTP_200_OK)
