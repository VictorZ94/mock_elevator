from rest_framework.serializers import ModelSerializer
from api.models import Floor


class FloorSerializer(ModelSerializer):
    class Meta:
        model = Floor
        exclude = ["created_at", "id"]
