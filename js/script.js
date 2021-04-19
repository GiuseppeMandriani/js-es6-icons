/*****************
 * ICONS DISPLAY
 ******************/
console.log('Icons Display')

// Refs

const container = document.querySelector('.icons'); //Icon Container




// Fase 1 Stampare le icone a schermo


// icons=array di oggetti(sorgente dati) container=dove metterli
printIcons(icons,container); 

























/********************************
 * FUNCTIONS
 *********************************/

// Funzione per stampare a schermo

function printIcons(icons,container){
    //Markup icone 
    
    let display = ''; // Let perchè si sovrascrive

    icons.forEach((icon) =>{

        const {family,prefix,name} = icon;
        display += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: #333"></i>
            <div class="title">${name}</div>
        </div>`;
    });
    
    //Aggiunta icone al container
    container.innerHTML = display;
    console.log(display);

}