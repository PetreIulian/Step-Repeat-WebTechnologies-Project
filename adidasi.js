const adidasi = [
    { id: 1, nume: "Pantofi sport", descriere: "Pantofi sport confortabili pentru alergare si activitati zilnice.", pret: 250, tip: "sport", disponibil: true },
    { id: 2, nume: "Adidasi casual", descriere: "Adidasi casual pentru plimbari si iesiri in oras.", pret: 200, tip: "casual", disponibil: true },
    { id: 3, nume: "Sandale de vara", descriere: "Sandale usoare si confortabile pentru zilele calduroase de vara.", pret: 150, tip: "vara", disponibil: false }
];

const TIPURI = ["sport", "casual", "vara", "alergare"];

function listeazaNume(lista) {
    return lista.map(a => a.nume);
}

function numaraDisponibili(lista) {
    return lista.filter(a => a.disponibil).length;
}

function cautaDupaNume(lista, text) {
    const textCautat = text.toLowerCase();
    return lista.filter(a => 
        a.nume.toLowerCase().includes(textCautat) || 
        a.descriere.toLowerCase().includes(textCautat)
    );
}

function nextId(lista) {
    return lista.reduce((max, a) => Math.max(max, a.id), 0) + 1;
}

function adaugaAdidas(lista, nume, pret, tip) {
    const numeCurat = nume ? nume.trim() : "";
    
    if (numeCurat === "") {
        console.log("Eroare: Numele nu poate fi gol!");
        return lista;
    }
    
    if (!TIPURI.includes(tip)) {
        console.log("Eroare: Tip invalid:", tip);
        return lista;
    }

    const nou = {
        id: nextId(lista),
        nume: numeCurat,
        descriere: "Descriere noua pentru " + numeCurat,
        pret: pret || 200,
        tip: tip,
        disponibil: true
    };

    return [...lista, nou];
}

function comutaDisponibil(lista, id) {
    return lista.map(a => 
        a.id === id ? { ...a, disponibil: !a.disponibil } : a
    );
}

function stergeAdidas(lista, id) {
    return lista.filter(a => a.id !== id);
}


console.log("--- Citire ---");
console.log("Nume:", listeazaNume(adidasi).join(", "));
console.log("Disponibili:", numaraDisponibili(adidasi));
console.log("Căutare 'sport':", listeazaNume(cautaDupaNume(adidasi, "sport")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaAdidas(adidasi, "Adidasi de alergare", 300, "alergare");
console.log("Lista nouă:", listaNoua.length, "produse");
console.log("Originalul a rămas cu:", adidasi.length, "produse");

console.log("--- Modificare și ștergere ---");
let listaModificata = comutaDisponibil(listaNoua, 1);
console.log("După modificarea stării id 1, disponibili:", numaraDisponibili(listaModificata));

let listaFinala = stergeAdidas(listaModificata, 3);
console.log("După ștergerea id 3:", listeazaNume(listaFinala).join(", "));

console.log("--- Validare ---");
adaugaAdidas(listaFinala, "", 250, "sport");
adaugaAdidas(listaFinala, "Adidasi special", 220, "necunoscut");