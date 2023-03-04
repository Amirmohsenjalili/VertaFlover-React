import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from "./Card.module.css";
import Down from "../images/down.svg"
import Up from "../images/up.svg"



class Card extends Component {

constructor () {
    super();
    this.state = {
        counter: 0,
    }
}

downHandler = () => {
    if (this.state.counter >= 1) {
        this.setState(prevState => ({
            counter: prevState.counter - 1,
        }))
    }
}

upHandler = () => {
    this.setState (prevState => ({
        counter: prevState.counter + 1,
    }))
}

    render() {
        const {image, name, cost, id} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="flower"/>
                <h3>
                    <Link to={`/products/${id}`}>{name}</Link>
                </h3>
                <p>{cost} {counter ? `* ${counter} = ${Number(cost.split(" ")[0]) * counter} $ ` : "" }</p>

                <div className={styles.counter}>
                    <img className={!counter ? styles.diactive : ""} src={Down} alt="arrow" onClick={this.downHandler}/>
                    <span>{counter}</span>
                    <img src={Up} alt="arrow" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;