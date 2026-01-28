import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ErrorPage from "../../components/ErrorPage";
import CreatePasswordForm from "../auth/CreatePasswordForm";

const SetPassword = () => {
    const [searchParams] = useSearchParams()
    const token = searchParams.get("token")

    const [status, setStatus] = useState("loading")
    const [message, setMessage] = useState("")
    const [user_id, setUser_id] = useState(null)



    useEffect(() => {
        document.title = "Forget Password";
    }, []);

    useEffect(() => {
        if (!token) {
            setStatus("error")
            setMessage("Token missing")
            return
        }

        fetch("http://127.0.0.1:8000/auth/validate-signup-token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
            }),
        })
            .then(async (res) => {
                const data = await res.json()

                if (!res.ok) {
                    // Mimic axios error handling
                    throw data
                }

                setStatus(data.status)
                setMessage(data.message)
                setUser_id(data.user_id)
            })
            .catch((err) => {
                setStatus(err?.status || "error")
                setMessage(err?.message || "Something went wrong")
            })
    }, [])



    if (status === "loading") {
        return <h3>Validating token...</h3>
    }

    if (status === "expired") {
        return <ErrorPage message="Token expired. Please contact admin." />
    }

    if (status === "verified") {
        return <InfoPage message="User already verified." />
    }

    if (status === "error") {
        return <ErrorPage message={message} />
    }

    if (status === "valid") {
        return <CreatePasswordForm user_id={user_id} />
    }


}

export default SetPassword
