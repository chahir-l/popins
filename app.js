class Popin
{

    width = 300;
    height = 300;
    popinClass = 'popin';
    eltOpenClass = 'open-popin';
    eltCloseClass = "close-popin";
    txtClose = "close";

    constructor(infosObject)
    {
        if(typeof infosObject !== "undefined")
         {

            this.popinClass = typeof infosObject.popinClass !== "undefined" ? infosObject.popinClass :  this.popinClass;
            this.eltOpen = typeof infosObject.eltOpen !== "undefined" ? infosObject.popinClass :  this.eltOpenClass;
            this.eltClose = typeof infosObject.eltClose !== "undefined" ? infosObject.popinClass  : this.eltCloseClass;
         }
        console.log(this.eltCloseClass);
        this.createPopin();
        this.popin = document.querySelector( "." + this.popinClass);
        this.eltOpen = document.querySelector( "." + this.eltOpenClass);
        this.eltClose = document.querySelector("." + this.eltCloseClass);
        console.log(this.eltOpen)
        this.eltOpen.addEventListener('click', this.open.bind(this));
        this.eltClose.addEventListener('click', this.close.bind(this));
    }

    close(){ 
       this.popin.style.display = 'none';
    }

    open(){
        this.popin.style.display = 'block';
    }

    createPopin()
    {
        let popin = document.createElement('div');
        let linkClose = document.createElement('a');
        linkClose.setAttribute("class", this.eltCloseClass);
        linkClose.setAttribute("href", "#");
        linkClose.innerText = "close";

        popin.appendChild(linkClose);

        popin.style.width = this.width;
        popin.style.height = this.height;
        popin.classList.add(this.popinClass)
        console.log(popin)
        document.body.appendChild(popin)
    }
}