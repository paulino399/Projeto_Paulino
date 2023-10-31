const btns = [
    {
      id: 1,
      name: 'Mobiles'
    },
    {
      id: 2,
      name: 'Watches'
    },
    {
      id: 3,
      name: 'Cameras'
    },
    {
      id: 4,
      name: 'Laptops'
    },
    {
      id: 5,
      name: 'Air Pods'
    }
  ];
  
  const filters = [...new Set(btns.map((btn) => btn.id))];
  
  document.getElementById('btns').innerHTML = filters
    .map((id) => {
      const btn = btns.find((btn) => btn.id === id);
      return `<button class='fil-p' onclick='filterItems(${btn.id})'>${btn.name}</button>`;
    }).join('');
  
    const product = [
        {
            id: 1,
            image: 'Imagem/gamer.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },
        {
            id: 5,
            image: 'Imagem/pcasus.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },
        {
            id: 3,
            image: 'Imagem/pcDall.png',
            title: 'Z Flip Foldable  Mobile',
            price: 230,
            category: 'mobile'
        },
        {
            id: 1,
            image: 'Imagem/pcsamsung.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },

        {
            id: 5,
            image: 'Imagem/gamer.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },

        {
            id: 3,
            image: 'Imagem/pcasus.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },

        {
            id: 4,
            image: 'Imagem/gamer.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },
        {
            id: 1,
            image: 'Imagem/pcDall.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },
        {
            id: 3,
            image: 'Imagem/pcsamsung.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },
        {
            id: 5,
            image: 'Imagem/gamer.png',
            title: 'Z Flip Foldable  Mobile',
            price: 120,
            category: 'mobile'
        },
    ];

    