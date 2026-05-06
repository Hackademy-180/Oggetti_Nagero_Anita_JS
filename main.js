
// Selfwork Oggetti 1
// Crea un oggetto persona con le seguenti caratteristiche:
// nome
// cognome
// eta'
// un metodo che permetta di presentarti

// Output: "Ciao, sono nome cognome ed ho età anni"


// let persona = {


    
//     anita : "Anita",
//     nagero : "Nagero",
//     eta : 31 ,

//     presentarti : function () {
//         console.log( `Ciao, sono ${anita} ${nagero} ed ho ${eta} anni`);
//     }

// };


// let fine = persona.presentarti();

// OGGETTI: COLLEZIONI DI PROPIETA'; FUNZIONI: BLOCCHI DI CODICE CHE ESEGUONO AZIONI







// ALTRO metodo

//OGGETTO DI FUNZIONE ( CREAZIONE DI TUTTO OGGETTO: NOME DI PERSONA, 
//  PROPIETA': CARATTERISTICHE STATICHE .  ED I SUOI METODI _ DEFINISCO IL METODO: "CHE E' COME 1 FUNZIONE")
let persona = {
    nome: "Anita",
    cognome:"Nagero",
    eta:"31",


//INVECE DI CONSOLE.LOG USERAI IL RETURN ANCHE (metodo, che da la frase_ con return uso : this. ,...)

presentati : function() {
    return `Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni`;
}
};
// salvare risdultato
// bisogno di variabile

let frase = persona.presentati();

//puoi far anche un console.log e se solo preferisci

console.log(frase);





// ARGOMENTI = VALORI;
//  CONCRETI(REALI);
//   CHE USO QUANDO DEVO FARE LAVORARE LA FUNZIONE ; SONO PASSATI ALLA FUNZIONE QUANDO LA METTI IN ESECUZIONE (DATI PASSATI PER FAR SVOLGERE UN AZIONE(CALCOLO O TESTO) IN MANIERA DINAMICO) USA QUESTI COME Input( COME COMBUSTIBILE "ANALOGIA" , ..);

//  PARAMETRI = ("segnaposto");
//  SOLITAMENTI IN JS SONO RINCHIUSI DENTRO ALLE PARENTESI ( E SONO LE VARIABILI (all'interno di 1 funzione, ..)
//     CHE USERO' DENTRO ALLA FUNZIONE.  ) ;

//Nelle Funzioni, salvo variabili se le volessi poi riusare ;