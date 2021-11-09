from django.urls import path, include
from rest_framework import urlpatterns
from rest_framework.routers import DefaultRouter
from diary_app.views import TopicViewSet, EntryViewSet

router = DefaultRouter()
router.register('topics', TopicViewSet, basename='topic')
router.register('entries', EntryViewSet, basename='entry')

urlpatterns = [
    path('', include(router.urls)),
]