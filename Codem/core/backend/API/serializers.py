# Rest Framework
from rest_framework import serializers

# Local modules
from backend.models import *

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id', 'name']

class WhyChooseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChoose
        fields = ['title', 'text']

class ExtraParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtraParagraph
        fields = ['text']

class ShortInfoSerializer(serializers.ModelSerializer):
    bgColor = serializers.CharField()

    class Meta:
        model = ShortInfo
        fields = '__all__'

class ProgrammesDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammesData
        fields = ['context']

class ProgrammesSerializer(serializers.ModelSerializer):
    programmesdata_set = ProgrammesDataSerializer(many=True)

    class Meta:
        model = Programmes
        fields = ['title', 'programmesdata_set']

class ScholarshipsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScholarshipsData
        fields = ['context']

class ScholarshipsSerializer(serializers.ModelSerializer):
    programmesdata_set = ScholarshipsDataSerializer(many=True)

    class Meta:
        model = Scholarships
        fields = ['title', 'programmesdata_set']

class RequirementsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementsData
        fields = ['context']

class RequirementsSerializer(serializers.ModelSerializer):
    requirementsdata_set = RequirementsDataSerializer(many=True)

    class Meta:
        model = Requirements
        fields = ['title', 'requirementsdata_set']

class UniversitySerializer(serializers.ModelSerializer):
    why_choose = WhyChooseSerializer(many=True, read_only=True)
    extra_paragraphs = ExtraParagraphSerializer(many=True, read_only=True)
    short_info = ShortInfoSerializer(many=True, read_only=True)

    country = CountrySerializer()

    programme_set = ProgrammesSerializer(many=True)
    scholarship_set = ScholarshipsSerializer(many=True)
    requirement_set = RequirementsSerializer(many=True)

    # class Meta:
    #     model = University
    #     fields = ['id', 'name', 'image', 'yt_video_link', 'country', 'ranking', 'description', 'details_url', 'why_choose', 'extra_paragraphs', 'short_info']

    class Meta:
        model = University
        fields = [
            'id', 'name', 'image', 'yt_video_link', 'country',
            'ranking', 'description', 'details_url',
            'why_choose', 'extra_paragraphs', 'short_info',
            'programme_set', 'scholarship_set', 'requirement_set'
        ]
