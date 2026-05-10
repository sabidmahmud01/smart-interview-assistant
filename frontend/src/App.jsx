import React from 'react'

// App.jsx is the root component — the first thing React renders.
// As we add more pages (Session, Dashboard), we'll add routing here.
// For now, it displays the landing page of the Smart Interview Assistant.

function App() {
  return (
    <div className="app">

      {/* ── Navigation Bar ── */}
      <nav className="navbar">
        <div className="nav-brand">🎙️ Smart Interview Assistant</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Sessions</a>
          <a href="#">Dashboard</a>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <main className="hero">
        <h1>Interview smarter, not harder.</h1>
        <p className="subtitle">
          Record interviews, let AI transcribe and summarize responses,
          and compare all your candidates side-by-side — automatically.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Start New Interview</button>
          <button className="btn-secondary">View Dashboard</button>
        </div>
      </main>

      {/* ── Feature Cards ── */}
      <section className="features">
        <div className="card">
          <div className="card-icon">🎤</div>
          <h3>Dual-Mic Recording</h3>
          <p>Captures the interviewer and interviewee on separate audio tracks for clean transcription.</p>
        </div>
        <div className="card">
          <div className="card-icon">🤖</div>
          <h3>AI Transcription</h3>
          <p>OpenAI Whisper converts speech to text with high accuracy — no manual notes needed.</p>
        </div>
        <div className="card">
          <div className="card-icon">📋</div>
          <h3>Smart Summaries</h3>
          <p>GPT-4 reads the transcript and generates bullet-point summaries mapped to each question.</p>
        </div>
        <div className="card">
          <div className="card-icon">📊</div>
          <h3>Candidate Comparison</h3>
          <p>See all interviewees side-by-side on a dashboard. No more digging through notes.</p>
        </div>
      </section>

    </div>
  )
}

export default App
