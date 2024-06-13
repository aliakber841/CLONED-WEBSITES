// FIREBASE COMMANDS
import {getFirestore,collection,addDoc,onSnapshot,doc,updateDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
const db=getFirestore();
const dbRef=collection(db,"contacts");

// QUERIES SELECTED
const addBtn=document.querySelector(".add-btn");
const modalOverlay=document.querySelector(".modal-overlay");
const closeBtn=document.querySelector(".close-btn");
const saveBtn=document.querySelector('.save-btn');
const firstname=document.querySelector("#firstname");
const lastname=document.querySelector("#lastname");
const age=document.querySelector("#age");
const phone=document.querySelector("#phone");
const email=document.querySelector("#email");
const error={};
const leftCol=document.querySelector(".left-col");
const backBtn=document.querySelector(".back-btn");
const contactList=document.querySelector(".contact-list");
let contacts=[];


// Back Button in Mobile View
backBtn.addEventListener("click",e=>{
    leftCol.style.display="block";
    rightCol.style.display="none";
})


// For Mobile View Toggling Left and Right side 
const  toggleLeftandRightViewOnMobile=()=>{
    if(document.body.clientWidth<=600){
        leftCol.style.display="none";
        rightCol.style.display="block";
    }
}





// Gettings Contacts Data From the firestore
const getContacts=async()=>{
    try{
    //   const docSnap=  await getDocs(dbRef)
    // Using Snapshot so we don't have to refresh our page everytime
    await onSnapshot(dbRef,docSnap=>{
        contacts=[];
        docSnap.forEach(doc=>{
            const contact=doc.data();
            contact.id=doc.id;
            contacts.push(contact)
          })
          showcontacts(contacts);
    });
     
    }
    catch(err){
        console.log("getContacts:"+err);
    }
}
getContacts();




// For Showing Contacts Prototype (Left Side)
const showcontacts=(contacts)=>{
   contactList.innerHTML="";
   contacts.forEach(contact=>{
    const li=
    `<li class="contact-list-item" id= "${contact.id}">
<div class="media">
    <div class="two-letters">AB</div>
</div>
<div class="content">
    <div class="title2">
${contact.firstname} ${contact.lastname}
    </div>
    <div class="subtitle">${contact.email}</div>
</div>
<div class="action">
    <button class="edit-user">
Edit
    </button>
    <button class="delete-user">Delete</button>
</div>
</li>`
contactList.innerHTML+=li;
   })
}


// If a specific contact is pressed
const contactListPressed=(event)=>{
    const id= event.target.closest("li").getAttribute("id");
    console.log(id);
    if(event.target.className==="edit-user"){
        editButtonPressed(id);
    } else if(event.target.className==="delete-user"){
        deleteButtonPressed(id);
    }else{
        displayContactOnDetailsView(id);
        toggleLeftandRightViewOnMobile();
    }
   
}
// If the delete button is pressed
const  deleteButtonPressed=async (id)=>{
   const isConfirmed= confirm("Are You sure you want to delete it");
   if (isConfirmed){
    try{
        const docRef= doc(db,"contacts",id);
        await deleteDoc(docRef)
    } catch(e){
        setErrorMessage("error","Unable to delete user data to the database.Please try again later");
        showErrorMessages();
    }
   }
}


    // If the edit button is pressed
const editButtonPressed=(id)=>{
    modalOverlay.style.display="flex";
    const contact=getContact(id);
    firstname.value=contact.firstname;
    lastname.value=contact.lastname;
    age.value=contact.age;
    phone.value=contact.phone;
    email.value=contact.email;

    modalOverlay.setAttribute("contact-id",contact.id);
}

   // For getting a specified contact.
const getContact=(id)=>{
    return contacts.find(contact=>{
        return contact.id===id;
    })
}
contactList.addEventListener("click",contactListPressed);


   //For Displaying Data on the right side 
const  displayContactOnDetailsView=(id)=>{
   const contact= getContact(id);
   const rightColDetail=document.querySelector(".right-col-detail");
   rightColDetail.innerHTML=`
   <div class="label">Name:</div>
   <div class="data">${contact.firstname} ${contact.lastname}</div>
   
   <div class="label">Age:</div>
   <div class="data">${contact.age}</div>
   
    <div class="label">Phone:</div>
   <div class="data">${contact.phone}</div>
   
    <div class="label">Email:</div>
   <div class="data">${contact.email}</div>
   `
    }





  /* If Add Button is Pressed */
const addButtonPressed=()=>{
modalOverlay.style.display="flex";
modalOverlay.removeAttribute("contact-id");
firstname.value="";
lastname.value="";
age.value="";
phone.value="";
email.value="";
}

/* If Close Button is Pressed */
const closeButtonPressed=()=>{
    modalOverlay.style.display="none";
    }

    /* Hide the Modal containing all the input feilds */
    const hidemodal =(e)=>{
        if(e instanceof Event){
            if (e.target===e.currentTarget){
                modalOverlay.style.display="none";
            }  
        } else{
            modalOverlay.style.display="none";
        }     
    }

    /* If Save Button is Pressed */
    const saveButtonPressed =async()=>{
        // For Checking Errors/Validations
        checkRequired([firstname,lastname,age,phone,email]);
        checkInputLength(age,2);
        checkInputLength(phone,10);
        checkemail(email);
        showErrorMessages();
        if(Object.keys(error).length===0){
            if(modalOverlay.getAttribute("contact-id")){
             const docRef= doc(db,"contacts",modalOverlay.getAttribute("contact-id"));
             // Updating existing data to firebase
             try{
                await updateDoc(docRef,{
                    firstname:firstname.value,
                    lastname:lastname.value,
                    age:age.value,
                    phone:phone.value,
                    email:email.value
                 })
                 hidemodal();
             }
             catch(e){
                setErrorMessage("error","Unable to update user data to the database.Please try again later");
                showErrorMessages();
             }
            } 
            // Adding data to firebase
            else{
                try{
                    await addDoc(dbRef,{
                        firstname:firstname.value,
                        lastname:lastname.value,
                        age:age.value,
                        phone:phone.value,
                        email:email.value
                    })
                    hidemodal();
                }catch(err){
                    setErrorMessage("error","Unable to add user data to the database.Please try again later");
                    showErrorMessages();
                }
            }
           
        }
    }

    /* For checking if all inputs feilds are entered or not */
    const checkRequired=(inputarray)=>{
        inputarray.forEach(element => {
            if (element.value.trim()===""){
               setErrorMessage(element,element.id+" is empty ");
            } else{
               deleteErrorMessage(element)
            }
        });
    };

    /* If all/some input feilds are empty then set errors*/
    const setErrorMessage=(input,message)=>{
        if(input.nodeName==="INPUT"){
            error[input.id]=message;
            input.style.border="1px solid red";
        } else{
            error[input]=message;
        }
    }

     /* If all input feilds are right delete errors*/
    const deleteErrorMessage=(input)=>{
        delete error[input.id];
         input.style.border="1px solid green";
    }


     /* For Age and Phone Validation */
    const checkInputLength=(input,number)=>{
        if(input.value.trim()!==""){
        if(input.value.trim().length===number){
            deleteErrorMessage(input);
        } else{
            setErrorMessage(input,input.id+` must be ${number} digits `)
        }
    }
    }

    /* For Email Validation */
    const checkemail=(input)=>{
        if(input.value.trim()!==""){
        const re= /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if(re.test(input.value.trim())){
            delete error[input.id];
        } else{
            setErrorMessage(input,input.id+" is invalid");
        }
    }
    }

    /* For Showing Error Messages */
    const showErrorMessages=()=>{
      const errorLabel = document.querySelector(".error-label");
      errorLabel.innerHTML="";
      for (const key in error){
       const li = document.createElement("li");
        li.innerText=error[key];
        li.style.color="red";
        errorLabel.appendChild(li);
      }
    };
   

addBtn.addEventListener("click",addButtonPressed);
closeBtn.addEventListener("click",closeButtonPressed);
modalOverlay.addEventListener("click",hidemodal);
saveBtn.addEventListener("click",saveButtonPressed);



const rightCol=document.querySelector(".right-col");