import React, { useState, useEffect, useCallback } from "react";
import "./TenantMessage.css";


function TenantMessage(){


const currentUser =
JSON.parse(
sessionStorage.getItem("currentUser")
);





const tenantCards =
JSON.parse(
localStorage.getItem("tenantCards")
)||[];





const owners=[

...new Map(

tenantCards.map((card)=>[

card.ownerEmail,

{

name:card.owner,

email:card.ownerEmail

}

])

).values()

];






const [selectedOwner,setSelectedOwner]=useState(null);

const [messages,setMessages]=useState([]);

const [message,setMessage]=useState("");







const getChatKey = useCallback((ownerEmail) => {
  return (
    "chat_" +
    [
      ownerEmail,
      currentUser.email
    ]
      .sort()
      .join("_")
  );
}, [currentUser.email]);









useEffect(()=>{


if(selectedOwner){


const saved=

JSON.parse(

localStorage.getItem(

getChatKey(selectedOwner.email)

)

)||[];



setMessages(saved);


}



},[getChatKey, selectedOwner]);








useEffect(()=>{


const syncMessages=(event)=>{


if(

selectedOwner &&

event.key===

getChatKey(selectedOwner.email)

){



setMessages(

JSON.parse(event.newValue)||[]

);


}



};



window.addEventListener(

"storage",

syncMessages

);



return()=>{


window.removeEventListener(

"storage",

syncMessages

);


};



},[getChatKey, selectedOwner]);









const sendMessage=()=>{


if(

!message.trim() ||

!selectedOwner

)

return;






const newMessage={


sender:"tenant",

senderName:

currentUser.username,

text:message,

time:

new Date().toLocaleString()


};






const updated=[

...messages,

newMessage

];





localStorage.setItem(

getChatKey(selectedOwner.email),

JSON.stringify(updated)

);





setMessages(updated);


setMessage("");



};









return (

<div className="message-page">


<h2>

Tenant Messages

</h2>





{

owners.length===0

?

<p>

Select a property before messaging an owner.

</p>



:



<div className="chat-layout">



<div className="chat-list">


{

owners.map((owner,index)=>(


<button

key={index}

className="chat-user"

onClick={()=>setSelectedOwner(owner)}

>


{owner.name}


</button>


))


}


</div>








<div className="chat-box">


{

selectedOwner

?

<>


<h3>

Chat with {selectedOwner.name}

</h3>





<div className="messages">


{

messages.map((msg,index)=>(


<div

key={index}

className={

msg.sender==="tenant"

?

"tenant-message"

:

"owner-message"

}

>

{msg.text}

</div>


))


}


</div>








<div className="message-input">


<input

value={message}

placeholder="Write message..."

onChange={(e)=>

setMessage(e.target.value)

}

/>





<button onClick={sendMessage}>

Send

</button>



</div>


</>



:


<p>

Select owner to chat.

</p>


}



</div>



</div>


}



</div>


);


}



export default TenantMessage;