import Fivestar from '../assets/5estrelas.png';
import Fourstar from '../assets/4estrelas.png';
import Adria from '../assets/Adria.jpg';
import Benjamin from '../assets/Benjamin.jpg';
import Teona from '../assets/Teona.jpg';

function TestimonialsSection() {
    return (
<section className="opinion-section">
                <h2>What our customers say!</h2>
                <div className="opinion-container">
                    <div className="opinion-card">
                        <img src={Fivestar} alt="5 star review" className="rating-stars" />
                        <div className="profile-info">
                            <img src={Adria} alt="Adria" className="profile-image" />
                            <div className="profile-details">
                                <span className="profile-name">Adria</span>
                                <span className="profile-age">42 anos</span>
                            </div>
                        </div>
                        <p>"Little Lemon is my favorite spot in Chicago!..."</p>
                    </div>
                    <div className="opinion-card">
                        <img src={Fourstar} alt="4 star review" className="rating-stars" />
                        <div className="profile-info">
                            <img src={Benjamin} alt="Benjamin" className="profile-image" />
                            <div className="profile-details">
                                <span className="profile-name">Benjamin</span>
                                <span className="profile-age">27 anos</span>
                            </div>
                        </div>
                        <p>"Delicious food and a super cool vibe..."</p>
                    </div>
                    <div className="opinion-card">
                        <img src={Fivestar} alt="5 star review" className="rating-stars" />
                        <div className="profile-info">
                            <img src={Teona} alt="Teona" className="profile-image" />
                            <div className="profile-details">
                                <span className="profile-name">Teona</span>
                                <span className="profile-age">62 anos</span>
                            </div>
                        </div>
                        <p>"What a charming place! From the moment we walked in..."</p>
                    </div>
                </div>
            </section>
    );
}

export default TestimonialsSection;