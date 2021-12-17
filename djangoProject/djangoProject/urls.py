"""djangoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from apps.comment.views import (
    CommentListCreateView,
    CommentRetrieveUpdateDestroyView,
    UserComments,
)
from apps.post.views import (
    PostListCreateView,
    PostRetrieveUpdateDestroyView,
    LikeView,
    UserPosts,
)
from apps.user.views import UserCreateView, UserRetrieveUpdateDestroyView

urlpatterns = [
    path("user/", UserCreateView.as_view(), name="User_Create"),
    path(
        "user/<int:pk>",
        UserRetrieveUpdateDestroyView.as_view(),
        name="User_Retrieve_Update_Delete",
    ),
    path("post/", PostListCreateView.as_view(), name="Post_List_Create"),
    path("like/<int:pk>", LikeView.as_view(), name="Post_Like"),
    path("my/posts/", UserPosts.as_view(), name="Posts_User_Get"),
    path(
        "post/<int:pk>/",
        PostRetrieveUpdateDestroyView.as_view(),
        name="Post_Retrieve_Update_Delete",
    ),
    path(
        "comment/<int:pk>", CommentListCreateView.as_view(), name="Comment_List_Create"
    ),
    path("my/comments/", UserComments.as_view(), name="Comments_User_Get"),
    path(
        "comment/<int:pk>/",
        CommentRetrieveUpdateDestroyView.as_view(),
        name="Comment_Retrieve_Update_Delete",
    ),
    path("login/", TokenObtainPairView.as_view(), name="Login"),
    path("refresh/", TokenRefreshView.as_view(), name="Refresh"),
]
