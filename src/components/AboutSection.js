import AdrianandMario from '../assets/MarioandAdrian.jpg';
import Chef from '../assets/restaurantchef.jpg';

function AboutSection() {
    return (
 <section className="about-section">
                <div className="about-text">
                    <h2>About Little Lemon</h2>
                    <p>Founded by Adrian, Little Lemon is a dream come true: to bring the authentic flavors of the Mediterranean to Chicago. This vision comes to life every day thanks to our team, masterfully led by Mario, who ensures impeccable service and a consistently welcoming atmosphere. From classic dishes to modern creations, our menu is designed to appeal to all tastes.</p>
                </div>
                <div className="about-image">
                    <img src={AdrianandMario} alt="Adrian and Mario" className="OwnerandChef-image" />
                    <img src={Chef} alt="Chef Mario" className="chef-image" />
                </div>
            </section>
    );
}

export default AboutSection;