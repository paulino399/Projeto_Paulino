constbtns=[
{
    id: 1,
    name: 'Mobiles'
},
{
    id: 2,
    name:'Watches'
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
},
]

const filters = [...new Set(btns.map((btn)=>
            {return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)={
    var {name, id} = btn;
})