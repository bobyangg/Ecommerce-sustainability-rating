from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Company
from .serializers import CompanySerializer

class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer