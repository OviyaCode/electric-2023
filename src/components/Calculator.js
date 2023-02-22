import React, { useState } from 'react';

function Calculator() {
    const [unit, setUnit] = useState('0');
    const [fixedPrice, setFixedPrice] = useState(0);
    const [energyCharge, setEnergyCharge] = useState(0);


    const onChangeHandle = (e) => {
        const unit = e.target.value;
        setUnit(unit);
    }

    const calc = (e) => {

        e.preventDefault();
        let units = parseInt(unit);
        let consumption = units;

        if (consumption > 0 && consumption <= 60) {
            if (units <= 30 && units > 0) {
                setFixedPrice(400);
                setEnergyCharge(30 * units)
            }
            else if (units >= 30 && units <= 60) {
                let block0 = 30
                let block1 = units - block0;
                let total = (block0 * 30) + (block1 * 37);
                setEnergyCharge(total);
                setFixedPrice(550)

            }
        }

        if (consumption > 60) {
            if (units > 0 && units <= 90) {
                let block0 = 60;
                let block1 = units - block0;
                let total = ((block0 * 42) + (block1 * 42))
                setEnergyCharge(total)
                setFixedPrice(650)
            }
            else if (units >= 91 && units <= 180) {
                let block0 = 90;
                let block1 = units - block0;
                let total = ((block0 * 42) + (block1 * 50))
                setEnergyCharge(total)
                setFixedPrice(1500)
            }
            else if (units >= 181) {
                let outerbase = 180;
                let exceed = units - outerbase;
                let innerbase = 90;
                let innerexceed = outerbase - innerbase;
                let innercalc = (innerbase * 42) + (innerexceed * 50)
                let outercalc = innercalc + (exceed * 75);
                setEnergyCharge(outercalc)
                setFixedPrice(2000)
            }


        }


    }

    let subtotal = (fixedPrice + energyCharge);

    let finalAmu=subtotal+Math.ceil(((fixedPrice + energyCharge) * 2.5009636533) / 100)

    return (
        <div className='calc'>
            <h3>Calculate your electricity bill</h3>
            <div className='container'>

                <label>No of Units :</label> <input type="number" value={unit} onChange={onChangeHandle} /> &nbsp;
                <button onClick={calc}> Calculate</button> <br />
            </div>
            <div>
                <div className='table-box'>
                    <table border={1} align={'center'}>
                        <thead>
                            <tr>

                                <th>Fixed Price</th>
                                <th>Energy charge</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>


                                <td>{fixedPrice}</td>
                                <td>{energyCharge}</td>
                                <td>{subtotal}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <p>You have to pay LKR {finalAmu}.00 including the 2.5 % SSCL tax</p>
            </div>
        </div>
    );
}

export default Calculator;
