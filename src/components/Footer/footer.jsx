import "./style.css";

export const Footer = () => {
  return (
    <div className="footer" id="contacts">
      <div className="footer_container">
        <a href="">
          <img className="social" src="facebook.png" alt="twitter" />
        </a>
        <a href="">
          <img className="social" src="twitter.png" alt="twitter" />
        </a>
        <a href="">
          <img className="social" src="instagram.png" alt="twitter" />
        </a>
        <a href="">
          <img className="social" src="telegram.png" alt="twitter" />
        </a>
        <a href="">
          <img className="social" src="linkedin.png" alt="twitter" />
        </a>
      </div>

      <div className="footer_container">
        <span className="footer_text">Games</span>
        <span className="footer_text">Terms</span>
        <span className="footer_text">Policy</span>
        <span className="footer_text">About</span>
      </div>
    </div>
  );
};
