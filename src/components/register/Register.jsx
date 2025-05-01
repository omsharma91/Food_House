import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneno: yup
    .string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("Registration Successful!");
  }

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 rounded shadow bg-light"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-center mb-4">Register Yourself</h2>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            {...register("name")}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phoneno ? "is-invalid" : ""}`}
            {...register("phoneno")}
          />
          <div className="invalid-feedback">{errors.phoneno?.message}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password")}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="mb-4">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${errors.confirm_password ? "is-invalid" : ""}`}
            {...register("confirm_password")}
          />
          <div className="invalid-feedback">{errors.confirm_password?.message}</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <div className="text-end">
            <span className="me-2">Already registered?</span>
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
