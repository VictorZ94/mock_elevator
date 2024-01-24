from rest_framework.viewsets import ModelViewSet

from .models import Floor

# Serializer
from .serializer import FloorSerializer

# Create your views here.


class FloorModelViewSet(ModelViewSet):
    serializer_class = FloorSerializer
    queryset = Floor.objects.all()
    # permission_classes = [IsAuthenticatedOrReadOnly]
