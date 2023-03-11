//Peppe//
const impianti = [];
const impiantiId = [];

fetch("/impianti.json")
.then(getImpianti)
.then(loadImpianti);

function getImpianti(response){
    return response.json();
};

function loadImpianti(data){
        // for (let i = 0; i < data.impianti.length; i++){
        //     impianti.push(data.impianti[i]);
        //     console.log(data.impianti[i])
        // }
        data.impianti.forEach(function(step,index){
            let id = step.id =`${index}`;
            impianti.push(step);
            setImpianti(id);
        });
};

function setImpianti(id){
    console.log(impianti);
        let target = document.querySelector("#impianti_list");
        let content = document.createElement("div");
        content.innerHTML =
        `<section class="container-fluid my-5 impianti_card">
        <div class="row">
          <div class="col-10">
            <h3>${impianti[id].nome_clt}</h3>
          </div>
          <div class="col-2">
            <h3 class="impianti_orario">
            ${impianti[id].data}
            </h3>
            <br>
            <h3>${impianti[id].orario}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <ul>
              <li>${impianti[id].indirizzo}</li>
              <li>${impianti[id].contatto}</li>
              <li>${impianti[id].codice_olo}</li>
              <li>${impianti[id].gpon}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button type="button" class="btn btn-warning" id="button${id}">Warning</button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-warning">Warning</button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-warning">Warning</button>
          </div>
        </div>
      </section>
`

        target.appendChild(content);
    
};


function setUtente(nome){
    target = document.querySelector("#utente");
    content = document.createElement("a");
    content.innerHTML = `${nome}`
    target.appendChild(content);
}
let target = document.querySelector("#attivo_dati");
console.log(target);
function setAttivo(attivo){
    let tgt_button = document.querySelector("#button0");
        console.log(tgt_button);
        tgt_button.addEventListener("click",attivo);
    
        function attivo(){
                console.log("ciao");
                let target = document.querySelector("#attivo_dati");
                content = document.createElement("div");
                content.innerHTML = `
                                        <span class="block">
                                            Cliente: ${impianti[id].nome_clt}
                                        </span>
                                        <span class="block">
                                            Indirizzo: ${impianti[id].indirizzo}
                                        </span>
                                        <span class="block">
                                            Id Risorsa: ${impianti[id].id_risorsa}
                                        </span>
                                    `;
                target.appendChild(content);
        };
}


setUtente("peppe");
setAttivo();


const utente = {
    nome:`Peppe`,
    admin: true,
};

console.log(impianti);