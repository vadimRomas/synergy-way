from django.contrib.auth import get_user_model
from django.urls import reverse
from django.test import Client
from rest_framework import status
from rest_framework.test import APITestCase

UserModel = get_user_model()


class UserAPITestCase(APITestCase):
    def test_create(self):
        url = reverse('User_Create')
        data = {'password': 'test', 'username': 'test', 'is_active': True}
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(UserModel.objects.count(), 1)
        self.assertEqual(UserModel.objects.get().username, 'test')

    #
    def test_get(self):
        user = UserModel.objects.create(username='test', is_active=True)
        user.set_password('test')
        user.save()

        login_url = reverse('Login')

        login = self.client.post(login_url, {'username': 'test', 'password': 'test'}, format='json')
        self.assertEqual(login.status_code, status.HTTP_200_OK)

        url = reverse('User_Retrieve_Update_Delete', kwargs={'pk': user.id})
        response = self.client.get(url, **{'HTTP_AUTHORIZATION': f'Bearer {login.data["access"]}'})
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(UserModel.objects.count(), 1)

    def test_delete(self):
        user = UserModel.objects.create(username='test', is_active=True)
        user.set_password('test')
        user.save()

        login_url = reverse('Login')

        login = self.client.post(login_url, {'username': 'test', 'password': 'test'}, format='json')
        self.assertEqual(login.status_code, status.HTTP_200_OK)

        url = reverse('User_Retrieve_Update_Delete', kwargs={'pk': user.id})
        response = self.client.delete(url, **{'HTTP_AUTHORIZATION': f'Bearer {login.data["access"]}'})
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(UserModel.objects.count(), 0)
