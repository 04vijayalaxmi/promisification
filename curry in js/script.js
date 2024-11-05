//function add(a,b,c){
   // return a+b+c;
//}

//console.log(add(2,5,10));

function add(a){
    return function(b)
{
    return function(c){
        return a+b+c;
    };
};
}

//Automated Email

function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending Email to ${to} with subject${subject}:${body}`)
        };
    };
}

constsendAutoemail=to=>(subject)=>(body) =>`Sending Email to ${to} with subject${subject}:${body}`;
let step1=sendAutoEmail("vijayalaxmi.c.r@gmail.com");
let step2=step1('New order conformation');

step2("Hey vijayalaxmi, Here is something for you");

//8106590405   Balvath Reddy, 280