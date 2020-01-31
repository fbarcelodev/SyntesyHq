import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BoxInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const divCard = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #1DC7EA',
            height: '100px',
            width: '250px',
            borderRadius: '5px',
            margin: '0 auto',
           
        };
        
        const divContent = {
            width: '100%',
            textAlign: 'center',
        }
        
        const priceShow ={
            margin: '0',
        }

        const {title, quantity, isBenefit} = this.props;
        return (
            <div style={divCard} className={'container-box-info'}>
            <div style={divContent}>
                <p>{title}</p>
                {isBenefit ? 
                    <h4 style={priceShow}>{quantity*0.20}€</h4>
                :   <h4 style={priceShow}>{quantity}€</h4> 
                }
            </div>
        </div>
        );
    }
}

BoxInfo.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    isBenefit: PropTypes.bool

};
