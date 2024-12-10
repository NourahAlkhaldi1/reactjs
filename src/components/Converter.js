import React, { useState } from 'react';
import './Converter.css';

const exchangeRates = {
  USD: { EUR: 0.84, JPY: 110.53, SAR: 3.75 },
  EUR: { USD: 1.19, JPY: 131.21, SAR: 4.46 },
  JPY: { USD: 0.0091, EUR: 0.0076, SAR: 0.034 },
  SAR: { USD: 0.27, EUR: 0.22, JPY: 29.52 }
};

const currencyOptions = {
  USD: 'دولار أمريكي (USA)',
  EUR: 'يورو (EU)',
  JPY: 'ين ياباني (JPN)',
  SAR: 'ريال سعودي (KSA)'
};

const Converter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className="converter-container">
      <h1>محول العملات</h1>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="أدخل المبلغ" 
        className="input-field"
      />
      <div className="currency-selector">
        <span className="label">من</span>
        <select 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)} 
          className="select-field"
        >
          {Object.keys(currencyOptions).map((currency) => (
            <option key={currency} value={currency}>
              {currencyOptions[currency]}
            </option>
          ))}
        </select>
        <span className="label">إلى</span>
        <select 
          value={toCurrency} 
          onChange={(e) => setToCurrency(e.target.value)} 
          className="select-field"
        >
          {Object.keys(currencyOptions).map((currency) => (
            <option key={currency} value={currency}>
              {currencyOptions[currency]}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConvert} className="convert-button">تحويل</button>
      {convertedAmount !== null && (
        <div className="result">
          <p>{amount} {currencyOptions[fromCurrency]} = {convertedAmount} {currencyOptions[toCurrency]}</p>
        </div>
      )}
    </div>
  );
};

export default Converter;