addEventListener('DOMContentLoaded',() =>{
    //alert('¡¡Página en Proceso!!')


    /*MENU DESPLEGABLE*/
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

    /*VALIDACIONES -- FORMULARIO DE CONTACTO*/
    let formulario = document.querySelector('form');
    let inputNombre = formulario.elements[0];
    let inputEmail = formulario.elements[1];
    let inputComentario = formulario.elements[2];

    let regExEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    inputNombre.addEventListener('blur',function(){
        console.log(inputNombre.value.length);
        switch(true){
            case this.value.length===0:
                errorNombre = "Debe ingresar un nombre";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }
    })
    inputEmail.addEventListener('blur',function(){
        console.log(inputEmail.value.length);
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Debe ingresar un mail.";
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML = "Debe ingresar un mail valido."
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }
    })
    inputComentario.addEventListener('blur', function () {
        switch (true) {
            case this.value.length >= 0 && this.value.length <= 20:
                errorComentario.innerHTML = "Debe rellentar este campo, minimo 20 caracteres.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorComentario.innerHTML = "";
                break;
        }
    }),
    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        let error = false
        for (let i = 0; i < 3; i++) {
            if (elementos[i].value == 0) {
                elementos[i].classList.add('is-invalid');
                error = true;
            }
        }
        if (elementos[0].value.length < 4) {
            console.log("entro nombre");
            error = true
            errorNombre.innerHTML = "Tenés que llenar este campo"
            this.classList.add('is-invalid')
        }
        if (elementos[1].value.length < 1) {
            console.log("entro email");
            error = true
            errorEmail.innerHTML = "Tenés que llenar este campo"
            this.classList.add('is-invalid')
        }
        if (elementos[2].value.length < 4) {
            console.log("entro comentario");
            error = true
            errorComentario.innerHTML = "Tenés que poner al menos 10 Caracteres"
            this.classList.add('is-invalid')
        }
        if (!error) {
            /*MUESTO UN sweetAlert */
            Swal.fire({
                title: '¿Quiere eviar este mensaje?',
                icon: '¡advertencia!',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, agregalo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Agregado..!',
                        'Tu archivo ha sido agregado.',
                        'success'
                    )
                        .then(() => {
                            formulario.submit();
                        })
                }
            })
        }
        else {
            errorSubmit.innerHTML = "Los campos señalados son obligatorio."
        }
    })
})