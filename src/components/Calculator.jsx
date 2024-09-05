import React,{useState} from "react"


export default function Calculator(props) {
    
    const amountInputStyle = {
        border: props.validate.amount ? "1.5px solid #D83327" : "",
    };
    const amountIconStyle = {
        backgroundColor: props.validate.amount ? "#D83327" : "",
        color: props.validate.amount ? "#fff" : "",
    };

    const termInputStyle = {
        border: props.validate.term ? "1.5px solid #D83327" : "",
    };
    const termSpanStyle = {
        background: props.validate.term ? "#D83327" : "",
        color: props.validate.term ? "#fff" : "",
    };

    const interestInputStyle = {
        border: props.validate.interest ? "1.5px solid #D83327" : "",
    };
    const interestSpanStyle = {
        background: props.validate.interest ? "#D83327" : "",
        color: props.validate.interest ? "#fff" : "",
    };

    const typeLabelStyle = {
        color: props.validate.type ? "#D83327" : "",
    };

    return (
        <div className="calculator_con">
        <div className="calculator_header">
            <h2>Mortgage Calculator</h2>
            <button className="clear_all_btn" onClick={props.click}>Clear All</button>
        </div>
        <div className="calculator_form_con">
            <form className="calculator_form" onSubmit={props.handleSubmit}>
                <div className="mortgage_amount_con">
                    <label htmlFor="mortgage_amount">Mortgage Amount</label>
                    <input
                        type="number"
                        id="mortgage_amount"
                        name="amount"
                        value={props.formData.amount}
                        onChange={props.handleChangee}
                        style={amountInputStyle}
                    />
                    <span className="euro_icon" style={amountIconStyle}>$</span>
                    {props.validate.amount && <q>This field is required</q>}
                </div>
                <div className="term_interest_con">
                    <div className="term_con">
                        <label htmlFor="years">Mortgage Term</label>
                        <input
                            type="number"
                            id="years"
                            name="term"
                            value={props.formData.term}
                            onChange={props.handleChangee}
                            style={termInputStyle}
                        />
                        <span style={termSpanStyle}>years</span>
                        {props.validate.term && <q>This field is required</q>}
                    </div>
                   <div className="rate_con">
                    <label htmlFor="interest">Interest Rate</label>
                    <input
                        type="number"
                        id="interest"
                        name="interest"
                        value={props.formData.interest}
                        onChange={props.handleChangee}
                        style={interestInputStyle}
                    />
                    <span style={interestSpanStyle}>%</span>
                   {props.validate.interest && <q>This field is required</q>}
                   </div>
                </div>
                <div className="type_con">
                    <label>Mortgage Type</label>
                    <div className="repayment">
                        <input
                            type="radio"
                            name="type"
                            id="repayment"
                            value="repayment"
                            onChange={props.handleChangee}
                            checked={props.formData.type === "repayment"}
                        />
                        <div className="input_active"></div>
                        <label htmlFor="repayment">Repayment</label>
                    </div>
                    <div className="interest_only">
                        <input
                            type="radio"
                            name="type"
                            id="interest_type"
                            value="interest_type"
                            onChange={props.handleChangee}
                            checked={props.formData.type === "interest_type"}
                        />
                        <div className="input_active"></div>
                        <label htmlFor="interest_type">Interest Only</label>
                    </div>
                   {props.validate.type && <q>This field is required</q>}
                </div>
                <button className="calculate_btn">Calculate Repayments</button>
            </form>
        </div>
    </div>
    )
}