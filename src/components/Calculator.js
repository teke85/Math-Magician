import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../index.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handlePress = (e) => {
    const number = e.target.innerText;
    setState((state) => calculate(state, number));
  };

  const { total, next, operation } = state;

  return (
    <div className="calc container justify-content-center">
      <div className="row mt-5">
        <div className="col-6">
          <h1 className="display-5 fw-bolder text-left">Lets do some Math!</h1>
        </div>
        <div className="col-6">
          <div className="card mb-3">
            <div className="card-body bg">
              <div className="col-md-12 display num">
                <span>{total}</span>
                <span>{operation}</span>
                <span>{next}</span>
              </div>
              <div className="row d-flex justify-content-between mt-2">
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    AC
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    +/-
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    %
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light orange shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    ÷
                  </button>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    7
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    8
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    9
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light orange shadow px-2 py-4 p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    x
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-1">
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    4
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    5
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    6
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light orange shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-1">
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    1
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    2
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    3
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light orange shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-between mt-1">
                <div className="col-6">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    0
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    .
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light orange shadow p-4 fs-4"
                    type="button"
                    onClick={handlePress}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
