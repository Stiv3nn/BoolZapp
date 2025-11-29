// #OPERAZIONI DI PREPARAZIONE

// 1 --> Recupero gli elementi di interesse dalla pagina
const input = document.querySelector('input');
const button = document.querySelector('button');
const chatBox = document.querySelector('.chat-box');

// 2 --> Preparazione dei messaggi iniziali - un array di oggetti (lista di oggetti)
const messages = [

    {
        type: 'sent',
        text: 'Ciao come va?',
        time: '24/11/25 20:04:12'
    },
    {
        type: 'received',
        text: 'Bene tu?',
        time: '24/11/25 20:20:15'
    }

];

// #OPERAZIONI DI AVVIO PAGINA

// 3 --> Svuoto la chat tramite innerHTML che è uguale a ''
chatBox.innerHTML = '';