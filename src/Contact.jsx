import React, {useState} from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullName: "",
        phone: "",
        Email: "",
        msg: "",
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name] : value,
            }
        })
    };
    
    const formSubmit = (e) => {
       e.preventDefault();
       alert(`Name ${data.fullName}. mobile no ${data.phone}. Email ${data.Email}. message ${data.msg}`)
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">
                                    Full Name
                                </label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">
                                    phone No
                                </label>
                                <input type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone }
                                    onChange={inputEvent}
                                    placeholder="Enter Your Mobile No" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">
                                    Email address
                                </label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="Email"
                                    value={data.Email }
                                    onChange={inputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1"
                                    class="form-label">
                                    Message
                                </label>
                                <textarea class="form-control"
                                    id="exampleFormControlTextarea1" rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={inputEvent}
                                ></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary"
                                    type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;