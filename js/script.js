/*****************
 * ICONS DISPLAY
 ******************/
console.log('Icons Display')

// Refs

const container = document.querySelector('.icons'); //Icon Container

const select = document.querySelector('#type'); // Selettore select




// Fase 1 Stampare le icone a schermo


// icons=array di oggetti(sorgente dati) container=dove metterli

// printIcons(icons,container); 



// Fase 2 Stampare icone colorate in base al tipo

const coloredIcons = colorIcons(icons,colors);
console.log(coloredIcons);

printIcons(coloredIcons,container);


// Fase 3 Filtrare Icones

// a) Generare select options

const types = getIcon(coloredIcons);

genOptions(types,select);

// b) Filtro allo switch

select.addEventListener('change', () =>{
    console.log(select.value);
    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons,selected);
    printIcons(filteredIcons,container);
});



/********************************
 * FUNCTIONS
 *********************************/


// Funzione per stampare a schermo
/**
 * 
 * @param {*} icons //Array di oggetti
 * @param {*} container //Dove stamparli
 */
function printIcons(icons,container){
    //Markup icone 
    
    let display = ''; // Let perchè si sovrascrive

    icons.forEach((icon) =>{

        const {family,prefix,name,color} = icon;
        display += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`;
    });
    
    //Aggiunta icone al container
    container.innerHTML = display;
    // console.log(display);

};


// Funzione per ritornare icone colorate in base al tipo
/**
 * 
 * @param {*} icons //Array di oggetti
 * @param {*} colors // Array dei colori
 * @returns // Nuovo Array con aggiunta dei colori
 */
function colorIcons(icons,colors){
    const types = getIcon(icons)
    console.log('Array che contiene i tipi di oggetti: ',types)
    console.log(colors);

    // Assegnare un colore per tipo ad ogni icona

    const coloredIcons = icons.map((icon) =>{
        const indexType = types.indexOf(icon.type); // Mi ritornerà l'indice 0,1 o 2

        // Aggiungo la proprietà color al nuovo array copiando le altre proprietà
        return {
            ...icon,
            color: colors[indexType], // Da array colors prendo l'indice che mi ritornerà
        }
    });

    return coloredIcons;

}



// Funzione per ricavare il tipo senza duplicati
/**
 * 
 * @param {*} icons //Array di oggetti
 * @returns // Array con il tipo 
 */
function getIcon(icons){

    const types =[]; // Array per inserimento del tipo che incontreremo nel loop

    icons.forEach((icon) =>{ // icon = element
        const tipo = icon.type;
        if(! types.includes(tipo)){
            types.push(tipo);
        }
    });

    return types;

}

// Funzione per generare options

function genOptions(types,select){

    // genero options
    let options = '';
    types.forEach((type) =>{
        options +=`<option value="${type}">${type}</option>`;
    
    });

    // Aggiungo e non sovrascrivo quello esistente
    select.innerHTML += options;
};

// Funzione per filtrare icons in base al tipo 

/**
 * 
 * @param {*} coloredIcons //Arrey completi
 * @param {*} selected // Tipo di selezione
 * @returns // Array filtrato in base al tipo di selezione
 */
function filterIcons(coloredIcons,selected){

    if(selected === 'all'){
        return coloredIcons;
    };

    const filtered = coloredIcons.filter((icon) =>{

        return icon.type === selected;
    });

    return filtered;
};



