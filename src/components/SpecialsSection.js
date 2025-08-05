import GreekSalada from '../assets/greeksalad.jpg';
import Bruschetta from '../assets/bruschetta.png';
import LemonDessert from '../assets/lemondessert.jpg';
import Bike from '../assets/bike.png';

function SpecialsSection() {
    return (
<section className="specials-section">
                <div className="specials-header">
                    <h2>This Week Specials</h2>
                    <button className="menu-button">Menu</button>
                </div>
                <div className="dish-cards-container">
                    <div className="dish-card">
                        <img src={GreekSalada} alt="A delicious Greek Salad" className="dish-image" />
                        <h3>Greek Salad</h3>
                        <p className="dish-price">$12.99</p>
                        <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p className="dish-delivery">
                            <span>Order a delivery</span>
                            <img src={Bike} alt="Delivery Icon" className="delivery-icon" />
                        </p>
                    </div>
                    <div className="dish-card">
                        <img src={Bruschetta} alt="A delicious Bruschetta" className="dish-image" />
                        <h3>Bruschetta</h3>
                        <p className="dish-price">$5.99</p>
                        <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p className="dish-delivery">
                            <span>Order a delivery</span>
                            <img src={Bike} alt="Delivery Icon" className="delivery-icon" />
                        </p>
                    </div>
                    <div className="dish-card">
                        <img src={LemonDessert} alt="A delicious Lemon Dessert" className="dish-image" />
                        <h3>Lemon Dessert</h3>
                        <p className="dish-price">$5.00</p>
                        <p className="dish-description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p className="dish-delivery">
                            <span>Order a delivery</span>
                            <img src={Bike} alt="Delivery Icon" className="delivery-icon" />
                        </p>
                    </div>
                </div>
            </section>
    );
}

export default SpecialsSection;