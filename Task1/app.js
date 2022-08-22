let divs = []
const container = document.querySelector('#results')

document.querySelector('#sorting').addEventListener('change', (element) => {
  const filter = element.currentTarget.value;
  
  getElements()
  sortDivs(filter)

  container.innerHTML = '';
  divs.forEach((div) => {
    container.appendChild(div.conteudo)
  })
})

function getElements(){
  document.querySelectorAll('#results div').forEach((element) => {
    divs.push({
      price: parseInt(element.getAttribute('data-price')),
      conteudo: element
    })
  })
}

function sortDivs(filter){
  divs.sort((a,b) => {
    if (filter == 'ASC'){
      if (a.price < b.price){
        return -1;
      }
      if (a.price > b.price){
        return 1;
      }
    }else{
      if (a.price > b.price){
        return -1;
      }
      if (a.price < b.price){
        return 1;
      }
    }
    return 0;
  })
}