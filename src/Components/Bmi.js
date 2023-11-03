import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './Bmi.css';

export default function Bmi() {
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [Bmi, setBmi] = useState('');
    const [Message, setMessage] = useState('');


    const submit = (e) => {
        e.preventDefault();

        if (parseFloat(Height) === 0 || parseFloat(Weight) === 0) {
          setMessage("Enter The valid Measurement");
          setBmi('invalid');
          return;
      }


        if (isNaN(Height) || isNaN(Weight)) {
            setMessage("Enter the Number");
            setBmi('');
            return;
        }

        const calculatedBmi = (parseFloat(Weight) / ((parseFloat(Height * parseFloat(Height))) / 10000)).toFixed(2);
        setBmi(calculatedBmi);

        let calculatedMessage = '';
        if (calculatedBmi < 18.5) {
            calculatedMessage = "You Are Under Weight";
        } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
            calculatedMessage = "You Are Normal Weight";
        } else if (calculatedBmi <= 25 && calculatedBmi < 30) {
            calculatedMessage = "You Are OverWeight";
        } else {
            calculatedMessage = "Obese";
        }

        setMessage(calculatedMessage);
        setHeight("");
        setWeight("");
    };

    const erase = () => {
        setBmi("");
        setMessage('');
        setHeight("");
        setWeight("");
    };

    return (
        <div className='row p-2' id='form'>
            <div className='col-lg-6 col-12 ' id='form-row'>
                <h4>BMI CALCULATOR</h4>
               
                <label>(in cms)</label>
                <Form.Control
                    value={Height}
                    onChange={(e) => setHeight(e.target.value)}
                    className='form'
                    id='form-input'
                    size="sm"
                    type="text"
                    placeholder="Enter the Height"
                />
                <label>(in kg)</label>
                <Form.Control
                    value={Weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className='form'
                    id='form-input'
                    size="sm"
                    type="text"
                    placeholder="Enter the Weight"
                />
                <input className='btn-submit' type='submit' onClick={submit} />
                <button className='btn-reload' onClick={erase}>Reload</button>
               
                <p className='p_2'>Your BMI: {Bmi}</p>
                <p className= "p_3">{Message}</p>
            </div>
        </div>
    );
}
