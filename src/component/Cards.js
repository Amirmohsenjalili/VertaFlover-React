import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from './Card';
import laleh from "../images/laleh.jpg"
import orc from "../images/orc.jpg"
import roz from "../images/roz.jpg"
import zhips from "../images/zhips.jpg"
// import {v4} from "uuid"

class Cards extends Component {

    constructor () {
        super()
        this.state = {
            flowerData: [
                {id: 1,image:laleh, name:"Laleh flower", cost:"5 $"},
                {id: 2,image:orc, name:"Orkideh flower", cost:"12 $"},
                {id: 3,image:roz, name:"Roz flower", cost:"6 $"},
                {id: 4,image:zhips, name:"Zhipsfolia flower", cost:"4 $"}  
            ]
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {/* <Card image={laleh} name="Laleh flower" cost="5 $" />
                <Card image={orc} name="Orkideh flower" cost="12 $" />
                <Card image={roz} name="Roz flower" cost="6 $" />
                <Card image={zhips} name="Zhipsfolia flower" cost="4 $" /> */}
                {this.state.flowerData.map(flower =>
                    <Card 
                        key={flower.id}
                        image={flower.image}
                        name={flower.name}
                        cost={flower.cost}
                        id={flower.id}
                    />
                )}
            </div>
        );
    }
}

export default Cards;