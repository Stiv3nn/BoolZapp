// OPERAZIONI DI PREPARAZIONE

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

// OPERAZIONI DI AVVIO PAGINA

// 3 --> Svuoto la chat tramite innerHTML che è uguale a ''
chatBox.innerHTML = '';

// 4 --> Per ciascuno dei messaggi.....(ciclo for of)
for (const message of messages) { // per ognuno dei messaggi creami una variabile messaggio
    chatBox.innerHTML += `
    <div class="chat-row ${message.type}">
            <div class="chat-message">
                <p>${message.text}</p>
                <time datetime="${message.time}">
                    ${message.time}
                </time>
            </div>
        </div>
    `
}

// OPERAZIONE DI INTERAZIONE CON L'UTENTE

// 5 --> al click del button fai qualcosa, invia. - come? trmaite gli eventi di javascript
button.addEventListener('click', function () {

    // 6 --> recupero il testo inserito dall'utente - come faccio? grazie a ".value" - che serve trim? serve a eliminare gli psazi inutili
    const insertedText = input.value.trim();

    // 7 --> creo un nuovo messaggio
    const newMessage = {
        type: 'sent',
        text: insertedText,
        time: new Date().toLocaleDateString()
    }

    // 8 --> controllare che non sia vuoto
    // se non c'è testo, annulla tutto (istruzioni condizionali)
    if (insertedText === '') return

    // 9 --> aggiungo questo messaggio alla fine della lista (array) dei messages
    messages.push(newMessage);

    // 3 --> Svuoto la chat tramite innerHTML che è uguale a ''
    chatBox.innerHTML = '';

    // 4 --> Per ciascuno dei messaggi.....(ciclo for of)
    for (const message of messages) { // per ognuno dei messaggi creami una variabile messaggio
        chatBox.innerHTML += `
    <div class="chat-row ${message.type}">
            <div class="chat-message">
                <p>${message.text}</p>
                <time datetime="${message.time}">
                    ${message.time}
                </time>
            </div>
        </div>
    `
    }

    // 10 --> svuoto la casella di testo --> input
    input.value = '';
    // 11 --> riporto il focus nella casella di testo dopo l'invio del messaggio
    input.focus();
})

