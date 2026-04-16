

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
          


       
    }
)

// withdraw Button function 
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("withrolw button is working")
    const amountValue =parseInt( document.getElementById("amount-value").value);
    const abelaveLBalince = parseInt(document.getElementById("abelavel-balince").innerText);
   const totalMinace =  abelaveLBalince- amountValue;
   document.getElementById("abelavel-balince").innerText = totalMinace;

})

// MoneyTransfer button function 
document.getElementById("send-btn-click").addEventListener("click",function(e){
e.preventDefault()
  // console.log("send money")
  const abavelBlanceToPay = parseInt( document.getElementById("abelavel-balince").innerText);
  const amounT = parseInt(document.getElementById("amount-to-pay").value);
  const totalValue = abavelBlanceToPay - amounT;
  document.getElementById("abelavel-balince").innerText = totalValue;
 
})
// Pay Bill button Function ====><======>
  document.getElementById("pay-bill").addEventListener("click",function(e){
    e.preventDefault();
    const payBillAmont = parseInt(document.getElementById("pay-bill-amount").value);
    const abelaveLBalince = parseInt( document.getElementById("abelavel-balince").innerText);
    const totalBillpy = abelaveLBalince - payBillAmont;
    document.getElementById("abelavel-balince").innerText = totalBillpy;

 } )




// toggling function here <========>
  // add money toggoling===>
     document.getElementById("add-money").addEventListener("click",
    function(){
      document.getElementById("cash-out-parente-div").style.display = "none"
       document.getElementById("transfer-money-parent-div").style.display = "none"
       document.getElementById("get-bouns-main-div").style.display = "none"
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


// toggling functin over here>======<