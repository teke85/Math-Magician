import React from 'react';
import '../index.css';

// Create a Class Component Calculator.
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-12">
            <h1 className="display-5 fw-bolder text-center">CALCULATOR</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="col-md-12 display num">0</div>
                <div className="row d-flex justify-content-between mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      AC
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      +/-
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      %
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light orange shadow p-4 fs-4"
                      type="button"
                    >
                      /
                    </button>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      7
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      8
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      9
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light orange shadow px-2 py-4 p-4 fs-4"
                      type="button"
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-between mt-5">
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      4
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      5
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      6
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light orange shadow p-4 fs-4"
                      type="button"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-between mt-5">
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      1
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      2
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      3
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light orange shadow p-4 fs-4"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-between mt-5">
                  <div className="col-6">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      0
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light shadow p-4 fs-4"
                      type="button"
                    >
                      .
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light orange shadow p-4 fs-4"
                      type="button"
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
  }
}

export default Calculator;
