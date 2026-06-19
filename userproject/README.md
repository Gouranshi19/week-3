# Notes App - Django REST Framework + React

## Project Overview

This is a full-stack Notes Management Application built using Django REST Framework (DRF) and React. The application allows users to register, login using JWT Authentication, and perform CRUD operations on notes.

## Features

* User Registration
* JWT Authentication (Login/Logout)
* Protected Routes
* Create Notes
* View Notes
* Update Notes
* Delete Notes
* Pagination for Notes API
* React Frontend Integration
* Django Admin Panel

## Tech Stack

### Backend

* Python
* Django
* Django REST Framework
* Simple JWT
* SQLite

### Frontend

* React
* Vite
* Axios

## API Endpoints

### Authentication

* POST `/api/register/`
* POST `/api/token/`
* POST `/api/token/refresh/`

### Notes

* GET `/api/notes/`
* POST `/api/notes/`
* GET `/api/notes/<id>/`
* PUT `/api/notes/<id>/`
* DELETE `/api/notes/<id>/`

## Authentication Flow

1. User registers an account.
2. User logs in using username and password.
3. Backend generates Access Token and Refresh Token.
4. Frontend stores tokens in localStorage.
5. Protected APIs are accessed using the Access Token.

## Pagination

Pagination is implemented to efficiently handle large numbers of notes and improve API performance.

## Project Structure

Backend:

* Models
* Serializers
* ViewSets
* JWT Authentication
* Pagination

Frontend:

* Login Page
* Dashboard
* Notes Management
* Protected Routes

## Repository

https://github.com/Gouranshi19/week-3
