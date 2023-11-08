import { Button, Form, Input, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (value) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      await axios.post("/api/users/register", value);
      alert("Register Successfully!");
      navigate("/login");
      dispatch({
        type: "HIDE_LOADING",
      });
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      alert("Error!");
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localStorage.getItem("auth");
      navigate("/adminhome");
    }
  }, [navigate]);

  return (
    <div id="register" className="form">
      <h2>
        Restro<span className="text-primary">Easy</span>
      </h2>
      <p>Register</p>
      <div
        className="form-group "
        style={{
          background: `linear-gradient(
    to right bottom,
    #9db0b7,
    #8aaebd,
    #76abc5,
    #61a7ce,
    #4aa3d7,
    #2c9bdf,
    #0791e7,
    #0086ec,
    #0073ee,
    #005ded,
    #0044e8,
    #2820de
  )`,
        }}
      >
        <Form layout="vertical" onFinish={handlerSubmit}>
          <FormItem name="name" label="Name">
            <Input />
          </FormItem>
          <FormItem name="userId" label="User ID">
            <Input />
          </FormItem>
          <FormItem name="password" label="Password">
            <Input type="password" />
          </FormItem>
          <div className="form-btn-add">
            <Button htmlType="submit" className="add-new w-100">
              Register
            </Button>
            <Link className="form-other" to="/login">
              Login Here!
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
