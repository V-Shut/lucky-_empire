import "./style.css";
import { Disclaimer } from "../Disclaimer/disclaimer";

const numbers = Array(12)
  .fill(0)
  .map((_, index) => index);

export const Home = () => {
  return (
    <div className="base">
      <div className="preview_content">
        <h1 className="text">
          Explore Endless Adventures with Free Online Games
        </h1>
        <img className="preview" src="preview.png" alt="previev" />
        <p className="text">
          Immerse yourself in a world of diverse and thrilling online games, all
          available for free. No downloads, no restrictions—just pure gaming fun
          for everyone.
        </p>
      </div>

      <div className="games_list">
        <h1 className="text" id="games">Games collection</h1>
        <div className="slots">
          {numbers.map((number) => (
            <img key={number} className="game" src={`game-${number}.png`} alt="previev" />
          ))}
        </div>
      </div>

      <div className="about" id="about">
        <h1 className="text new">About us</h1>
        <p className="text new">
          Welcome to [Casino Name]—your premier destination for thrilling online
          gaming experiences! We are a passionate team dedicated to providing
          you with a unique entertainment experience from around the world.
        </p>

        <div className="about_container">
          <div className="text_container">
            <h1 className="text new">Mission</h1>
            <p className="text new">
              Our mission is to create the perfect environment for gambling that
              combines safety, fairness, and excitement. We strive to offer our
              players the highest level of service, a diverse range of games,
              and exhilarating promotions.
            </p>
          </div>

          <div className="text_container">
            <h1 className="text new">Why Choose Us?</h1>

            <p className="text new">
              We offer a wide variety of games—from classic card games to modern
              slots and live casino experiences. There’s something for everyone!
            </p>
            <p className="text new">
              Reliability and Security: Your data and funds are safe with us. We
              utilize advanced encryption and security technologies to ensure
              maximum protection.
            </p>

            <p className="text new">
              Bonuses and Promotions: Enjoy generous bonuses and promotions for
              both new and loyal players. Join us to take advantage of exclusive
              offers!
            </p>

            <p className="text new">
              24/7 Support: Our support team is always ready to assist you. You
              can reach out to us anytime via chat, email, or phone.
            </p>
          </div>

          <div className="text_container">
            <h1 className="text new">Philosophy</h1>
            <p className="text new">
              We believe that gambling should be fun and responsible. Therefore,
              we encourage our players to play responsibly and provide all the
              necessary resources to manage their spending.
            </p>
          </div>
        </div>
      </div>

      <Disclaimer />
    </div>
  );
};
