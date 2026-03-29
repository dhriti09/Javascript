let input = documment.getelemntbyID('inputBox');
let buttons = document.querySelectorAll('buttons');//sare buttons variable buttons ke andar de dega



//select krne ke lie*/

//empty string jisme result store krenge 
let string = " ";
//sare button chahiye
//to array use krenge buttons ka
let array = Array.from(buttons);//function le lenge array class hai aur from function
//array pr loop chala skte hai
// arrow function lagaya hai
//yaha pr yeh hai ki button pr koi bhi click krega to kya hoga
// foreach loop array pr lagegi
//we can use callback also
//clicklist ki jagh eventlist lagrrhi 
array.forEach(button =>) {
    button.addEventListerner('click', (e) => {
        //string me value ajani chahiye 
        if (e.target.innerHTML == '=') {//agar equal hai to yeh code chalaenge
            //evaluate inbulild hai jo calculate krke de deta hai
            string = eval(string);
            input.value = string//value me string ki value kos tore kr di gyi hai to input tag medikhegi
            
        }
        string += e.target.innerHTML;
        input.value = string;//jo bhi press krnge wo input me show hota jaega
        //equal bhi dikh rha kyunki usko evauate nhi kiya hai
        
        //now all clear button //sare text ko zero krna hai 
        //string ko emty kr denge
        
    })

}

