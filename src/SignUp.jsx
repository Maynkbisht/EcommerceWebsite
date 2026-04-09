import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function SubmitForm(data) {
    alert(`Submitted with Email: ${data.email} and Password: ${data.password}`);
  }

  return (
    <div style={{ midWith: 500, margin: "15rem auto" }}>
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email :
            <input
              type="email"
              {...register("email", {
                required: "Cannot left the field empty",
              })}
            />
          </label>
          {errors.email && (
            <p style={{ color: "crimson" }}>{errors.email.message}</p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password :
            <input
              type="password"
              {...register("password", {
                required: "Cannot left the field empty",
                minLength: {
                  value: 4,
                  message: "Password cannot consist less than 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot consist more than 10 characters",
                },
              })}
            />
            {errors.password && (
              <p style={{ color: "crimson" }}>{errors.password.message}</p>
            )}
          </label>
        </div>
        <div>
          <input type="Submit" value="Submit Form" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
