from rest_framework.viewsets import ModelViewSet
from diary_app.serializers import TopicSerializer, EntrySerializer
from diary_app.models import Topic, Entry

class TopicViewSet(ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    
class EntryViewSet(ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
