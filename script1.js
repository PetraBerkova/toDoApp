
const task = new Map();
let form = document.querySelector('form')
let row = document.querySelector('.row')



form.addEventListener('submit', function(e){
    e.preventDefault()

row.innerHTML = ''
  let idItem=Math.random();
task.set(`${idItem}`,
    {
    id:idItem,
    taskone:e.target.elements.task0.value,
    klass:'todo'
    } 
);
  console.log(task.size);
task.forEach(function(hodnota,klic){
     
  createElement(hodnota,klic)
})

 e.target.reset()

})



function createElement (one,idPole){
  
let col= document.createElement('div');
col.classList=`col item ${one.klass} ${one.id}`;
col.innerHTML=  `<img class="pin" src="pin.png" alt=""><p class='text'>${one.taskone}</p>`;
let DIV=document.createElement('div');
let btnOk = document.createElement('button');
btnOk.classList=`btn0 btn01`;
btnOk.setAttribute('data-id',`${one.id}`)
btnOk.setAttribute('data-id-pole',`${idPole}`);
btnOk.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
let btnRemove = document.createElement('button');
btnRemove.classList=`btn0 btn02`;
btnRemove.setAttribute('data-id',`${one.id}`);
btnRemove.setAttribute('data-id-pole',`${idPole}`);
btnRemove.textContent='x';
DIV.appendChild(btnOk);
DIV.appendChild(btnRemove)
col.appendChild(DIV)


 row.prepend(col)
registrace(one, DIV)
}



function registrace (ones, DIV){
    let ok = DIV.querySelector('.btn01');
    let removeb = DIV.querySelector('.btn02');
    
       ok.addEventListener('click', function(event){
           
           let ids =ok.getAttribute('data-id')
          let parent= ok.closest('.col')
          parent.classList.add('active')
            if (ones.id == ids) {
                ones.klass='active'}
                
       })


       
         
           removeb.addEventListener('click',function(){
             let ids = removeb.getAttribute('data-id');
            let parent = removeb.closest('.col');
               parent.remove();
             logMap(task);
             task.delete(`${ids}`);
           })
    }
    
   function logMap(mapa){
     mapa.forEach(function(hodnota,klic){
       console.log('');
       console.log(klic);
       console.log(hodnota);
       console.log('');
     })
   }