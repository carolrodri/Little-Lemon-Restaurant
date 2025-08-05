import React from 'react';
import imagemParaMain from '../assets/restauranfood.jpg';

function HeroSection() {
    return (
<section className="hero-section">
    <div className="main-content-wrapper">
        <div className="text-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Bringing the sunny and authentic flavors of the Mediterranean to the heart of Chicago. Little Lemon combines traditional recipes with a contemporary touch in a welcoming atmosphere. A genuinely fresh experience awaits you.</p>
            <button>Reserve a table</button>
        </div>
            <div className="image-content">
                <img src={imagemParaMain} alt="A delicious dish from Little Lemon restaurant" className="main-image" />
            </div>
    </div>
</section>
  );
}

export default HeroSection;