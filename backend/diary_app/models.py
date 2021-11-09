from django.db import models
from django.db.models.fields import DateTimeField

class Topic(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.name}"
    
class Entry(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField()
    created_date = models.DateField(auto_now_add=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name="entries")
    
    class Meta:
        ordering = ['-created_date']
    
    def __str__(self):
        return f"{self.name}"
