import React from 'react';
import Card from '../Card';
import bebida_img from '../../assets/images/bebida_img.jpeg';


export default function LastProduct() {

    return(
        <Card >
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "40rem" }} src={bebida_img} alt=" Monkey Shoulder Whisky " />
            </div>
            <div>
            <p>Whisky Monkey es un excelente whisky de malta mezclado de William Grant, hecho con maltas individuales de tres famosas destilerías de Speyside. El resultado es un whisky escocés suave, cremoso, flexible y muy maltoso que funciona excelentemente limpio, sobre hielo o en cócteles de whisky (donde realmente sobresale)
</p>
            </div>
        </Card>
    )
}