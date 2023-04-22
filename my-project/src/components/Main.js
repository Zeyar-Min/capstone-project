import React from "react";
import GreekSalad from "../images/greek salad.jpg";
import Bruchetta from "../images/bruchetta.svg";
import LemonDessert from "../images/lemon dessert.jpg";

const Main = () => {

    return (
        <main>
            <div class="main">
                <div>
                    <h2>This week Special!</h2>
                </div>
                <div>
                    <button class="btnOnline" type="button">Online Menu</button>
                </div>
            </div>
            <div class="main">
                <div class="special">
                    <img  class="displayImg" src={GreekSalad} alt="Greek Salad"/>
                    <p>
                        Greek Salad : 12.99$
                    </p>
                </div>
                <div class="special">
                    <img  class="displayImg" src={Bruchetta} alt="Bruchetta"/>
                    <p>
                        Greek Salad : 5.99$
                    </p>
                </div>
                <div class="special">
                    <img  class="displayImg" src={LemonDessert} alt="Lemon Dessert"/>
                    <p>
                        Greek Salad : 5.00$
                    </p>
                </div>
            </div>
        </main>
    );

}

export default Main;