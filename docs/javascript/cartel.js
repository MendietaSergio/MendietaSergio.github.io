addEventListener('DOMContentLoaded',() =>{
    alert('¡¡Página en Proceso!!')
    const btn_menu = document.querySelector('.btn_menu')
    //si es verdadero, entra en la condicion
    if(btn_menu){
        //cuando haga click sobre btn_menu, se activa el evento
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu_items')
            //Si no tiene la clase show, lo agrega
            menu_items.classList.toggle('show')
        })
    }
})