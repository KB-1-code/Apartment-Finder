import React, { useState, useEffect } from "react";
import "./OwnerMessage.css";


function OwnerMessage() {


  const currentUser =
    JSON.parse(
      sessionStorage.getItem("currentUser")
    );



  const tenantCards =
    JSON.parse(
      localStorage.getItem("tenantCards")
    ) || [];





  const tenants = [

    ...new Map(

      tenantCards.map((card)=>[

        card.tenantEmail,

        {

          name: card.tenant,

          email: card.tenantEmail

        }

      ])

    ).values()

  ];





  const [selectedTenant,setSelectedTenant] = useState(null);

  const [messages,setMessages] = useState([]);

  const [message,setMessage] = useState("");





  const getChatKey = (tenantEmail)=>{


    return (

      "chat_" +

      [

        currentUser.email,

        tenantEmail

      ]

      .sort()

      .join("_")

    );


  };








  useEffect(()=>{


    if(selectedTenant){


      const savedMessages =

        JSON.parse(

          localStorage.getItem(

            getChatKey(selectedTenant.email)

          )

        ) || [];



      setMessages(savedMessages);


    }



  },[selectedTenant]);







  useEffect(()=>{


    const syncMessages=(event)=>{


      if(

        selectedTenant &&

        event.key ===

        getChatKey(selectedTenant.email)

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


  },[selectedTenant]);









  const sendMessage=()=>{


    if(

      !message.trim() ||

      !selectedTenant

    )

    return;





    const newMessage={


      sender:"owner",

      senderName:

        currentUser.username,

      text:message,

      time:

        new Date().toLocaleString()


    };





    const updatedMessages=[

      ...messages,

      newMessage

    ];





    localStorage.setItem(

      getChatKey(selectedTenant.email),

      JSON.stringify(updatedMessages)

    );





    setMessages(updatedMessages);


    setMessage("");



  };









  return (

    <div className="message-page">


      <h2>

        Owner Messages

      </h2>





      {

        tenants.length===0

        ?

        <p>

          No tenant has selected your property yet.

        </p>



        :



        <div className="chat-layout">





          <div className="chat-list">


            {

              tenants.map((tenant,index)=>(


                <button

                  key={index}

                  className="chat-user"

                  onClick={()=>setSelectedTenant(tenant)}

                >

                  {tenant.name}

                </button>


              ))

            }


          </div>







          <div className="chat-box">



            {

              selectedTenant

              ?


              <>


                <h3>

                  Chat with {selectedTenant.name}

                </h3>





                <div className="messages">


                  {

                    messages.map((msg,index)=>(


                      <div

                        key={index}

                        className={

                          msg.sender==="owner"

                          ?

                          "owner-message"

                          :

                          "tenant-message"

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

                Select tenant to chat.

              </p>


            }



          </div>




        </div>


      }


    </div>

  );


}



export default OwnerMessage;