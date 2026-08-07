import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function SignupPage({ setRole }) {


  const navigate = useNavigate();


  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [telephone, setTelephone] = useState("");

  const [gender, setGender] = useState("");

  const [password, setPassword] = useState("");

  const [role, setSelectedRole] = useState("tenant");





  const handleSignup = (e) => {


    e.preventDefault();





    if (
      !username.trim() ||
      !email.trim() ||
      !telephone.trim() ||
      !gender ||
      !password.trim()
    ) {


      alert("Please fill in all fields.");

      return;

    }







    const users =

      JSON.parse(

        localStorage.getItem("users")

      ) || [];







    const existingUser =

      users.find(

        (user) =>

          user.email === email

      );







    if(existingUser){


      alert(

        "An account with this email already exists."

      );


      return;


    }







    const newUser = {


      username,

      email,

      telephone,

      gender,

      password,

      role


    };







    users.push(newUser);







    localStorage.setItem(

      "users",

      JSON.stringify(users)

    );







    localStorage.setItem(

      "currentUser",

      JSON.stringify(newUser)

    );







    sessionStorage.setItem(

      "currentUser",

      JSON.stringify(newUser)

    );







    setRole(newUser.role);







    if(newUser.role === "owner"){


      navigate("/cardmaker");


    }

    else{


      navigate("/tenantview");


    }



  };









  return (


    <div className="heading">





      <h1 className="title">

        SIGN UP

      </h1>








      <form

        className="sign_up_form"

        onSubmit={handleSignup}

      >






        <div className="username1">


          <label>

            Username

          </label>



          <input

            type="text"

            placeholder="Enter Username"

            value={username}

            onChange={(e)=>

              setUsername(e.target.value)

            }

          />



        </div>








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








        <div className="telephone1">


          <label>

            Telephone Number

          </label>



          <input

            type="tel"

            placeholder="Enter Telephone Number"

            value={telephone}

            onChange={(e)=>

              setTelephone(e.target.value)

            }

          />



        </div>








        <div className="gender">


          <p>

            Gender

          </p>






          <label>


            <input

              type="radio"

              name="gender"

              value="Male"

              checked={gender==="Male"}

              onChange={(e)=>

                setGender(e.target.value)

              }

            />

            Male


          </label>







          <br />







          <label>


            <input

              type="radio"

              name="gender"

              value="Female"

              checked={gender==="Female"}

              onChange={(e)=>

                setGender(e.target.value)

              }

            />

            Female


          </label>





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








        <div className="radio">


          <p>

            Select access level:

          </p>







          <label>


            <input

              type="radio"

              name="role"

              value="tenant"

              checked={role==="tenant"}

              onChange={(e)=>

                setSelectedRole(e.target.value)

              }

            />

            Tenant


          </label>







          <br />







          <label>
            <input type = "radio" name = "role" value = "owner" checked = {role === "owner"} onChange = {(e) => setSelectedRole(e.target.value)}/>
            Owner
          </label>






        </div>







        <div className="buttons">



          <Link to="/login">


            <button type="button">

              LOG IN

            </button>



          </Link>







          <button type="submit">


            SIGN UP


          </button>





        </div>






      </form>





    </div>


  );

}



export default SignupPage;