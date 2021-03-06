import React from "react";

import {
  length,
  area,
  mass,
  volume,
  temperature,
  speed,
  voltage,
  force,
  acceleration,
  digital,
} from "units-converter";
import * as converter from "units-converter";

import "./Measurement.css";
class mesaurements extends React.Component {
  constructor(props) {
    super(props);
    const prefijosDefault = length().list();
    this.state = {
      valueMagnitud: "length",
      valuePrefijos: prefijosDefault,
      button: false,
      entrada: prefijosDefault[0].unit,
      salida: prefijosDefault[0].unit,
      value: 0.0,
      result: 0.0,
    };

    this.changeUnits = this.changeUnits.bind(this);
    this.validatorInput = this.validatorInput.bind(this);
    this.calcularMedida = this.calcularMedida.bind(this);
    this.cambiaMedida = this.cambiaMedida.bind(this);
  }

  changeUnits(event) {

    this.setState({
      valueMagnitud: event.target.value,
    });
    let prefijos = null;
    // eslint-disable-next-line default-case
    switch (event.target.value) {
      case "length":
        prefijos = length().list();
        break;
      case "area":
        prefijos = area().list();
        break;
      case "mass":
        prefijos = mass().list();
        break;
      case "volume":
        prefijos = volume().list();
        break;
      case "temperature":
        prefijos = temperature().list();
        break;
      case "speed":
        prefijos = speed().list();
        break;
      case "voltage":
        prefijos = voltage().list();
        break;
      case "force":
        prefijos = force().list();
        break;
      case "acceleration":
        prefijos = acceleration().list();
        break;
      case "digital":
        prefijos = digital().list();
        break;
    }
    this.setState({
      valuePrefijos: prefijos,
      entrada: prefijos[0].unit,
      salida: prefijos[0].unit,
    });
  }
  validatorInput(event) {
    const isValidForDecimal = /^(\d+)$|^(\d+\.{1}\d{2})$/;
    const isValidForEntero = /^(\d+)$/;
    const value_input = event.target.value;

    if (
      isValidForDecimal.test(value_input) ||
      isValidForEntero.test(value_input)
    ) {
      if (!this.state.button) {
        this.setState({
          button: !this.state.button,
        });
      }
    } else {
      if (this.state.button) {
        this.setState({
          button: !this.state.button,
        });
      }
    }

    if (!this.state.button) {
      const valor = parseFloat(event.target.value);
      console.log("Valor: ", valor);
      if (!this.state.button) {
        this.setState({
          value: valor,
        });
      }
    }
  }


  calcularMedida(event) {
    event.preventDefault();

    let resultado = 0;
    // eslint-disable-next-line default-case
    switch (this.state.valueMagnitud) {
      case "length":
        resultado = converter
          .length(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;
        break;
      case "area":
        resultado = converter
          .area(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "mass":
        resultado = converter
          .mass(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;
        break;
      case "volume":
        resultado = converter
          .volume(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "temperature":
        resultado = converter
          .temperature(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "speed":
        resultado = converter
          .speed(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "voltage":
        resultado = converter
          .voltage(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "force":
        resultado = converter
          .force(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "acceleration":
        resultado = converter
          .acceleration(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
      case "digital":
        resultado = converter
          .digital(this.state.value)
          .from(this.state.entrada)
          .to(this.state.salida).value;

        break;
    }
    this.setState({
      result: resultado,
    });
    console.log("resultado", resultado);
    console.log(this.state);
  }
  cambiaMedida(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    // eslint-disable-next-line no-undef
    const unit = this.state.valuePrefijos.map((pre) => {
      return (
        <option key={pre.unit} value={pre.unit}>
          {pre.unit}
        </option>
      );
    });
    let result = null;
    if (this.state.result === 0) {
      result = <p className="resultado">0.00</p>;
    } else {
      result = <p className="resultado">{this.state.result}</p>;
    }
    return (
      <div className="card m-5 p-2 shadow">
        <div className="card-body">
          <h5 className="card-title text-center">Tranformación de unidades</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Realiza un cálculo rápido al transformar tus unidades de medida
          </h6>
          <form onSubmit={this.calcularMedida}>
            <div className="d-flex bd-highlight">
              <div className=" mr-3 flex-fill bd-highlight">
                <label htmlFor="magnitud">Magnitud física: </label>
                <select
                  className="form-control"
                  name="medida"
                  defaultValue={this.state.valueMagnitud}
                  onChange={this.changeUnits}
                  id="magnitud"
                >
                  <option value="length">Longitud</option>
                  <option value="area">Área</option>
                  <option value="mass">Masa</option>
                  <option value="volume">Volumen</option>
                  <option value="temperature">Temperatura</option>
                  <option value="speed">Velocidad</option>
                  <option value="voltage">Voltaje</option>
                  <option value="force">Fuerza</option>
                  <option value="acceleration">Aceleración</option>
                  <option value="digital">Digital</option>
                </select>
              </div>
              <div className="flex-fill bd-highlight">
                <label htmlFor="unit">Ingrese valor: </label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">
                      0.00
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.validatorInput}
                    
                    id="unit"
                    name="value"
                    aria-describedby="basic-addon3"
                  />
                </div>
              </div>
            </div>

            <p>Tansformar de: </p>
            <div className="d-flex bd-highlight">
              <div className="flex-fill bd-highlight">
                <select
                  className="form-control"
                  defaultValue={this.state.valuePrefijos[0].unit}
                  onChange={this.cambiaMedida}
                  name="entrada"
                >
                  {unit}
                </select>
              </div>
              <div className=" pt-2 flex-fill bd-highlight">
                <p className="text-center">A</p>
              </div>
              <div className="flex-fill bd-highlight">
                <select
                  className="form-control"
                  defaultValue={this.state.valuePrefijos[0].unit}
                  onChange={this.cambiaMedida}
                  name="salida"
                >
                  {unit}
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-block btn-primary"
                type="submit"
                disabled={!this.state.button}
              >
                Calcular
              </button>
              <h3 className="mt-2 font-weight-bolder">Resultado: </h3>
              {result}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default mesaurements;
