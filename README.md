# Progetto Angular - COVID-19 USA Dashboard

## Descrizione

Questa applicazione è sviluppata con Angular 20+ e permette di visualizzare i dati relativi al COVID-19 negli Stati Uniti, consultare le statistiche per ogni stato e cercare informazioni specifiche tramite una barra di ricerca.
L’app utilizza componenti standalone, routing e lazy loading per ottimizzare il caricamento e migliorare l’esperienza utente.
I dati vengono recuperati tramite API pubbliche dedicate al monitoraggio del COVID-19: https://api.covidtracking.com/v1

## Funzionalità principali

1. Dashboard principale con statistiche totali USA
2. Top 5 stati con il maggior numero di casi
3. Barra di ricerca per filtrare gli stati
4. Ordinamento dinamico per: Casi - Morti - Ospedalizzazioni - Ordine alfabetico
5. Pagina di dettaglio per ogni stato
6. Salvataggio preferenze di ordinamento tramite LocalStorage
7. Design responsive per desktop e mobile
8. SPA con navigazione fluida

## Librerie & Tecnologie Usate

- Angular 20.1.3 (generato con Angular CLI)
- TypeScript
- Angular HTTP Client (comunicazione con API)
- Angular Router (gestione della navigazione tra pagine)
- Angular Material (componenti UI)
- RxJS (gestione di Observable e operazioni asincrone)
- TypeScript, HTML, CSS per frontend
- Tailwind CSS

## **Come configurare e avviare l’app in locale**

Per eseguire il progetto localmente, segui questi passi:

`git clone https://github.com/leti74/covid-dashboard-angular.git`
`cd progetto-angular`
`npm install`
`ng serve`

Apri il browser a:

http://localhost:4200/

L’app si ricaricherà automaticamente ad ogni modifica del sorgente.
GitHub

Per build di produzione:

`ng build`

Per generare nuovi componenti / moduli / servizi (scaffolding Angular CLI):

`ng generate component nome-componente`
`ng generate service nome-servizio`

## Deploy su Firebase Hosting (Free plan)

1. Inizializzare Firebase nel progetto (se non già fatto):
   firebase init

- Selezionare Hosting: Set up deployments for static web apps
- Impostare la cartella pubblica su `dist/progetto-covid19`
- Configurare come Single Page App (rewrite tutte le URL a `index.html`)
- Non configurare GitHub Action (opzionale)

2. Effettuare il deploy:
   firebase deploy --only hosting

Dopo il deploy, il link Firebase mostrerà l’app Angular.

## link Firebase

https://progetto-covid19-2026.web.app
