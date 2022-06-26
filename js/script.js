"use strict";
//Premessa per chi correggerà, mi rendo conto che il mio codice non sia esattamente quello che 
//ci si aspetta da un esercizio settimanale, ma questo weekend non ho avuto il modo di dedicarci
//il giusto tempo. Ho recuperato le lezioni e sono riuscito comunque a far funzionare quel poco che ho scritto,
//consapevole del fatto che tutto quello che mi manca è l'inserimento di logica puramente javascript
//e della parte grafica, cose che comunque abbiamo già abbondantemente affrontato in precedenza
//e su cui mi sento abbastanza sicuro. 
//Scusate per questa nota introduttiva, non voglio giustificare il poco tempo che ci ho messo,
//ma solo spiegarvi come mai il codice è così scarno
const costoChiamata = 0.20;
class Smartphone {
    constructor(nomeUser, credito, minutiChiamata, numeroChiamate) {
        this._nomeUser = nomeUser;
        this._credito = credito;
        this._minutiChiamata = minutiChiamata;
        this._numeroChiamate = numeroChiamate;
    }
    ricarica(euroRicarica) {
        this._credito += euroRicarica;
    }
    chiamata(minutiDurata) {
        this._numeroChiamate++;
        this._credito = this._credito - costoChiamata;
        for (let i = 1; i <= minutiDurata; i += 1) {
            this._credito = +((this._credito - costoChiamata).toFixed(2));
            this._minutiChiamata++;
        }
    }
    ;
    numero404() {
        return +((this._credito).toFixed(2));
    }
    ;
    getMinutiChiamate() {
        return this._minutiChiamata;
    }
    getNumeroChiamate() {
        return this._numeroChiamate;
    }
    ;
    azzeraChiamate() {
        this._numeroChiamate = 0;
        this._minutiChiamata = 0;
    }
    ;
}
//testo tutte le funzioni in console, funzionano a dovere
let user1 = new Smartphone('Mario Rossi', 20, 0, 0);
console.log(user1);
console.log(user1.getNumeroChiamate());
user1.ricarica(5);
console.log(user1.numero404());
user1.chiamata(3);
console.log(user1.numero404());
user1.chiamata(2);
user1.chiamata(1);
user1.chiamata(5);
console.log(user1.numero404());
console.log(user1.getNumeroChiamate());
console.log(user1.getMinutiChiamate());
user1.azzeraChiamate();
console.log(user1.getNumeroChiamate());
console.log(user1.getMinutiChiamate());
//anche user2 funziona
let user2 = new Smartphone('Laura Bianchi', 300, 0, 0);
console.log(user2);
user2.ricarica(30);
console.log(user2.numero404());
