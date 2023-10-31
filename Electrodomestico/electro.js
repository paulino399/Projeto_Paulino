const product = [
    {
        id: 1,
        image: '/eletrico/primeira.png',
        title: 'Fogão 4 Bocas',
        price: 120,
        category: 'mobile'
    },
    {
        id: 1,
        image: '/eletrico/tablete.png',
        title: 'Tablet Sumsung',
        price: 120,
        category: 'mobile'
    },
   
    {
        id: 1,
        image: '/eletrico/camerafixa.png',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'

    },
    {
        id: 2,
        image: '/eletrico/mouse.png',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'
    },
    {
        id: 2,
        image: '/eletrico/camerap.png',
        title: 'Z Flip Casquete',
        price: 120,
        category: 'mobile'
    },
    {
        id: 2,
        image: '/eletrico/camera2p.png',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'
    },
    {
        id: 3,
        image: '/eletrico/bt1.png',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'
    },
    {
        id: 3,
        image: '/eletrico/bt2.png',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'
    },
    {
        id: 3,
        image: '/eletrico/bt3.png',
        title: 'Z Flip bola',
        price: 120,
        category: 'mobile'
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

    const displayItem = (items) => {
               document.getElementById('root').innerHTML = items.map((item) =>
                {
                    var {image, title, price} = item;
                    return(
                        `<div class='box'>
                        <div class='img-box'>
                        <img class= 'images' src=${image}></img>
                        </div>
                        <div class ='bottom'>
                       <p>${title}</p>
                       <h2>$ ${price}.00</h2>
                       <button>Adicionar no carrinho</button>
                       </div>
                       </div>`)

                    }).join('');
    };

    const flterFirstCtegories = categories.filter(item);
    function item(value){
        if(value.id==1){
            return(
                value.id
            )

        }
    }

    displayItem(flterFirstCtegories)

    const btns=[
        {
            id: 1,
            name: '<<'
        },
        {
            id: 1,
            name: '1'
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3'
        },
        {
            id: 3,
            name: '>>',
        },
    ]

    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]

        document.getElementById('btns').innerHTML = filters.map((btn) =>
        {
            var {name, id} = btn;
            return(
                "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
        }).join('');

 const filterItems = (a)=>{
         const flterFirstCtegories =categories.filter(item);
          function item(value){
               if(value.id==a){
                return(
                    value.id
                )
               }
          }
        displayItem(flterFirstCtegories)
 }
                

        

