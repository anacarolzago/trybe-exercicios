// https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables
import React from "react";
import { CreditCardData } from "../App";
import "./form.css";
import "./input-label.css"

type FormProps = {
  data: CreditCardData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isValidForm: boolean;
};

function Form(props: FormProps) {

  const { handleInputChange, data, handleSubmit, isValidForm } = props

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          className="form__control"
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form__group">
        <label htmlFor="number">Card Number</label>
        <input
          className="form__control"
          type="tel"
          name="number"
          id="number"
          value={data.number}
          onChange={handleInputChange}
        />
      </div>

      <div className="row">
        <div className="form__group">
          <label htmlFor="expiry">expiry (mm/yy)</label>
          <input
            className="form__control"
            type="text"
            name="expiry"
            id="expiry"
            value={data.expiry}
            onChange={handleInputChange}
          />
        </div>

        <div className="form__group">
          <label htmlFor="cvc">cvc</label>
          <input
            className="form__control"
            type="text"
            name="cvc"
            id="cvc"
            value={data.cvc}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button type="submit" disabled={!isValidForm}>
        Cadastrar
      </button>
    </form>
  );
}

export default Form;
