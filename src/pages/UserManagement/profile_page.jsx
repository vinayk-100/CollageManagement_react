import { useEffect,useState  } from "react";
import { useParams } from "react-router-dom";

function User_profile_page() {

    const { userId } = useParams();

    const [user, setUser] = useState(null);
    const [personal, setPersonal] = useState(null);
    const [student, setStudent] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    useEffect(() => {
        // runs ONCE when component mounts (or when id changes)
        fetch(`http://127.0.0.1:8000/view_user_details/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data.success.user);
                setPersonal(data.success.personal_details);
                setStudent(data.success.student);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [userId]); // 👈 dependency ensures correct behavior

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div id="app">
                <div id="main" className="layout-navbar">
                    <div id="main-content">
                        <div className="page-heading">
                            <h3>Mazer React Test Page</h3>
                        </div>

                        <section>
                            <div className="container py-5">

                                <div className="row">
                                    {/* LEFT COLUMN */}
                                    <div className="col-lg-4">
                                        <div className="card mb-4">
                                            <div className="card-body text-center">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                                    alt="avatar"
                                                    className="rounded-circle img-fluid"
                                                    style={{ width: "150px" }}
                                                />
                                                <h5 className="my-3"> {personal?.first_name}</h5>
                                                <p className="text-muted mb-1">
                                                    {user?.role}
                                                </p>
                                                <div className="d-flex justify-content-center mb-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                    >
                                                        Follow
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-primary ms-1"
                                                    >
                                                        Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card mb-4 mb-lg-0">
                                            <div className="card-body p-0">
                                                <ul className="list-group list-group-flush rounded-3">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <p className="mb-0">
                                                            https://mdbootstrap.com
                                                        </p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <p className="mb-0">mdbootstrap</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <p className="mb-0">@mdbootstrap</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <p className="mb-0">mdbootstrap</p>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <p className="mb-0">mdbootstrap</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN */}
                                    <div className="col-lg-8">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                {[
                                                    [
                                                        "Full Name",
                                                        `${personal?.first_name ?? ""} ${personal?.middle_name ?? ""} ${personal?.last_name ?? ""}`
                                                    ],
                                                    [
                                                        "User Name",
                                                        `${user.username}`
                                                    ],
                                                    ["Email", `${user.email}`],
                                                    ["gender", `${user.gender}`],
                                                    ["DOB", `${user.dob}`],
                                                    ["Address", "Bay Area, San Francisco, CA"],
                                                ].map(([label, value], index) => (
                                                    <div key={index}>
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">{label}</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">
                                                                    {value}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {index !== 5 && <hr />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="row">
                                            {[1, 2].map((col) => (
                                                <div className="col-md-6" key={col}>
                                                    <div className="card mb-4 mb-md-0">
                                                        <div className="card-body">
                                                            <p className="mb-4">
                                                                <span className="text-primary font-italic me-1">
                                                                    assignment
                                                                </span>
                                                                Project Status
                                                            </p>

                                                            {[
                                                                ["Web Design", 80],
                                                                ["Website Markup", 72],
                                                                ["One Page", 89],
                                                                ["Mobile Template", 55],
                                                                ["Backend API", 66],
                                                            ].map(([title, value], i) => (
                                                                <div key={i}>
                                                                    <p
                                                                        className="mb-1 mt-4"
                                                                        style={{ fontSize: ".77rem" }}
                                                                    >
                                                                        {title}
                                                                    </p>
                                                                    <div
                                                                        className="progress rounded"
                                                                        style={{ height: "5px" }}
                                                                    >
                                                                        <div
                                                                            className="progress-bar"
                                                                            role="progressbar"
                                                                            style={{ width: `${value}%` }}
                                                                            aria-valuenow={value}
                                                                            aria-valuemin="0"
                                                                            aria-valuemax="100"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User_profile_page;
