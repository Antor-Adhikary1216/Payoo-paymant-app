

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




// toggling function here <========>
     document.getElementById("add-money").addEventListener("click",
    function(){
      document.getElementById("cash-out-parente-div").style.display = "none"
       document.getElementById("transfer-money-parent-div").style.display = "none"
       document.getElementById("get-bouns-main-div").style.display = "none"
      document.getElementById("add-money-prente-div").style.display  = "block"
    }
  )
  document.getElementById("cash-out").addEventListener("click",function(){
    document.getElementById("add-money-prente-div").style.display = "none";
     document.getElementById("transfer-money-parent-div").style.display = "none"
      document.getElementById("main-Pay-bill-div").style.display = "none"
        document.getElementById("get-bouns-main-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display= "block";
  })

  document.getElementById("Money-transfer").addEventListener("click",function(){
    document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
     document.getElementById("main-Pay-bill-div").style.display = "none"
       document.getElementById("get-bouns-main-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "block"

  })

  document.getElementById("pay-bills-div").addEventListener("click",function(){
     document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "none"
      document.getElementById("get-bouns-main-div").style.display = "none"
    document.getElementById("main-Pay-bill-div").style.display = "block"

  })

  document.getElementById("get-bouns").addEventListener("click",function(){
      document.getElementById("add-money-prente-div").style.display = "none"
    document.getElementById("cash-out-parente-div").style.display = "none"
    document.getElementById("transfer-money-parent-div").style.display = "none"
    document.getElementById("main-Pay-bill-div").style.display = "none"
    document.getElementById("get-bouns-main-div").style.display = "block"
  })


// toggling functin over here>======<