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
            setAttivo(id);
        });
};

function setImpianti(id){
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
function setAttivo(id){
    console.log(impianti);
    let button = document.querySelector(`#button${id}`)
    console.log(button);
    button.addEventListener("click",function(){
        let target = document.querySelector("#attivo_dati");
        let content = document.createElement("div");
        content.innerHTML = `<section class="container">
        <div class="row">
          <ul class="impianti_card">
            <li class="ms-5">${impianti[id].codice_olo}</li>
            <li class="ms-5">${impianti[id].contatto}</li>
            <li class="ms-5">${impianti[id].id_risorsa}</li>
          </ul>
        </div>
      </section>`
        target.appendChild(content);
    })
}


setUtente("peppe");


const utente = {
    nome:`Peppe`,
    admin: true,
};

console.log(impianti);