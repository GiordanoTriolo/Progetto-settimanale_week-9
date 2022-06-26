//Premessa per chi correggerà, mi rendo conto che il mio codice non sia esattamente quello che 
//ci si aspetta da un esercizio settimanale, ma questo weekend non ho avuto il modo di dedicarci
//il giusto tempo. Ho recuperato le lezioni e sono riuscito comunque a far funzionare quel poco che ho scritto,
//consapevole del fatto che tutto quello che mi manca è l'inserimento di logica puramente javascript
//e della parte grafica, cose che comunque abbiamo già abbondantemente affrontato in precedenza
//e su cui mi sento abbastanza sicuro. 
//Scusate per questa nota introduttiva, non voglio giustificare il poco tempo che ci ho messo,
//ma solo spiegarvi come mai il codice è così scarno

const costoChiamata: number = 0.20;

class Smartphone{
    private _nomeUser: string;
    private _credito: number; //credito smartphone
    private _minutiChiamata: number; //conto di quanti minuti totali di chiamata abbiamo fatto
    private _numeroChiamate: number; //numero totale di chiamate

    constructor(nomeUser: string, credito: number, minutiChiamata: number, numeroChiamate: number) {
        this._nomeUser = nomeUser;
        this._credito = credito;
        this._minutiChiamata = minutiChiamata;
        this._numeroChiamate = numeroChiamate 
    }

    public ricarica(euroRicarica: number): void{
        this._credito += euroRicarica;
    }
    
    public chiamata(minutiDurata: number): void{
        this._numeroChiamate++;
        this._credito = this._credito - costoChiamata;
        for(let i: number = 1; i <= minutiDurata; i += 1){
            this._credito = +((this._credito - costoChiamata).toFixed(2));
            this._minutiChiamata++;
        }
    };

    public numero404(): number{
        return +((this._credito).toFixed(2));
    };

    public getMinutiChiamate(): number{
        return this._minutiChiamata;
    }

    public getNumeroChiamate(): number{
        return this._numeroChiamate;
    };

    public azzeraChiamate(): void{
        this._numeroChiamate = 0;
        this._minutiChiamata = 0;
    };
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


