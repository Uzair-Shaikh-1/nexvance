import { useState } from "react";

const Field = ({ label, ...props }) => (
  <div className="field">
    <label className="label">{label}</label>
    <input className="input" {...props} />
  </div>
);

export default function Contact() {
  const [who, setWho] = useState("Brand");
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-intro">
          <span className="pill">Contact</span>
          <h1 className="t-contact">Let’s build something together.</h1>
          <p className="t-lead">
            Tell us about your brand or your audience and we will get back to
            you.
          </p>
          <span className="t-eyebrow">Reach us directly</span>
          <div className="chips">
            <a className="chip" href="mailto:hello@nexvance.com">
              Email
            </a>
            <a className="chip" href="#">
              LinkedIn
            </a>
            <a className="chip" href="#">
              Instagram
            </a>
          </div>
        </div>
        <form className="form-card" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <span className="label">I am a</span>
            <div className="chips">
              {["Brand", "Creator"].map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`chip${who === c ? " is-selected" : ""}`}
                  onClick={() => setWho(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <Field label="Name" type="text" placeholder="Your name" />
          <Field label="Email" type="email" placeholder="you@example.com" />
          <Field
            label="Company or handle"
            type="text"
            placeholder="Company or @handle"
          />
          <div className="field">
            <label className="label">Message</label>
            <textarea className="input" placeholder="Tell us what you need" />
          </div>
          <button className="btn btn--primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
