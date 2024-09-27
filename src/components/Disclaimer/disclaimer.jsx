import "./style.css";

export const Disclaimer = () => {
  return (
    <div className="disclaimer" id="disclaimer">
      <div className="square">
        <div className="disclaimer_container">
          <div className="age_limit">18+</div>
          <h1 className="danger">Disclaimer</h1>
        </div>
        <p className="warning">
          Our website is intended for individuals aged 18 and over (or older,
          depending on the legal requirements of your country). Participation in
          gambling by minors is strictly prohibited. Any violation of this rule
          may result in restricted access to the site and other legal
          consequences. We encourage responsible gambling and recommend using
          self-control tools if necessary.
        </p>
      </div>
    </div>
  );
};
