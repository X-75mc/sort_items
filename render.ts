const fetchUrl: string = './items.json'; 
const itemsOnPage: number = 6; 
const ulContainer = document.querySelector('.ulContainer') as HTMLElement;
const containerItems = document.querySelector('.container__sort') as HTMLElement;
const priceChange = document.querySelector('.priceChange') as HTMLSelectElement;
const lowPrice: string = 'low';
const hightPrice: string = 'hight';


interface dataPromise {
    id: number,
    imgItems: string,
    tittle: string,
    discription: string,
    price: number
}

showItems();

async function fetchItems(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as dataPromise[];
}

async function showItems(): Promise<void> {
    let itemsList = await fetchItems(fetchUrl);
    // Display the contents of the first item in the response
    
    
    
   itemsRender(itemsList);
  

}



function itemsRender (itemsList: any){
    const countOfItems: number = Math.ceil(itemsList.length / itemsOnPage);

    
    priceChange.addEventListener('change', function (){
        if (priceChange.value === lowPrice){
            firstPage();
                   
            itemsList.sort(function (a: any, b: any) {
                return a.price - b.price;
                
            });
        }

        
        let firstItems = [...itemsList];
        firstItems.length = 6;
        
        
        
        containerItems.innerHTML = '';
        firstItems.forEach(function (noteOne: any){
            const itemCake: string = `<div class="container__item__sort">
    
                                            <div class="img__div">
    
                                                <img  src="./img/${noteOne.imgItems}" alt="">
    
                                            </div>
    
                                           <div class="tittle__item__sort">
                                               <h2>${noteOne.tittle}</h2>
                                            </div>
    
                                            <div class="discription__item__sort">
                                                <p>${noteOne.discription}</p>
                                            </div>
    
                                            <div class="price__item__sort">
                                                <p>$${noteOne.price}</p>
                                            </div>
    
                                        </div>`;
            containerItems.insertAdjacentHTML('beforeend', itemCake);
          }); 
        

        
        
          if  (priceChange.value === hightPrice){
            containerItems.innerHTML = '';
            
            console.log('no');  
            itemsList.sort(function (a: any, b: any) {
                return b.price - a.price;
            });
        }

        let secondItems = [...itemsList];
        secondItems.length = 6;
        
        
        
        containerItems.innerHTML = '';
        secondItems.forEach(function (noteOne: any){
            const itemCake: string = `<div class="container__item__sort">
    
                                            <div class="img__div">
    
                                                <img  src="./img/${noteOne.imgItems}" alt="">
    
                                            </div>
    
                                           <div class="tittle__item__sort">
                                               <h2>${noteOne.tittle}</h2>
                                            </div>
    
                                            <div class="discription__item__sort">
                                                <p>${noteOne.discription}</p>
                                            </div>
    
                                            <div class="price__item__sort">
                                                <p>$${noteOne.price}</p>
                                            </div>
    
                                        </div>`;
            containerItems.insertAdjacentHTML('beforeend', itemCake);
          }); 
    }); 

    

    function firstPage (){
        
        let firstItems = [...itemsList];
        firstItems.length = 6;
        
        
        
        
        firstItems.forEach(function (noteOne: any){
            const itemCake: string = `<div class="container__item__sort">
    
                                            <div class="img__div">
    
                                                <img  src="./img/${noteOne.imgItems}" alt="">
    
                                            </div>
    
                                           <div class="tittle__item__sort">
                                               <h2>${noteOne.tittle}</h2>
                                            </div>
    
                                            <div class="discription__item__sort">
                                                <p>${noteOne.discription}</p>
                                            </div>
    
                                            <div class="price__item__sort">
                                                <p>$${noteOne.price}</p>
                                            </div>
    
                                        </div>`;
            containerItems.insertAdjacentHTML('beforeend', itemCake);
          }); 
        
    
    } 


    
    for (let i = 1; i <= countOfItems; i++){
        const itemLi: string = `<li class = "LiArr">${i}</li>`;
        ulContainer.insertAdjacentHTML('beforeend', itemLi);
    }

    const paginationButtons = document.querySelectorAll('.LiArr') ;

    paginationButtons.forEach(function (item) {
        item.addEventListener('click', function (){


            let numPagr: number = +item.innerHTML;
            

            let start: number = (numPagr - 1) * itemsOnPage;
            let end: number = start + itemsOnPage;

              let notes = itemsList.slice(start, end); 
              containerItems.innerHTML = '';
              notes.forEach(function (note: any){
                const itemCake: string = `<div class="container__item__sort">

                                                <div class="img__div">

                                                    <img  src="./img/${note.imgItems}" alt="">

                                                </div>

                                                <div class="tittle__item__sort">
                                                    <h2>${note.tittle}</h2>
                                                </div>

                                                <div class="discription__item__sort">
                                                    <p>${note.discription}</p>
                                                </div>

                                                <div class="price__item__sort">
                                                    <p>$${note.price}</p>
                                                </div>

                                            </div>`;
                containerItems.insertAdjacentHTML('beforeend', itemCake);
              }); 
              

    });
               
});
        
 firstPage(); 
}


        
            
    




