console.log("APP LOADED");



import {
 login,
 logout,
 initAuth,
 getCurrentUser
}
from "./auth.js";

import {
 clearForm,	
 showUser
}
from "./ui.js";

import {
 saveCredentials,
 loadCredentials,
 deleteCredentials,
 openAttachment
}
from "./credentials.js";



import {db} from "./db.js";

import {saveJob , loadJobs } from "./jobs.js";


initAuth(async user => {

   showUser(user);

   document
     .getElementById("formCard")
     .style.display =
       user ? "block" : "none";

   if(user){

      await loadCredentials();
	  await loadJobs();	
   } 
});

document
.getElementById("loginBtn")
.addEventListener("click",login);

document
.getElementById("logoutBtn")
.addEventListener("click",logout);

document
.getElementById("saveCredentials")
.addEventListener("click",saveCredentials);

document
.getElementById("searchInput")
.addEventListener("keyup",loadCredentials);

document
.getElementById("saveJobBtn")
.addEventListener("click", saveJob );

const currentJob =
document.getElementById("currentJob");

const jobEndDate =
document.getElementById("jobEndDate");

currentJob.addEventListener(
   "change",
   () => {

      jobEndDate.disabled =
         currentJob.checked;

      if(currentJob.checked){

         jobEndDate.value = "";

      }

   }
);





/*
document
.getElementById("deleteCredentials")
.addEventListener("click",deleteCredentials);


document
.getElementById("loadCredentials")
.addEventListener("click",loadCredentials);



document
.getElementById("openAttachment")
.addEventListener("click",openAttachment);

initAuth(async user => {

   showUser(user);

   document
     .getElementById("formCard")
     .style.display =
       user ? "block" : "none";

   if(user){

      await loadCredentials();

   }
   else{

      document
      .getElementById("credentialsList")
      .innerHTML = "";

   }

});

*/


