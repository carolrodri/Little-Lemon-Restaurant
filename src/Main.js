import React from "react";
import imagemParaMain from './assets/restauranfood.jpg'
import GreekSalada from './assets/greeksalad.jpg'
import Bruschetta from './assets/bruschetta.png'
import LemonDessert from './assets/lemondessert.jpg'

function Main() {
    return (
        <main>
            <section className="hero-section">
            <div className="main-content-wrapper">

                <div className="text-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Bringing the sunny and authentic flavors of the Mediterranean to the heart of Chicago. Little Lemon combines traditional recipes with a contemporary touch in a welcoming atmosphere. A genuinely fresh experience awaits you.</p>
            <button>Reserve a table</button>
                </div>
            
            <div className="image-content">
            <img src={imagemParaMain} alt="A delicious dish from Little Lemon restaurant" className="main-image"></img>
            </div>
            </div>
        </section>

        <section className="specials-section">
            <h2>This Week Specials</h2>
            <div className="dish-cards-container">
            <div className="dish-card">
                <img src={GreekSalada} alt="A delicious Greek Salad" className="dish-image"></img>
                <h3>Greek Salad</h3>
                <p className="dish-price">$12.99</p>
                <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <p className="dish-delivery">Order a delivery</p>
            </div>

            <div className="dish-card">
                <img src={Bruschetta} alt="A delicious Bruschetta" className="dish-image"/>
                <h3>Bruschetta</h3>
                <p className="dish-price">$5.99</p>
                <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <p className="dish-delivery">Order a delivery</p>
            </div>

            <div className="dish-card">
                <img src={LemonDessert} alt="A delicious Lemon Dessert" className="dish-image"></img>
                <h3>Lemon Dessert</h3>
                <p className="dish-price">$5.00</p>
                <p className="dish-description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <p className="dish-delivery">Order a delivery</p>
            </div>
            </div>
        </section>
        </main>
    );
}

export default Main;