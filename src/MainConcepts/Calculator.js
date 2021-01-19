import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props){
    if (props.celsius >= 100) {
        return <p>The water will boil.</p>
    }
    return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

export default Calculator;