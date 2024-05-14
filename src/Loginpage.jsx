import { useState } from "react";

export default function Loginpage()
{
    const[firstname,setFirstname]=useState("");
    const[lasttname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[contact,setContact]=useState("");
    const[gender,setGender]=useState("female");

    function handlesubmit()
    {
        
    }

    function handlereset()
    {
        setFirstname("");
        setLastname("");
        setContact("");
        setEmail("");
        setGender("male");
    }
    return(<>
            <label htmlFor=""  >Firstname: </label>
            <input type="text" name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/><br />
            <label htmlFor="">Lastname: </label>
            <input type="password"  name="lastname" value={lasttname} onChange={(e)=>setLastname(e.target.value)}/><br />
            <label htmlFor="">E-mail: </label>
            <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label htmlFor="">Contact: </label>
            <input type="tel"  name="contact" value={contact} onChange={(e)=>setContact(e.target.value)}/><br />
            <label for="gender">Gender*</label>
            <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />other
            
                        <br />
            <button type="submit" onClick={handlesubmit}>submit</button>
            <button type="reset" onClick={handlereset}>reset</button>

            </>);
}
