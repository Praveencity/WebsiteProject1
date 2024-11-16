document.addEventListener('DOMContentLoaded',()=>{
    let buyButton = document.querySelector(".buy-now");
    buyButton.addEventListener('click',(event)=>{
        event.preventDefault();
        let msg = window.confirm('Are you sure you want to Buy?')
        if(msg){
            window.location.href = 'purchase.html';
        }
    })
})