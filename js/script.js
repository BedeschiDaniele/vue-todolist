// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.

var app = new Vue (
  {
    el: "#root",
    data: {
      list: [
        "Organize photo shoot",
        "Create animation",
        "Update website"
      ],
      message:"",
    },
    methods: {
      addlist: function () {
        this.list.push(this.message);
      },
      removeitem: function (indexitem) {
        this.list.splice(indexitem,1);
      }
    }
  }
);
