import { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [inputObject, setInputObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const type = (buttonName) => {
    const output = calculate(inputObject, buttonName);
    setInputObject({
      total: output.total,
      next: output.next,
      operation: output.operation,
    });
  };
  return (
    <div className="calc-container">
      <div className="calc-heading">
        <h2>Let&apos;s do some Math!</h2>
      </div>
      <div className="calculator">
        <input className="input" placeholder="0" value={`${inputObject.total ? inputObject.total : ''}${inputObject.operation ? inputObject.operation : ''}${inputObject.next ? inputObject.next : ''}`} />
        <div className="buttons">
          <div className="silver">
            <div>
              <button type="button" className="ac" onClick={() => type('AC')}>AC</button>
              <button type="button" className="+/-" onClick={() => type('+/-')}>+/-</button>
              <button type="button" className="%" onClick={() => type(' % ')}>%</button>
            </div>
            <div>
              <button type="button" className="7" onClick={() => type('7')}>7</button>
              <button type="button" className="8" onClick={() => type('8')}>8</button>
              <button type="button" className="9" onClick={() => type('9')}>9</button>
            </div>
            <div>
              <button type="button" className="4" onClick={() => type('4')}>4</button>
              <button type="button" className="5" onClick={() => type('5')}>5</button>
              <button type="button" className="6" onClick={() => type('6')}>6</button>
            </div>
            <div>
              <button type="button" className="1" onClick={() => type('1')}>1</button>
              <button type="button" className="2" onClick={() => type('2')}>2</button>
              <button type="button" className="3" onClick={() => type('3')}>3</button>
            </div>
            <div>
              <button type="button" className="0" onClick={() => type('0')} id="zero">0</button>
              <button type="button" className="." onClick={() => type('.')}>.</button>
            </div>
          </div>
          <div className="orange">
            <button type="button" className="÷" onClick={() => type(' ÷ ')}>÷</button>
            <button type="button" className="x" onClick={() => type(' x ')}>x</button>
            <button type="button" className="-" onClick={() => type(' - ')}>-</button>
            <button type="button" className="+" onClick={() => type(' + ')}>+</button>
            <button type="button" className="=" onClick={() => type('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
