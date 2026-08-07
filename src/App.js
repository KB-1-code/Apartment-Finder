import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import LoginPage from "./components/SignupAndLogin/LoginPage";
import SignupPage from "./components/SignupAndLogin/SignupPage";

import CardMaker from "./components/CardMaker";
import TenantView from "./components/TenantView";
import TenantCard from "./components/TenantCard";

import OwnerMessage from "./components/Messages/OwnerMessage";
import TenantMessage from "./components/Messages/TenantMessage";

import {
  OwnerSidebarData
} from "./components/sidebars/OwnerSidebarData";

import {
  TenantSidebarData
} from "./components/sidebars/TenantSidebarData";

import Home from "./HomeAndAbout/Home";
import TenantHome from "./HomeAndAbout/TenantHome";
import Map from "./HomeAndAbout/Map";
import About from "./HomeAndAbout/About";


function AppContent(){

const [role,setRole]=useState(
  sessionStorage.getItem("activeRole")
);



useEffect(()=>{

if(role){

sessionStorage.setItem(
"activeRole",
role
);

}

},[role]);





const [cards,setCards]=useState(()=>{

return JSON.parse(
localStorage.getItem("cards")
)||[];

});





const [tenantCards,setTenantCards]=useState(()=>{

return JSON.parse(
localStorage.getItem("tenantCards")
)||[];

});





// Sync data between browser tabs

useEffect(()=>{


const syncStorage=(event)=>{


if(event.key==="cards"){

setCards(
JSON.parse(event.newValue)||[]
);

}


if(event.key==="tenantCards"){

setTenantCards(
JSON.parse(event.newValue)||[]
);

}


};



window.addEventListener(
"storage",
syncStorage
);



return()=>{

window.removeEventListener(
"storage",
syncStorage
);

};


},[]);







useEffect(()=>{

localStorage.setItem(
"cards",
JSON.stringify(cards)
);

},[cards]);






useEffect(()=>{

localStorage.setItem(
"tenantCards",
JSON.stringify(tenantCards)
);

},[tenantCards]);








const createCard=(card)=>{


setCards(prev=>{

const updated=[
...prev,
card
];


localStorage.setItem(
"cards",
JSON.stringify(updated)
);


return updated;


});


};







const deleteCard=(id)=>{


setCards(prev=>{


const updated=
prev.filter(
card=>card.id!==id
);


localStorage.setItem(
"cards",
JSON.stringify(updated)
);


return updated;


});


};








const addTenantCard=(id,card)=>{


setTenantCards(prev=>{


const updated=[
...prev,
card
];


localStorage.setItem(
"tenantCards",
JSON.stringify(updated)
);


return updated;


});





setCards(prev=>{


const updated=
prev.filter(
card=>card.id!==id
);


localStorage.setItem(
"cards",
JSON.stringify(updated)
);


return updated;


});


};







const removeTenantCard=(id)=>{


const property=
tenantCards.find(
card=>card.id===id
);


if(!property)return;



setCards(prev=>[
...prev,
property
]);



setTenantCards(prev=>
prev.filter(
card=>card.id!==id
)
);



};







const logout=()=>{

sessionStorage.clear();

setRole(null);

};







const sidebarData=

role==="owner"
?
OwnerSidebarData
:
TenantSidebarData;








return(

<>

{
role &&
<Navbar
sidebarData={sidebarData}
logout={logout}
/>
}


<Routes>



<Route
path="/login"
element={
<LoginPage setRole={setRole}/>
}
/>



<Route
path="/signup"
element={
<SignupPage setRole={setRole}/>
}
/>





<Route
path="/cardmaker"
element={
role==="owner"
?
<CardMaker
cards={cards}
onCreate={createCard}
onDelete={deleteCard}
/>
:
<Navigate to="/login"/>
}
/>





<Route
path="/tenantview"
element={
role
?
<TenantView
cards={cards}
onAdd={addTenantCard}
/>
:
<Navigate to="/login"/>
}
/>





<Route
path="/tenantcard"
element={
role==="tenant"
?
<TenantCard
tenantCards={tenantCards}
onRemove={removeTenantCard}
/>
:
<Navigate to="/login"/>
}
/>





<Route
path="/ownermessage"
element={
role==="owner"
?
<OwnerMessage/>
:
<Navigate to="/login"/>
}
/>





<Route
path="/tenantmessage"
element={
role==="tenant"
?
<TenantMessage/>
:
<Navigate to="/login"/>
}
/>





<Route
path="/home"
element={
<Home
cards={cards}
tenantCards={tenantCards}
/>
}
/>





<Route
path="/tenanthome"
element={
<TenantHome
tenantCards={tenantCards}
/>
}
/>





<Route
path="/map"
element={<Map/>}
/>


<Route
path="/about"
element={<About/>}
/>





<Route
path="/"
element={
role
?
<Navigate
to={
role==="owner"
?
"/home"
:
"/tenanthome"
}
/>
:
<Navigate to="/login"/>
}
/>





</Routes>

</>

);

}




export default function App(){

return(

<Router>

<AppContent/>

</Router>

);

}