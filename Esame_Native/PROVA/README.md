# React Native

Luca: Esame_React-Native

Questo progetto è un'applicazione realizzata con Native. Di seguito sono riportate le istruzioni per l'installazione, la configurazione e l'esecuzione del progetto.

Prerequisiti

Per eseguire correttamente il progetto, è necessario avere installato i seguenti strumenti sul proprio computer:

- [Node.js](https://nodejs.org/) (versione 14.x o superiore)
- [npm](https://www.npmjs.com/) (di solito viene installato automaticamente con Node.js)

Installazione:

1. Clona il repository sulla tua macchina locale:

   bash
   git clone https://github.com/elite-23/Esame_React.git
   

2. Naviga nella cartella del progetto frontend:

   bash
   cd Esame_React/Esame
   

3. Installa le dipendenze frontend utilizzando npm:

   bash
   npm install
   
Questo comando installerà tutte le librerie necessarie per il funzionamento del frontend, come quelle relative a React.

Esecuzione:

   bash
   npm run web


Questo avvierà il server, ed aprirà la pagina automaticamente


Il progetto consiste di una pagina web dalla quale è possibile inviare query ad un database e visualizzare la risposta in una tabella.
In caso la conessione al database sia assente il backend utilizzerà il file mock_data.json così da simulare la chiamata al server,
ma  verà nascosta la possibilità di aggiungere clausole WHERE la quale viene automaticamente riaggiunta nel momento in cui il backend riesce a ricollegarsi 
al database.

Licenza

Questo progetto è sotto licenza [MIT](LICENSE).