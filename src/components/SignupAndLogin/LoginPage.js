import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage({ setRole }) {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");





  const handleLogin = (e) => {


    e.preventDefault();





    if (!email.trim() || !password.trim()) {


      alert("Please enter both email and password.");

      return;

    }







    const users =

      JSON.parse(

        localStorage.getItem("users")

      ) || [];








    const user = users.find(

      (u)=>

        u.email === email &&

        u.password === password

    );








    if(!user){


      alert("Invalid email or password.");

      return;


    }








    sessionStorage.setItem(

      "currentUser",

      JSON.stringify(user)

    );








    sessionStorage.setItem(

      "activeRole",

      user.role

    );








    setRole(user.role);









    if(user.role === "owner"){


      navigate("/home");


    }

    else{


      navigate("/tenanthome");


    }





  };







  return (



    <div className="heading">





      <h1 className="title">


        LOGIN


      </h1>








      <form

        className="sign_up_form"

        onSubmit={handleLogin}

      >






        <div className="email1">





          <label>


            Email


          </label>







          <input


            type="email"


            placeholder="Enter Email"


            value={email}


            onChange={(e)=>

              setEmail(e.target.value)

            }


          />






        </div>








        <div className="password1">






          <label>


            Password


          </label>






          <input


            type="password"


            placeholder="Enter Password"


            value={password}


            onChange={(e)=>

              setPassword(e.target.value)

            }


          />






        </div>








        <div className="buttons">





          <button

            type="submit"

          >


            LOG IN


          </button>








          <Link to="/signup">



            <button

              type="button"

            >


              SIGN UP


            </button>





          </Link>






        </div>








      </form>








      <p className="forgot_password">


        Forgot Password?


        <span>


          Click here


        </span>





      </p>







    </div>



  );



}



export default LoginPage;