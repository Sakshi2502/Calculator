let string ="";

let mrc=0;
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='M+')
        {
           let x=Number( document.querySelector('input').value);
           mrc+=x;

        }
        else if(e.target.innerHTML=='M-')
        {
            let y=Number( document.querySelector('input').value);
            mrc-=y;
        }
        else if(e.target.innerHTML=='MRC')
        {
            document.querySelector('input').value=mrc;
        }
        else if(e.target.innerHTML=='C'){
            string ="";
            document.querySelector('input').value=string;

        }
        else{
            let s=e.target.innerHTML;
            if(s=='X')
            {
             s='*';
            }
         string=string +s;
         document.querySelector('input').value=string;
      }
    })
})
