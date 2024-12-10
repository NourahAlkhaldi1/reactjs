import React, { useState } from 'react';
import './App.css';
import './components/Converter.css';

const App = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (!amount||!fromCurrency||!toCurrency) {
      alert('يرجى إدخال جميع الحقول');
      return;
    }

    const conversionRate = getConversionRate(fromCurrency, toCurrency);
    const convertedAmount = amount * conversionRate;

    setResult(convertedAmount.toFixed(2));
  };

  const getConversionRate = (from, to) => {
    const rates = {
      USD: 1,
      KSA: 3.75,
      EUR: 0.85,
      JPY: 110,
      QAR: 3.64,
      AED: 3.67,
      BHD: 0.38,
      INR: 74,
      KRW: 1180,
      CNY: 6.45,
      PHP: 50,
      IDR: 14200,
      LKR: 200,
    };

    return rates[to] / rates[from];
  };

  return (
    <div className="App">
      {/* particles  */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      {/*  converter container */}
      <div className="converter-container">
        <h1>تحويل العملات</h1>
        
        <div className="input-group">
          <label htmlFor="amount">ادخل المبلغ المراد تحويله:</label>
          <input
            id="amount"
            type="number"
            className="input-field"
            placeholder="أدخل المبلغ"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="currency-selector">
          <span>من</span>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="">اختر العملة</option>
            <option value="USD">USD - دولار أمريكي</option>
            <option value="KSA">KSA - ريال سعودي</option>
            <option value="EUR">EUR - يورو</option>
            <option value="JPY">JPY - ين ياباني</option>
            <option value="QAR">QAR - ريال قطري</option>
            <option value="AED">AED - درهم إماراتي</option>
            <option value="BHD">BHD - دينار بحريني</option>
            <option value="INR">INR - روبية هندية</option>
            <option value="KRW">KRW - وون كوري</option>
            <option value="CNY">CNY - يوان صيني</option>
            <option value="PHP">PHP - بيسو فلبيني</option>
            <option value="IDR">IDR - روبية إندونيسية</option>
            <option value="LKR">LKR - روبية سريلانكية</option>
          </select>
          <span>إلى</span>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="">اختر العملة</option>
            <option value="USD">USD - دولار أمريكي</option>
            <option value="KSA">KSA - ريال سعودي</option>
            <option value="EUR">EUR - يورو</option>
            <option value="JPY">JPY - ين ياباني</option>
            <option value="QAR">QAR - ريال قطري</option>
            <option value="AED">AED - درهم إماراتي</option>
            <option value="BHD">BHD - دينار بحريني</option>
            <option value="INR">INR - روبية هندية</option>
            <option value="KRW">KRW - وون كوري</option>
            <option value="CNY">CNY - يوان صيني</option>
            <option value="PHP">PHP - بيسو فلبيني</option>
            <option value="IDR">IDR - روبية إندونيسية</option>
            <option value="LKR">LKR - روبية سريلانكية</option>
          </select>
        </div>
        
        <button className="convert-button" onClick={handleConvert}>
          تحويل المبلغ
        </button>

        {result && <div className="result">النتيجة: {result}</div>}
      </div>
    </div>
  );
};

export default App;