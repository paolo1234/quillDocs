# 📄 quillDocs

**Editor di documenti collaborativo in tempo reale** — React + Quill.js + Socket.io

## Cos'è

quillDocs è un'applicazione web per la creazione e modifica di documenti in tempo reale. Permette a più utenti di collaborare sullo stesso documento simultaneamente, con modifiche sincronizzate istantaneamente.

## Tecnologie

| Frontend | Backend |
|---|---|
| **React 17** | **quillDocsServer** (Node.js + Socket.io + MongoDB) |
| **Quill.js** — editor rich text | Documenti salvati su MongoDB |
| **Socket.io-client** — real-time | WebSocket per sincronizzazione |
| **React Router** — navigazione | API RESTful |
| **UUID** — identificazione documenti | |

## Come funziona

1. Apri l'app e crea un nuovo documento
2. Inizia a scrivere — ogni modifica viene inviata al server via WebSocket
3. Altri utenti possono unirsi allo stesso documento (stesso ID)
4. Le modifiche si sincronizzano in tempo reale tra tutti i partecipanti

## Setup

### Prerequisiti
- Node.js 14+
- MongoDB (in esecuzione su `localhost:27017`)

### Installazione

```bash
# Frontend (questo repo)
npm install
npm start
# L'app parte su http://localhost:3000

# Backend (quillDocsServer)
cd ../quillDocsServer
npm install
npm start
# Il server parte su http://localhost:3001
```

## Struttura

```
quillDocs/
├── public/           # Asset statici
├── src/              # Codice React
│   ├── components/   # Componenti UI
│   ├── pages/        # Pagine (documento, home)
│   └── App.js        # Entry point con router
├── package.json      # Dipendenze
└── README.md         # Questo file
```

## Stato

📦 **Completato** — progetto funzionante, sviluppato come esercizio su webSocket e collaborazione real-time.
