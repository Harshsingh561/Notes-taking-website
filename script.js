let addBtn = document.getElementById('addBtn');
let notes = document.getElementById("notes");
var index2 = 0;
const load = () => {
    let text = document.getElementById("addTxt");
    let local_storage = localStorage.getItem("notes");
    if (local_storage==null){
        values = [];
    }else{
        values = JSON.parse(local_storage);
    }
    values.forEach((element, index) =>{
      if (element!=''){
        const mainHtml = `
    <div class="card" style="width: 18rem; margin:25px;" id="${++index}">
    <div class="card-body">
      <h5 class="card-title">Note-${index}</h5>
      <p class="card-text">${element}</p>
      <button class="btn btn-primary" id="${index-1}" onclick="del(this.id)">Delete</button>
    </div>
  </div>
    `
    notes.insertAdjacentHTML('afterbegin', mainHtml)
    index2=index
    text.value ='';
  }
    })
}
load();

addBtn.addEventListener('click', ()=>{
    let text = document.getElementById("addTxt");
    let local_storage = localStorage.getItem("notes");
    if (local_storage==null){
        values = [];
    }else{
        values=JSON.parse(local_storage)
    }
    if (text.value!=''){
    const mainHtml = `
    <div class="card" style="width: 18rem; margin:25px;" id="${++index2}">
    <div class="card-body">
      <h5 class="card-title">Note-${index2}</h5>
      <p class="card-text">${text.value}</p>
      <button class="btn btn-primary" id="${index2-1}" onclick="del(this.id)">Delete</button>
    </div>
  </div>
    `
    notes.insertAdjacentHTML('afterbegin', mainHtml)
    values.push(text.value);
    localStorage.setItem("notes", JSON.stringify(values));
    text.value ='';
  }
});

const del =(value) => {
  local_storage = localStorage.getItem('notes');
    if (local_storage==null){
      values= [];
    }else{
      values=JSON.parse(local_storage);
      values2 = JSON.parse(local_storage);
    }
    let re = values.splice(value, 1);
    let p_e = document.getElementById(value).parentNode.parentNode;
    p_e.parentNode.removeChild(p_e);
    localStorage.setItem('notes', JSON.stringify(values));
  }

