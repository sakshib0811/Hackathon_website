import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import register from "./images/register2.png";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdOutlineWork } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import Nav from "./Nav";
function Register() {
  const navigate = useNavigate();

  const submitLink1 = () => {
    navigate("/final", { replace: true });
  };

  return (
    <div className="top">
      <Nav />
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signupform">
              <h2 className="form-title">Register</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
              </form>
              <br />

              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <MdEmail />
                  </label>
                  <input
                    type="email"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
              </form>
              <br />

              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <CgPhone />
                  </label>
                  <input
                    type="number"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Mobile Number"
                  />
                </div>
              </form>
              <br />

              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <MdOutlineWork />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Profession"
                  />
                </div>
              </form>
              <br />

              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <RiLockPasswordFill />
                  </label>
                  <input
                    type="password"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Password"
                  />
                </div>
              </form>
              <br />
              <button className="btn btn1" onClick={submitLink1}>
                Register
              </button>
            </div>
            <img src={register} alt="" className="reg_img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
