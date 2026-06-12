from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Note
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import JsonResponse
import json


# Create your views here.
@login_required
def notes_list(request):
    notes = Note.objects.filter(user=request.user)
    return render(request, 'notes/notes_list.html', {'notes': notes})

@login_required
def note_create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        Note.objects.create(user=request.user, title=title, content=content)
        return redirect('/notes')
    return render(request, 'notes/note_form.html')

@login_required
def note_edit(request, id):
    note = Note.objects.get(id=id)
    if request.method == 'POST':
        note.title = request.POST.get('title')
        note.content = request.POST.get('content')
        note.save()
        return redirect('/notes')
    return render(request, 'notes/note_form.html', {'note': note})

@login_required
def note_delete(request, id):
    note = Note.objects.get(id=id)
    note.delete()
    return redirect('/notes')

@csrf_exempt
def notes_api(request):
    notes = list(Note.objects.values())
    return JsonResponse(notes, safe=False)

@csrf_exempt
def note_create_api(request):
    if request.method == "POST":
        data = json.loads(request.body)

        note = Note.objects.create(
            user_id=1,
            title=data.get("title"),
            content=data.get("content")
        )

        return JsonResponse({
            "message": "Note created",
            "id": note.id
        })

    return JsonResponse({'message': 'Note created'})

@csrf_exempt
def note_delete_api(request, id):
    try:
        note = Note.objects.get(id=id)
        note.delete()

        return JsonResponse({
            "message": "Note deleted"
        })

    except Note.DoesNotExist:
        return JsonResponse({
            "error": "Note not found"
        }, status=404)

@csrf_exempt
def note_detail_api(request, id):
    try:
        note = Note.objects.get(id=id)

        data = {
            "id": note.id,
            "title": note.title,
            "content": note.content,
            "user_id": note.user.id,
            "created_at": note.created_at,
        }

        return JsonResponse(data)

    except Note.DoesNotExist:
        return JsonResponse({"error": "Note not found"}, status=404)

@csrf_exempt
def note_update_api(request, id):
    if request.method == "PUT":
        try:
            note = Note.objects.get(id=id)

            data = json.loads(request.body)

            note.title = data.get("title")
            note.content = data.get("content")
            note.save()

            return JsonResponse({
                "message": "Note updated"
            })

        except Note.DoesNotExist:
            return JsonResponse({
                "error": "Note not found"
            }, status=404)