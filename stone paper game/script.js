let h = document.querySelector("button");


h.style.backgroundColor = "white";
h.style.fontStyle = "italic";
h.style.color = "red";

let o = document.querySelector(".sh");
o.style.bordercolor = "red";

// o.style.borderStyle = "groove";

let yrsc=0;
let opsc=0;

const getcomsc=()=>{
   const compsc= ["rock","paper","scissors"];
   const ra = Math.floor(Math.random()*3);
   return compsc[ra];
};

let newval=0;
let newcval=0;

const playgame=(choice)=>{
  console.log("user choiv=ce ", choice);
  //playgame(getcomsc);
  const compchoice=getcomsc();
  console.log("computer choice", compchoice);
// playgame(getcomsc());
 
  if(choice===compchoice ){
    
    alert("its a tie");
    console.log("it was a tie");
    //ale();
compchoice
  };
  if(choice==="rock" && compchoice==="scissors" || choice==="paper" && compchoice==="rock" || choice==="scissors" && compchoice==="paper" ){
    alert("you win"); 
    console.log("you win");
    newval=newval+1;

  };
  if( choice==="rock" && compchoice==="paper" || choice==="paper" && compchoice==="scissors" ||choice==="scissors" && compchoice==="rock"){
    alert("you lose");
    console.log("you lose");
    newcval=newcval+1;
  } ;  
  let paragraphElement = document.getElementById("sc1");
  paragraphElement.textContent = newval;

  let paragraphElement2 = document.getElementById("sc2");
  paragraphElement2.textContent = newcval ;
  
}

let m = document.querySelectorAll(".sh");
m.forEach((sh) => {
  //console.log(sh);
  sh.addEventListener("click",()=>{
    console.log("hello");
    //alert("hi");
    const choice=sh.getAttribute("id");
    console.log("the id of this is" , choice);
    playgame(choice);
    //playgame(getcomsc());
    
  })
});
const choice=sh.getAttribute("id");
let chcm=choice;
const compchoice=getcomsc();
let cm=compchoice;
let upysc=document.querySelector("#sc1");    /// to uptade the your score
let upcsc=document.querySelector("#sc2");    /// to uptade the computer score

 /* let paragraphElement = document.getElementById("sc1");
paragraphElement.textContent = newval;

let paragraphElement2 = document.getElementById("sc2");
paragraphElement2.textContent = newcval ;


*/ 
// let updateysc=(sc)=>{              
// for your score

  





/*
let a=document.querySelector("#g1");
a.onclick=()=>{
  alert("clicked");
}
let b=document.querySelector("#g2");
b.onclick=()=>{
  alert("clicked");
}
let c=document.querySelector("#g3");
c.onclick=()=>{
  alert("clicked");
}

let n=document.querySelector("div");
n.addEventListener("onclick",()=>{
  alert("button clicked");
};




*/