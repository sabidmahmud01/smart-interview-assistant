# Smart Interview Assistant 🎙️

An AI-powered web application that automates the interview process by recording, transcribing, and summarizing candidate responses — so interviewers can focus on the conversation, not on taking notes.

## The Problem

When interviewing 100+ candidates, manually reviewing notes from each session is overwhelming, inconsistent, and time-consuming.

## The Solution

Smart Interview Assistant records each interviewee on a separate audio track, transcribes their responses using AI, and generates a structured bullet-point summary mapped to each interview question. Interviewers get a side-by-side comparison dashboard across all candidates.

## How It Works

1. **Interviewer sets up a session** — types in their questions in advance
2. **Interview is recorded** — two separate microphone tracks (interviewer + interviewee)
3. **AI transcribes the audio** — using OpenAI Whisper
4. **AI summarizes the responses** — using GPT-4, mapped to each question
5. **Dashboard shows all candidates** — side-by-side comparison view

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend (Website) | React |
| Backend (Server) | Python + FastAPI |
| Speech-to-Text | OpenAI Whisper API |
| Summarization | OpenAI GPT-4 API |
| Database + File Storage | Supabase |

## Project Structure

```
smart-interview-assistant/
├── frontend/        # React web application
├── backend/         # Python FastAPI server
└── README.md        # You are here
```

## Roadmap

- [x] Task 1 — Project initialization & folder structure
- [ ] Task 2 — React frontend setup
- [ ] Task 3 — Create Interview Session page (question list)
- [ ] Task 4 — Dual-mic audio recording
- [ ] Task 5 — Python backend server (FastAPI)
- [ ] Task 6 — Whisper API transcription
- [ ] Task 7 — GPT-4 summarization
- [ ] Task 8 — Supabase database & storage
- [ ] Task 9 — Candidate comparison dashboard
- [ ] Task 10 — Final polish & deployment

## Author

**Sabid Mahmud** — [@sabidmahmud01](https://github.com/sabidmahmud01)
