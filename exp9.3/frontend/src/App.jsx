import React, { useEffect, useState } from 'react'
import './index.css'

export default function App(){
  const [message, setMessage] = useState('Loading...')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch('/api/hello')
      .then(r => {
        if(!r.ok) throw new Error('Bad response')
        return r.json()
      })
      .then(d => {
        setMessage(d?.message || 'No message')
        setError(false)
      })
      .catch(() => {
        setMessage('⚠️ Could not reach backend')
        setError(true)
      })
      .finally(()=> setLoading(false))
  },[])

  return (
    <div className="app-shell">
      <div className="card" role="main" aria-live="polite">
        <h1 className="title">🚀 Full Stack App (Vite + Docker)</h1>
        <div className="subtitle">Simple CSS, React (Vite), and Express backend</div>

        <div className="api-box" aria-hidden={loading}>
          {loading ? (
            <>
              Fetching from backend
              <span className="loader" aria-hidden="true"></span>
            </>
          ) : (
            <>{message}</>
          )}
        </div>

        <div>
          <button className="btn" onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>

        <div className="footer">
          Backend: Express • Frontend: React + Vite • Static CSS
          {error ? ' • (offline)' : ''}
        </div>
      </div>
    </div>
  )
}
