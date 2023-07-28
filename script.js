const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const CloseBtn = document.querySelector("#close-btn");
const themeToggler= document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display='block';
})

//close sidebar
CloseBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})

//change theme
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
 
//fill orders in table
const Orders=[

    {
        productName: 'Ponds Bright Beauty Face Wash', 
        productNumber: '49388', 
        paymentStatus: 'Paid',
        shipping: 'Pending'
    },
    
    {
        productName: 'WOW SKIN SCIENCE Set', 
        productNumber: '78956', 
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    
    {
        productName: 'Rare Beauty Pore Diffusing Primer', 
        productNumber: '49347', 
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    
    {
    productName: 'Fenty Beauty The Pm Essentials', 
    productNumber: '96996', 
    paymentStatus: 'Paid', 
    shipping: 'Delivered'
    },
    
    {
    productName: 'Vitamin C Face Serum By Olay', 
    productNumber: '22821', 
    paymentStatus: 'Paid', 
    shipping: 'Delivered'
    },
    
    {
    productName: 'Maybelline New York Fit Me Foundation', 
    productNumber: '81475', 
    paymentStatus: 'Due', 
    shipping: 'Pending' 
    },
    
    {
    productName: 'Tinted Lip Serum Madhu Rasa', 
    productNumber: '00482', 
    paymentStatus: 'Paid', 
    shipping: 'Delivered'
    }
    ]
Orders.forEach(order =>{
    const tr =document.createElement('tr');
    const trContent = `<td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${order.shipping===
                        'Declined' ? 'danger' : order.shipping=== 'Pending' ? 'warning'
                        : 'primary'}">${order.shipping}</td>
                      <td class="primary">Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

}
)