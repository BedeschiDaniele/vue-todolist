// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.

var app = new Vue (
  {
    el: "#root",
    data: {
      list: [
        "Comprare il pane",
        "Comprare il latte",
        "Comprare le uova"
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
