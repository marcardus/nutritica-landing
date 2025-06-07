import React from "react";

export default function EmailCapture() {
  return (
    <div className="contact-page-wrapper">
      <h3 className="primary-heading">Have a Question in Mind?</h3>
      <h2 className="primary-heading">Let Us Help You</h2>

      <form
        action="https://gmail.us11.list-manage.com/subscribe/post?u=f41d87bcda450b8c817e0401a&id=796ce18d0d&f_id=0014b0e1f0"
        method="POST"
        target="_blank"
        className="contact-form-container"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="youremail@gmail.com"
        
        />
        <button type="submit" className="secondary-button">
          Submit
        </button>
      </form>
    </div>
  );
}
