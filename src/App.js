
import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { AiOutlineSwap } from "react-icons/ai";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css'; 
import { useMediaQuery } from 'react-responsive';
import MyNavbar from './navbar'; 
import currencyFlagMapping from './FlagMapping'; 
import ExchangeRateChart from './ExchangeRateChart'; 
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai"; 
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


<script src="https://kit.fontawesome.com/570a17d576.js" crossorigin="anonymous"></script>
const API_KEY = 'd12H4xg8fjG5HFlGDIFu4tW7Ev6h91vx';
 // Replace with your API Layer key
const BASE_URL = 'https://api.apilayer.com/fixer';  // API Layer base URL
//
function App() {
    
  // Define breakpoints using react-responsive hooks
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
    const [info, setInfo] = useState({});
    const [input, setInput] = useState('1');
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('NGN');
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(1);
    const [chartData, setChartData] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [timePeriod, setTimePeriod] = useState('1m');

    const containerRef = useRef(null);
    const switchRef = useRef(null);
 // Media queries
 const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
 const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    useEffect(() => {
        Axios.get(`${BASE_URL}/latest?base=${from}`, {
            headers: { 'apikey': API_KEY }  // API Layer authentication
        })
        .then((res) => {
            const rates = res.data.rates;
            setInfo(rates);

            const newOptions = Object.keys(rates).map(code => ({
                value: code,
                label: (
                    <div className="dropdown-option">
                        <img 
                            src={currencyFlagMapping[code] || 'https://flagsapi.com/US/flat/64.png'} 
                            alt={code} 
                            style={{ width: '24px', height: '16px', marginRight: '8px' }} 
                        />
                        {code}
                    </div>
                )
            }));
            setOptions(newOptions);

            return Axios.get(`${BASE_URL}/timeseries?start_date=${getStartDate()}&end_date=${getEndDate()}&base=${from}&symbols=${to}`, {
                headers: { 'apikey': API_KEY }  // API Layer authentication
            });
        })
        .then((res) => {
            const rates = res.data.rates;
            const dates = Object.keys(rates);
            const ratesData = dates.map(date => ({
                date,
                rate: rates[date][to] || 0
            }));
            setChartData(ratesData);
        })
        .catch((error) => {
            console.error("Error fetching currency data", error);
        });
    }, [from, timePeriod]);

    useEffect(() => {
        convert();
    }, [info, input, from, to]);


    function convert() {
        if (info[to] && !isNaN(input) && input !== '') {
            const rate = info[to];
            setOutput(Number(input) * rate);
        } else {
            setOutput(0);
        }
    }

    function flip() {
        setFrom(prevFrom => {
            setTo(prevFrom);
            return to;
        });
    }

    function getStartDate() {
        const today = new Date();
        let startDate;
        switch(timePeriod) {
            case '1w':
                startDate = new Date(today.setDate(today.getDate() - 7));
                break;
            case '1m':
                startDate = new Date(today.setMonth(today.getMonth() - 1));
                break;
            case '3m':
                startDate = new Date(today.setMonth(today.getMonth() - 3));
                break;
            case '1y':
                startDate = new Date(today.setFullYear(today.getFullYear() - 1));
                break;
           
            default:
                startDate = new Date(today.setDate(today.getDate() - 7));
        }
        return startDate.toISOString().split('T')[0];
    }

    function getEndDate() {
        return new Date().toISOString().split('T')[0];
    }

    return (
        <div className="App" ref={containerRef}>
             <MyNavbar />
            <div className='background'>
            
                <div className="heading text-center my-4">
    <h2>{`${input} ${from} to ${to} - Convert ${from} to ${to}`}</h2>
    <h1>LCFE Currency Converter</h1>
</div>
                <div className='AppContainer'>
                    <div className="container">
                        <div className="left">
                            <h3>Amount</h3>
                            <input 
                                type="number" 
                                placeholder="Enter the amount" 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                            />
                        </div>
                        <div className="middle">
                            <h3>From</h3>
                            <div 
                                className="dropdown-container" 
                               
                            >
                                <Dropdown 
                                    options={options}
                                    onChange={(e) => {
                                        setFrom(e.value);
                                       
                                    }} 
                                    value={from} 
                                    placeholder="From" 
                                    controlClassName="dropdown-control"
                                  
                                />
                            </div>
                        </div>
                        <div className="switch" ref={switchRef}>
                            <AiOutlineSwap size="30px" onClick={flip} />
                        </div>
                        <div className="right">
                            <h3>To</h3>
                            <div 
                                className="dropdown-container" 
                               
                            >
                                <Dropdown 
                                    options={options}
                                    onChange={(e) => {
                                        setTo(e.value);
                                    
                                    }} 
                                    value={to} 
                                    placeholder="To" 
                                    controlClassName="dropdown-control"
                                   
                                />
                            </div>
                        </div>
                    </div>
                    <div className="result">
                        <button onClick={() => setShowResult(true)}>Convert</button>
                        {showResult && (
                            <div>
                                <h2>Converted Amount:</h2>
                                <p>{`${input} ${from} = ${output.toFixed(2)} ${to}`}</p>
                            </div>
                        )}
                    </div>
                    <div className="time-period">
                        <h3>Select Time Period</h3>
                        <Dropdown 
                            options={[
                                { value: '1w', label: '1 Week' },
                                { value: '1m', label: '1 Month' },
                                { value: '3m', label: '3 Months' },
                                { value: '1y', label: '1 Year' },
                               
                            ]}
                            onChange={(e) => setTimePeriod(e.value)} 
                            value={timePeriod} 
                            placeholder="Select Time Period" 
                            controlClassName="dropdown-control-1"
                            menuClassName='Dropdown-1'
                        />
                    </div>
                </div>

                </div>
            
                <div className="chart">
                    <h2>Exchange Rate Chart</h2>
                    <ExchangeRateChart data={chartData} />
                </div>

                <div className='eko_gold_ad'>
                    <a href='https://lcfe.ng//how-to-trade.php'>
      <img src='https://lcfe.ng/assets/images/lcfe-gold.jpg' ></img>
      </a>
                    </div>
                    <div>
                   
                    <div className='lcfe_info'>
                        
                    <div className="box">
                        <h1> Credible and Accurate</h1>
                       <icon > <AiOutlineGlobal /></icon>
                 <p>   We have direct access to real-time Exchange rates, Hence you can be assured that the data we provide is always accurate and reliable.</p>
                 </div>
    <div className="box-2"><h1> Currency Charts
    </h1>  <icon > <AiOutlineFund /></icon> <p>Create a chart for any currency pair in the world to see their currency history. These currency charts use live  rates, are easy to use, and are very reliable.</p></div>
    <div className="box-3"><h1>Simple Navigation</h1> <icon > <AiOutlineUser /></icon>  <p> The website is designed to be intuitive and easy to use, making it accessible for both novice and experienced users.
    </p></div>
  
                    </div>
                    
</div>
                 
        
            <div className='footer'>
                    <div className='footer-section-1'>
       <h3>L.C.F.E</h3>
    </div>
   
    <div className='footer-section-2'>
        <h3>Support</h3>
        <p>Email: <a href="mailto:info@lcfe.ng">info@lcfe.ng</a></p>
        <p>Phone: +234-9150009000</p>
        <div className='social-links'>
        <ul>
  <li>
    <a href="https://www.facebook.com/LCFExchange/">
      <i className="fab fa-facebook-f icon"><FaFacebookF /></i>  </a>
  </li>
  <li>
    <a href="https://www.instagram.com/lcfe_nig"><i className="fab fa-insta icon"><FaInstagram />
    </i></a>
  </li>
  <li>
    <a href="https://www.linkedin.com/company/lagos-commodities-and-futures-exchange-lcfe/"><i className="fab fa-linkedin-in icon"><FaLinkedinIn /></i></a></li>
  <li>
    <a href="https://x.com/lcfe_ng"><i className="fab fa-google-plus-g icon"> <FaXTwitter /> </i></a></li>
</ul>

        </div>
    </div>
    
    <div className='footer-section-adr'>
        <h3>Lagos Office</h3>
        <p>1st Floor, Niger House,</p>
        <p>UAC Building,</p>
        <p>1-5 Odunlami Street,</p>
        <p>Marina, Lagos, Nigeria.</p>
    </div>
    
    <div className='footer-section'>
        <h3>Abuja Office</h3>
        <p>2nd Floor, Left Wing,</p>
        <p>Labour House, Behind </p>
        <p>Federal Ministry of Finance,</p>
        <p>CBD, Abuja, Nigeria.</p>
    </div>
  
    <div className='border'></div>

  <div className='footer-copyright'>
    <p>© Copyright Lagos Commodities and Futures Exchange. All rights reserved.</p>
  </div>
</div>
            
        </div>
    );
}

export default App;
 