from rest_framework.serializers import ModelSerializer
from diary_app.models import Topic, Entry

class TopicSerializer(ModelSerializer):
    class Meta:
        model = Topic
        fields = ['id', 'name', 'entries']
        depth = 1
        
class EntrySerializer(ModelSerializer):
    class Meta:
        model = Entry
        fields = '__all__'