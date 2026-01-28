import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CreatePasswordForm({ user_id }) {

    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    // error and sucuss message
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        document.title = "Create Password";
    }, []);



    const handleRegister = (e) => {
        e.preventDefault();

        // Empty password check
        if (!password) {
            setErrorMessage("Password cannot be empty");
            setSuccessMessage(null);
            return;
        }

        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be 8+ characters and include upper/lowercase letters and a special character");
            setSuccessMessage(null);
            return;
        }

        if (password === rePassword) {
            setErrorMessage(null);
            setSuccessMessage("Passwords match");
        } else {
            setSuccessMessage(null);
            setErrorMessage("Password doesn't match");
            return
        }

        fetch('http://127.0.0.1:8000/auth/create_password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user_id,
                password:password
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // parse JSON body
            })
            .then(data => {
                console.log('API data:', data);
                // SUCCESS
                setSuccessMessage("Password added successfully");

                // redirect to dashboard
                navigate("/");
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

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

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Password Creation</p>

                                                <form className="mx-1 mx-md-4" onSubmit={handleRegister}>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="form3Example1c">Password</label>
                                                            <input
                                                                placeholder="enter password"
                                                                type="password"
                                                                id="form3Example1c"
                                                                className="form-control"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                            <label className="form-label" for="form3Example1c">re enter Password</label>
                                                            <input
                                                                placeholder="re enter password"
                                                                type="password" id="form3Example1c"
                                                                className="form-control"
                                                                value={rePassword}
                                                                onChange={(e) => setRePassword(e.target.value)} />
                                                        </div>
                                                    </div>

                                                    {successMessage && (
                                                        <p style={{ color: "green" }}>{successMessage}</p>
                                                    )}

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
    );
}

export default CreatePasswordForm;
