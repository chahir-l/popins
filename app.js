class Popin
{
    constructor(popinClass, eltOpen, eltClose)
    {
         
        this.popin = document.querySelector(popinClass);
        this.eltOpen = document.querySelector(eltOpen);
        this.eltClose = document.querySelector(eltClose);
   
        this.eltOpen.addEventListener('click', this.open.bind(this));
        this.eltClose.addEventListener('click', this.close.bind(this));
    }

    close(){ 
       this.popin.style.display = 'none';
    }

    open(){
        this.popin.style.display = 'block';
    }

    n
}