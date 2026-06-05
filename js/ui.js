import {getCurrentUser} from "./auth.js";



export function clearForm(){

 document.getElementById("title").value="";

}

export function showUser(user){
	
   
   const formCard =
      document.getElementById("formCard");

   const userBox =
      document.getElementById("userBox");

   const credentialsList =
      document.getElementById("credentialsList");

   if(user){

      formCard.style.display = "block";

      userBox.innerHTML = `
         <b>${user.displayName}</b>
         <br>
         ${user.email}
      `;

   }
   else{

      formCard.style.display = "none";

      userBox.innerHTML =
         "Δεν υπάρχει σύνδεση";

      credentialsList.innerHTML = "";

   }

}