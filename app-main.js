

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