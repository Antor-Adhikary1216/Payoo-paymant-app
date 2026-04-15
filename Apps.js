  document.getElementById("loginBtn").addEventListener("click",function(e){
      e.preventDefault()
      const mobileNom = 8327329913;
      const pinNom = 1234;
      const mobileNumberValue = document.getElementById("mobile-No").value;
      const mobileNumberConvated =   parseInt(mobileNumberValue) ;
      const pinNumberValue = document.getElementById("pin-nomber").value;
      const pinNumberValueConvarted = parseInt( pinNumberValue );
    //   console.log( mobileNumberConvated,pinNumberValueConvarted );

      if(mobileNumberConvated === mobileNom && pinNumberValueConvarted === pinNom){
       window.location.href="./main.html" 
      }
      else{
       alert("user i'd invalid")
      }


  });