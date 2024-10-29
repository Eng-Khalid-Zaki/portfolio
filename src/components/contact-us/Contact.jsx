import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import "./contact.css";

export default function Contact({ theme, screenWidth }) {
  const formik = useFormik({
    initialValues: { email: "", message: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form values:", values);
      emailjs
        .send(
          "service_dbvl3le",
          "template_l9ba53h",
          values,
          "giPwA4G1sHFizEMMt"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            resetForm(); // Reset the form after successful submission
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Failed to send message. Error: " + error.text);
          }
        );
    },
  });

  return (
    <section className="devider contact">
      <div className="contact-header">
        <h3>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          Contact Us
        </h3>
        <p>
          Contact Us for more information and get notified when I publish
          something new
        </p>
      </div>
      <div className="contact-content">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </div>
          <button type="submit" className={theme === "light" ? "light" : ""}>
            Submit
          </button>
        </form>
        {screenWidth > 768 && <div className="animation">ANIMATION</div>}
      </div>
    </section>
  );
}
