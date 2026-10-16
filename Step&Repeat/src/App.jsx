import { useState } from 'react'
import './App.css'

const adidasi = [
    { id: 1, nume: "Pantofi sport", descriere: "Pantofi sport confortabili pentru alergare si activitati zilnice.", pret: 250, tip: "sport", disponibil: true },
    { id: 2, nume: "Adidasi casual", descriere: "Adidasi casual pentru plimbari si iesiri in oras.", pret: 200, tip: "casual", disponibil: true },
    { id: 3, nume: "Sandale de vara", descriere: "Sandale usoare si confortabile pentru zilele calduroase de vara.", pret: 150, tip: "vara", disponibil: false }
];

const active = adidasi.filter(adidasi=> adidasi.disponibil === true);

function App() {
  return (
    <>
      <header class="header">
            <h1 class="title">Step & Repeat</h1>
            <p class="subtitle">Un pas inainte este posibil doar atunci cand te simti confortabil</p>
            <p className="app-count">
              {active.length} adidasi disponibili
            </p>
          </header>
      <main className="container">
        <section className="panel">
          <h2>Task-urile mele</h2>
          <pre>{JSON.stringify(adidasi, null, 2)}</pre>
        </section>
      </main>
    </>
  )
}

export default App
