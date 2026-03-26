# MDS Dashboard — Server Monitor

Dashboard de monitoring serveur déployé dans le cadre du TP BTS SIO.

## Stack
- **Backend** : Node.js + Express
- **Frontend** : HTML/CSS/JS vanilla
- **Déploiement** : Git + SSH + Systemd

## Installation

```bash
git clone https://github.com/VOTRE-USER/mds-dashboard.git
cd mds-dashboard
npm install
npm start
```

Le serveur écoute sur le port **3000** par défaut.

## API

- `GET /api/status` — Retourne les infos système (hostname, uptime, RAM, CPU)

## Licence

Projet pédagogique — Learni Group
