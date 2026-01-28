import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const api_link = "http://127.0.0.1:8000/auth/login"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage,seterrorMessage] = useState("");

    // ========================== Functions ============================

    async function apicall(email, password) {
        const res = await fetch(api_link, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
            seterrorMessage("Wrong email or password")
            throw new Error("Login failed");
        }

        return res.json();
    }


    // ========================== Functions End =========================


    useEffect(() => {
        document.title = "Login";
    }, []);

    async function handleSubmit(e) {
        e.preventDefault(); // prevent page reload  

        try {
            const data = await apicall(email, password);
            if (data.access_token) {
                // Store the token in localStorage
                localStorage.setItem("jwtToken", data.access_token);

                navigate("/", { replace: true });
            }
            else {
                console.warn("No token found")
            }
            console.log("Login success:", data);
        } catch (err) {
            console.error(err.message);
        }
    };





    return (
        <>
            {/* Mazer CSS */}
            <link rel="stylesheet" href="/assets/compiled/css/app.css" />
            <link rel="stylesheet" href="/assets/compiled/css/app-dark.css" />

            <div id="app">


                <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="add_email">Email</label>
                                                            <input
                                                                placeholder="Enter email"
                                                                type="email"
                                                                id="add_email"
                                                                className="form-control"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="enter_password"> Password</label>
                                                            <input
                                                                placeholder="password"
                                                                type="password" id="enter_password"
                                                                className="form-control"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    {errorMessage && (
                                            <p style={{ color: "red" }}>{errorMessage}</p>
                                            )}

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="sumbit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    className="img-fluid" alt="Sample image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>

            {/* Mazer JS */}
            <script src="/assets/static/js/initTheme.js"></script>
            <script src="/assets/compiled/js/app.js"></script>
        </>
    )



}

export default Login
