import {getCurrentUser} from "./auth.js";


/*
export function clearForm(){

 //document.getElementById("title").value="";
 document
.getElementById("formCard")
.reset();

}
*/

export function clearForm(){

   document.getElementById("credentialType").value = "";

   document.getElementById("title").value = "";

   document.getElementById("issuer").value = "";

   document.getElementById("issueDate").value = "";

   document.getElementById("expirationDate").value = "";

   document.getElementById("notes").value = "";

   document.getElementById("attachment").value = "";

}

export function showUser(user){
	
   
   const formCard =
      document.getElementById("formCard");
    const jobForm = 
	   document.getElementById("jobForm");
	const formPublications =
		document.getElementById("formPublications");

   const userBox =
      document.getElementById("userBox");

   const credentialsList =
      document.getElementById("credentialsList");
	const publicatiosList =
      document.getElementById("publicationsList");
	const jobsList =
      document.getElementById("jobsList");	

   if(user){
		
      formCard.style.display = "block";
	  jobForm.style.display = "block"; 
	  formPublications.style.dispay = "block" ; 

      userBox.innerHTML = `
         <b>${user.displayName}</b>
         <br>
         ${user.email}
      `;

   }
   else{

      formCard.style.display = "none";
	  jobForm.style.display = "none"; 
	  formPublications.style.dispay = "none" ; 

      userBox.innerHTML =
         "Δεν υπάρχει σύνδεση";
		 
      credentialsList.innerHTML = "";
	  publicationsList.innerHTML = "";
	  jobsList.innerHTML = "";  	
   }

}