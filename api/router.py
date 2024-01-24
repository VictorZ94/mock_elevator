from rest_framework.routers import DefaultRouter
from .views import FloorModelViewSet

router = DefaultRouter()
router.register(prefix='floor', viewset=FloorModelViewSet, basename='floor')
