from rest_framework.permissions import BasePermission

class IsAuthor(BasePermission):
    message = "error, this is not your application"

    def has_object_permission(self, request, view, obj):        
        if request.user.is_staff or obj.user == request.user:
            return True
        return False