const nav = document.querySelector('nav');
const ull = nav.querySelector('ul');
const test = document.getElementById('buttonList');
const editareButton = document.querySelector('button.editareFirme');

const firme = document.querySelector('div.container').children;
test.addEventListener('click', (e) => {
    let verificare = document.getElementById('ulInformatii');
    if (window.getComputedStyle(verificare).display === "none") {
        nav.style.height = '370px';
        verificare.style.display = "block";
    } else if (window.getComputedStyle(verificare).display === "block") {
        nav.style.height = '90px';
        verificare.style.display = "none";
    }
});

const adaugaButton = document.querySelector('button.add');
let save = document.querySelector('button.save');
adaugaButton.addEventListener('click', (e) => {
    let meniu = document.querySelector('div.meniuAdauga');
    if (window.getComputedStyle(meniu).display === "none") {
        meniu.style.display = "block";
        adaugaButton.style.display = "none";
        save.style.display = "block";
    }

})
save.addEventListener('click', (e) => {
    let container = document.querySelector('div.container');
    let descriere = document.querySelector('input.descriere');
    let denumire = document.querySelector('input.denumire');
    let adresa = document.querySelector('input.adresa');
    let firma = document.createElement('div');
    let poza = document.createElement('img');
    poza.src = "poze/550x350.png";
    firma.appendChild(poza);
    let pDescriere = document.createElement('p');
    pDescriere.className = "descriere";
    pDescriere.textContent = descriere.value;
    firma.appendChild(pDescriere);

    let h3 = document.createElement('h3');
    h3.textContent = denumire.value;

    firma.appendChild(h3);

    let div = document.createElement('div');
    let pAdresa = document.createElement('p');
    pAdresa.textContent = adresa.value;
    div.appendChild(pAdresa);
    let km = document.createElement('p');
    km.textContent = '200km';
    div.appendChild(km);
    div.className = 'adresa';
    firma.appendChild(div);

    firma.className = 'firma';

    let programeaza = document.createElement('button');
    programeaza.className = 'programeaza';
    programeaza.textContent = 'Programeaza';
    let editeaza = document.createElement('button');
    editeaza.className = 'editeaza';
    editeaza.textContent = 'editeaza';
    let divv = document.createElement('divv');

    divv.className = 'buttoane';
    divv.appendChild(programeaza);
    divv.appendChild(editeaza);
    firma.appendChild(divv);
    console.log(firma);
    container.appendChild(firma);

    save.style.display = "none";
    adaugaButton.style.display = "block";
    let meniu = document.querySelector('div.meniuAdauga');
    meniu.style.display = "none";
})

editareButton.addEventListener('click', (e) => {

    let removeFirma = document.querySelector('button.delete');

    if (window.getComputedStyle(removeFirma).display === "none") {
        removeFirma.style.display = "block";
        editareButton.textContent = "save";
        for (let i = 0; i < firme.length; i++) {
            let button = firme[i].querySelector('button.delete');
            button.style.display = 'block';
        }

    } else if (window.getComputedStyle(removeFirma).display === 'block') {
        removeFirma.style.display = "none";
        editareButton.textContent = "Editare";
        for (let i = 0; i < firme.length; i++) {
            let button = firme[i].querySelector('button.delete');
            button.style.display = 'none';
        }
    } else if (removeFirma === 'null') {
        editareButton.textContent = "Editare";
    }
});
const deleteFirma = document.getElementsByClassName('delete');
for (let i = 0; i < firme.length; i++) {
    firme[i].querySelector('button.delete').addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.className == 'delete') {
                let firma = e.target.parentNode;
                let container = firma.parentNode;
                container.removeChild(firma);
            }
        }

    })
}