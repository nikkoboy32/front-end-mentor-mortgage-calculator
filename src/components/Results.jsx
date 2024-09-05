import React from "react"

export default function Results(props) {
    console.log(props.showResult)
    const showMyResult = {
        display: props.showResult ? "none" : "block"
    }

    const showPayment = {
        display: props.showResult ? "block" : "none"
    }

    return (
        <div className="results_con">
            <div className="result_here" style={showMyResult}>
                <figure><img src="/images/illustration-empty.svg" alt="image" /></figure>
                <h2>Results shown here</h2>
                <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
            </div>

            <div className="your_results" style={showPayment}>
                <h2>Your Results</h2>
                <p>Your Results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

                <div className="payments_con" >
                    <div className="payment_result">
                        <p>Your Monthly repayments</p>
                        <h3>${props.result.monthlyPayment}</h3>
                    </div>
                   <div className="total_con">
                    <p>Total you'll repay over the term</p>
                    <h4>${props.result.totalPayment}</h4>
                   </div>
                </div>
            </div>
        </div>
    )
}