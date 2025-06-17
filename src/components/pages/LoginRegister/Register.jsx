import { useState, useEffect } from "react"
import { useNavigate } from "react-router";

import "./LoginRegister.css"
import { HomeHeader } from "../../organisms/HomeHeader/HomeHeader"

export const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [password, setPassword] = useState()
    const [repeatPassword, setRepeatPasword] = useState()
    const [email, setEmail] = useState()

    const [registerAlert, setRegisterAlert] = useState("Complete the register form")

    const handleRegister = (event) => {
        event.preventDefault()

        if (password !== repeatPassword) {

            setRegisterAlert("The password don't match")
            return
        }

        if (!name || !lastname || !password || !repeatPassword || !email) {
            setRegisterAlert("You need to complete all the required* fields")
            return
        }

        const userData = {
            name,
            lastname,
            password,
            repeatPassword,
            email
        }

        localStorage.setItem("userRegistered", JSON.stringify(userData));

        navigate("/login")
    }

    return (
        <>
            <HomeHeader />
            <main>
                <article className="userFormContainer">
                    <h1>Register</h1>
                    <form action="" className="userForm">
                        <p className="registerAlert">{registerAlert}</p>
                        <input type="text" placeholder="Your name" onChange={(event) => setName(event.target.value)} />
                        <input type="text" placeholder="Your lastname" onChange={(event) => setLastname(event.target.value)} />
                        <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                        <input type="password" placeholder="Repeat password" onChange={(event) => setRepeatPasword(event.target.value)} />
                        <input type="email" placeholder="Your email" onChange={(event) => setEmail(event.target.value)} />
                        <button type="primary" onClick={handleRegister}>Register</button>
                    </form>
                </article>
            </main>
        </>
    )
}
