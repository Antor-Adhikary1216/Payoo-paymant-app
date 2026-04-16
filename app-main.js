// tranjection data
const tranjectionData = []

// button tag add elemints

document.getElementById("add-mony-btn").addEventListener("click",
    function(elm){
        elm.preventDefault()
        const seletBank = document.getElementById("selet-bank").value
        const accountNumber = document.getElementById("account-number").value
        const addMony = parseInt(document.getElementById("withdraw").value) 
        const pinNumber = document.getElementById("pin-number").value
            const  abelavelBalince = parseInt(document.getElementById("abelavel-balince").innerText);
        

            const totalBalince = addMony + abelavelBalince;
            document.getElementById("abelavel-balince").innerText= totalBalince;

            // darta
            const data = {
              name:"Add money",
              date: new Date().toLocaleTimeString(),

            }
            tranjectionData.push(data)
            console.log(tranjectionData)   
    }
)

document.getElementById("tarmjection-btn").addEventListener("click",function(){
  const tranjectionCard = document.getElementById("card-tranject")
  for(const Data of tranjectionData){
    const div = document.createElement("div")
    div.innerHTML`
   <div class="w-[400px] h-[70px] bg-white border-2 border-gray-100 shadow-md rounded-2xl p-3 flex justify-between">
          <div class="flex items-center">
            <div class=" p-3 rounded-full bg-gray-200">
              <img src="assets/wallet1.png" class="mx-auto w-[23px] h-[23px]">
            </div>
           <div class="p-1 ml-1.5">
             <p class="font-semibold text-[16px] text-[#08080880]">${data.name}</p>
             <p class="text-[12px] text-[#08080880] ">${data.date}</p>
           </div>
          </div>
          <i class="fa-solid fa-ellipsis rotate-90 w-[25px] h-[25px] mt-1.5 text-[#08080880] "></i>
        </div>


    `


    tranjectionCard.appendChild(div);
  }
})

// withdraw Button function 
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("withrolw button is working")
    const amountValue =parseInt( document.getElementById("amount-value").value);
    const abelaveLBalince = parseInt(document.getElementById("abelavel-balince").innerText);
   const totalMinace =  abelaveLBalince- amountValue;
   document.getElementById("abelavel-balince").innerText = totalMinace;

   const data = {
              name:"Withdrawal",
              date: new Date().toLocaleTimeString(),

            }
            tranjectionData.push(data)
          

})

// MoneyTransfer button function 
document.getElementById("send-btn-click").addEventListener("click",function(e){
e.preventDefault()
  // console.log("send money")
  const abavelBlanceToPay = parseInt( document.getElementById("abelavel-balince").innerText);
  const amounT = parseInt(document.getElementById("amount-to-pay").value);
  const totalValue = abavelBlanceToPay - amounT;
  document.getElementById("abelavel-balince").innerText = totalValue;

  const data = {
              name:"Send money",
              date: new Date().toLocaleTimeString(),

            }
            tranjectionData.push(data)
          
 
})
// Pay Bill button Function ====><======>
  document.getElementById("pay-bill").addEventListener("click",function(e){
    e.preventDefault();
    const payBillAmont = parseInt(document.getElementById("pay-bill-amount").value);
    const abelaveLBalince = parseInt( document.getElementById("abelavel-balince").innerText);
    const totalBillpy = abelaveLBalince - payBillAmont;
    document.getElementById("abelavel-balince").innerText = totalBillpy;

    const data = {
              name:"Pay billing",
              date: new Date().toLocaleTimeString(),

            }
            tranjectionData.push(data)
          

 } )




// toggling function here <========>
  // add money toggoling===>
     document.getElementById("add-money").addEventListener("click",
    function(){
      document.getElementById("cash-out-parente-div").style.display = "none"
       document.getElementById("transfer-money-parent-div").style.display = "none"
       document.getElementById("get-bouns-main-div").style.display = "none"
       document.getElementById("tranjections-main-div").style.display = "none"
      document.getElementById("add-money-prente-div").style.display  = "block"

      
      const addMonyBtn = document.getElementsByClassName("from-btn")
      for (const btn of addMonyBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-400")
      }

      document.getElementById("add-money").classList.remove("border-gray-400")
      document.getElementById("add-money").classList.add("border-[#0874f2]","bg-[#0874f20d]")
      


      

    }

  )
  // cash out toggoling===>
  document.getElementById("cash-out").addEventListener("click",function(){
    document.getElementById("add-money-prente-div").style.display = "none";
     document.getElementById("transfer-money-parent-div").style.display = "none"
      document.getElementById("main-Pay-bill-div").style.display = "none"
        document.getElementById("get-bouns-main-div").style.display = "none"
        document.getElementById("tranjections-main-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display= "block";

    // btn function 

const cashBtn = document.getElementsByClassName("from-btn")
for( const btn of cashBtn){
  btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
   btn.classList.add("border-gray-400")

}
document.getElementById("cash-out").classList.remove("border-gray-400")
  document.getElementById("cash-out").classList.add("border-[#0874f2]","bg-[#0874f20d]")
  
  })
// Money-transfer toggoling===>
  document.getElementById("Money-transfer").addEventListener("click",function(){
    document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
     document.getElementById("main-Pay-bill-div").style.display = "none"
       document.getElementById("get-bouns-main-div").style.display = "none"
       document.getElementById("tranjections-main-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "block"
    // btn function 
    const tranfer = document.getElementsByClassName("from-btn")
    for(const btn of tranfer){
      btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
      btn.classList.add("border-gray-400")
    }
    document.getElementById("Money-transfer").classList.remove("border-gray-400")
    document.getElementById("Money-transfer").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    

  })
// bills toggoling===>
  document.getElementById("pay-bills-div").addEventListener("click",function(){
     document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "none"
      document.getElementById("get-bouns-main-div").style.display = "none"
      document.getElementById("tranjections-main-div").style.display = "none"
    document.getElementById("main-Pay-bill-div").style.display = "block"
    // btn function 
    const pyBills  = document.getElementsByClassName("from-btn")
    for(const btn of pyBills){
      btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
      btn.classList.add("border-gray-400")
    }
    document.getElementById("pay-bills-div").classList.remove("border-gray-400")
    document.getElementById("pay-bills-div").classList.add("border-[#0874f2]","bg-[#0874f20d]")


  })
  // get bouns  toggoling===>

  document.getElementById("get-bouns").addEventListener("click",function(){
      document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "none"
    document.getElementById("main-Pay-bill-div").style.display = "none"
    document.getElementById("tranjections-main-div").style.display = "none"
    document.getElementById("get-bouns-main-div").style.display = "block"
    // btn Function 
    const getBonus = document.getElementsByClassName("from-btn")
    for(const btn of getBonus){
      btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
      btn.classList.add("border-gray-400")
    }
    document.getElementById("get-bouns").classList.remove("border-gray-400")
    document.getElementById("get-bouns").classList.add("border-[#0874f2]","bg-[#0874f20d]")
  })

  // tranjection toggling Function here<=====>
    document.getElementById("tarmjection-btn").addEventListener("click",function(){
      document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "none"
    document.getElementById("main-Pay-bill-div").style.display = "none"
    document.getElementById("get-bouns-main-div").style.display = "none"
    document.getElementById("tranjections-main-div").style.display = "block"

     // toggling btn 
    const tranjecBtns = document.getElementsByClassName("from-btn")
    for(const btn of tranjecBtns){
      btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
      btn.classList.add("border-gray-400")
    }

    document.getElementById("tarmjection-btn").classList.add("border-[#0874f2]","bg-[#0874f20d]")
    document.getElementById("tarmjection-btn").classList.remove("border-gray-400")
    

    })
   
    


// toggling functin over here>======<