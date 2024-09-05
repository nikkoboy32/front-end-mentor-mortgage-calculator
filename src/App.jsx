import { useState } from 'react'
import Calculator from './components/Calculator'
import Results from './components/Results'


function App() {
  
  const [formData, setFormData] = useState ({
    amount: "",
    term: "",
    interest: "",
    type: ""
})
const [validate, setValidate] = useState({
  amount: false,
  term: false,
  interest: false,
  type: false,
});

const [showResult, setShowResult] = useState(false)

function handleClick() {
  setFormData({
    amount: "",
    term: "",
    interest: "",
    type: ""
  })

  setValidate({
    amount: false,
    term: false,
    interest: false,
    type: false,
  });

  setShowResult(false)
}

const [results, setResults] = useState({
  monthlyPayment: null,
  totalPayment: null
});

function handleChange(e) {
  const { value, name, type } = e.target;
  const newValue = type === "number" ? (value === "" ? "" : Number(value)) : value;

  setFormData(prev => ({
      ...prev,
      [name]: newValue
  }));
}



function calculate() {
  const { amount, term, interest, type } = formData;
  const amountNumber = Number(amount);
  const termNumber = Number(term);
  const interestNumber = Number(interest) / 100;

  let monthlyPayment = 0;
  let totalPayment = 0;

  console.log(`Amount: ${amountNumber}, Term: ${termNumber}, Interest: ${interestNumber}, Type: ${type}`);

  if (type === "repayment") {
      const monthlyInterest = interestNumber / 12;
      const numberOfPayments = termNumber * 12;

      console.log(`Monthly Interest Rate: ${monthlyInterest}, Number of Payments: ${numberOfPayments}`);

      if (monthlyInterest === 0) {
          monthlyPayment = amountNumber / numberOfPayments;
      } else {
          monthlyPayment = (amountNumber * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
      }

      totalPayment = monthlyPayment * numberOfPayments;
  } else if (type === "interest_type") {
      const monthlyInterest = interestNumber / 12;

      console.log(`Monthly Interest Rate: ${monthlyInterest}`);

      monthlyPayment = amountNumber * monthlyInterest;
      totalPayment = monthlyPayment * termNumber * 12;
  }

  console.log(`Monthly Payment: ${monthlyPayment}, Total Payment: ${totalPayment}`);

  setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2)
  });


}


function handleSubmit(e) {
    e.preventDefault()

    const newValidate = {
      amount: formData.amount === "",
      term: formData.term === "",
      interest: formData.interest === "",
      type: formData.type === "",
    };

    setValidate(newValidate);

    const result = Object.values(newValidate).every(item => {
      return item === false
   })

   if(result) {
    calculate()
    setShowResult(true)
   } else {
    setShowResult(false)
   }

}



  return (
    <div className='container'>
      <Calculator 
        handleChangee={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        validate={validate}
        click={handleClick}
      />
      <Results result={results} showResult={showResult}/>
    </div>
  )
}

export default App
