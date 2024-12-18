const currencyFlagMapping = {
    AED: 'https://flagsapi.com/AE/flat/64.png',
    AFN: 'https://flagsapi.com/AF/flat/64.png',
    ALL: 'https://flagsapi.com/AL/flat/64.png',
    AMD: 'https://flagsapi.com/AM/flat/64.png',
    ANG: 'https://flagsapi.com/CW/flat/64.png',
    AOA: 'https://flagsapi.com/AO/flat/64.png',
    ARS: 'https://flagsapi.com/AR/flat/64.png',
    AUD: 'https://flagsapi.com/AU/flat/64.png',
    AWG: 'https://flagsapi.com/AW/flat/64.png',
    AZN: 'https://flagsapi.com/AZ/flat/64.png',
    BAM: 'https://flagsapi.com/BA/flat/64.png',
    BBD: 'https://flagsapi.com/BB/flat/64.png',
    BDT: 'https://flagsapi.com/BD/flat/64.png',
    BGN: 'https://flagsapi.com/BG/flat/64.png',
    BHD: 'https://flagsapi.com/BH/flat/64.png',
    BIF: 'https://flagsapi.com/BI/flat/64.png',
    BMD: 'https://flagsapi.com/BM/flat/64.png',
    BND: 'https://flagsapi.com/BN/flat/64.png',
    BOB: 'https://flagsapi.com/BO/flat/64.png',
    BRL: 'https://flagsapi.com/BR/flat/64.png',
    BSD: 'https://flagsapi.com/BS/flat/64.png',
    BTN: 'https://flagsapi.com/IN/flat/64.png', // Bhutan has same flag as India
    BWP: 'https://flagsapi.com/BW/flat/64.png',
    BYN: 'https://flagsapi.com/BY/flat/64.png',
    BZD: 'https://flagsapi.com/BZ/flat/64.png',
    CAD: 'https://flagsapi.com/CA/flat/64.png',
    CDF: 'https://flagsapi.com/CD/flat/64.png',
    CHF: 'https://flagsapi.com/CH/flat/64.png',
    CLP: 'https://flagsapi.com/CL/flat/64.png',
    CNY: 'https://flagsapi.com/CN/flat/64.png',
    COP: 'https://flagsapi.com/CO/flat/64.png',
    CRC: 'https://flagsapi.com/CR/flat/64.png',
    CUP: 'https://flagsapi.com/CU/flat/64.png',
    CVE: 'https://flagsapi.com/CV/flat/64.png',
    CZK: 'https://flagsapi.com/CZ/flat/64.png',
    DJF: 'https://flagsapi.com/DJ/flat/64.png',
    DKK: 'https://flagsapi.com/DK/flat/64.png',
    DOP: 'https://flagsapi.com/DO/flat/64.png',
    DZD: 'https://flagsapi.com/DZ/flat/64.png',
    EGP: 'https://flagsapi.com/EG/flat/64.png',
    ERN: 'https://flagsapi.com/ER/flat/64.png',
    ETB: 'https://flagsapi.com/ET/flat/64.png',
    EUR: 'https://flagcdn.com/16x12/eu.png', // Euro for the Eurozone
    FJD: 'https://flagsapi.com/FJ/flat/64.png',
    FKP: 'https://flagsapi.com/FK/flat/64.png',
    FOK: 'https://flagsapi.com/FK/flat/64.png', // Faroe Islands has same flag as Denmark
    GBP: 'https://flagsapi.com/GB/flat/64.png',
    GEL: 'https://flagsapi.com/GE/flat/64.png',
    GHS: 'https://flagsapi.com/GH/flat/64.png',
    GIP: 'https://flagsapi.com/GI/flat/64.png',
    GMD: 'https://flagsapi.com/GM/flat/64.png',
    GNF: 'https://flagsapi.com/GN/flat/64.png',
    GTQ: 'https://flagsapi.com/GT/flat/64.png',
    GYD: 'https://flagsapi.com/GY/flat/64.png',
    HKD: 'https://flagsapi.com/HK/flat/64.png',
    HNL: 'https://flagsapi.com/HN/flat/64.png',
    HRK: 'https://flagsapi.com/HR/flat/64.png',
    HTG: 'https://flagsapi.com/HT/flat/64.png',
    HUF: 'https://flagsapi.com/HU/flat/64.png',
    IDR: 'https://flagsapi.com/ID/flat/64.png',
    ILS: 'https://flagsapi.com/IL/flat/64.png',
    INR: 'https://flagsapi.com/IN/flat/64.png',
    IQD: 'https://flagsapi.com/IQ/flat/64.png',
    IRR: 'https://flagsapi.com/IR/flat/64.png',
    ISK: 'https://flagsapi.com/IS/flat/64.png',
    JMD: 'https://flagsapi.com/JM/flat/64.png',
    JOD: 'https://flagsapi.com/JO/flat/64.png',
    JPY: 'https://flagsapi.com/JP/flat/64.png',
    KES: 'https://flagsapi.com/KE/flat/64.png',
    KGS: 'https://flagsapi.com/KG/flat/64.png',
    KHR: 'https://flagsapi.com/KH/flat/64.png',
    KID: 'https://flagsapi.com/KI/flat/64.png',
    KMF: 'https://flagsapi.com/KM/flat/64.png',
    KRW: 'https://flagsapi.com/KR/flat/64.png',
    KWD: 'https://flagsapi.com/KW/flat/64.png',
    KYD: 'https://flagsapi.com/KY/flat/64.png',
    KZT: 'https://flagsapi.com/KZ/flat/64.png',
    LAK: 'https://flagsapi.com/LA/flat/64.png',
    LBP: 'https://flagsapi.com/LB/flat/64.png',
    LKR: 'https://flagsapi.com/LK/flat/64.png',
    LRD: 'https://flagsapi.com/LR/flat/64.png',
    LSL: 'https://flagsapi.com/LS/flat/64.png',
    LYD: 'https://flagsapi.com/LY/flat/64.png',
    MAD: 'https://flagsapi.com/MA/flat/64.png',
    MDL: 'https://flagsapi.com/MD/flat/64.png',
    MGA: 'https://flagsapi.com/MG/flat/64.png',
    MKD: 'https://flagsapi.com/MK/flat/64.png',
    MMK: 'https://flagsapi.com/MM/flat/64.png',
    MNT: 'https://flagsapi.com/MN/flat/64.png',
    MOP: 'https://flagsapi.com/MO/flat/64.png',
    MRU: 'https://flagsapi.com/MR/flat/64.png',
    MUR: 'https://flagsapi.com/MU/flat/64.png',
    MVR: 'https://flagsapi.com/MV/flat/64.png',
    MWK: 'https://flagsapi.com/MW/flat/64.png',
    MXN: 'https://flagsapi.com/MX/flat/64.png',
    MYR: 'https://flagsapi.com/MY/flat/64.png',
    MZN: 'https://flagsapi.com/MZ/flat/64.png',
    NAD: 'https://flagsapi.com/NA/flat/64.png',
    NGN: 'https://flagsapi.com/NG/flat/64.png',
    NIO: 'https://flagsapi.com/NI/flat/64.png',
    NOK: 'https://flagsapi.com/NO/flat/64.png',
    NPR: 'https://flagsapi.com/NP/flat/64.png',
    NZD: 'https://flagsapi.com/NZ/flat/64.png',
    OMR: 'https://flagsapi.com/OM/flat/64.png',
    PAB: 'https://flagsapi.com/PA/flat/64.png',
    PEN: 'https://flagsapi.com/PE/flat/64.png',
    PGK: 'https://flagsapi.com/PG/flat/64.png',
    PHP: 'https://flagsapi.com/PH/flat/64.png',
    PKR: 'https://flagsapi.com/PK/flat/64.png',
    PLN: 'https://flagsapi.com/PL/flat/64.png',
    PYG: 'https://flagsapi.com/PY/flat/64.png',
    QAR: 'https://flagsapi.com/QA/flat/64.png',
    RON: 'https://flagsapi.com/RO/flat/64.png',
    RUB: 'https://flagsapi.com/RU/flat/64.png',
    RWF: 'https://flagsapi.com/RW/flat/64.png',
    SAR: 'https://flagsapi.com/SA/flat/64.png',
    SBD: 'https://flagsapi.com/SB/flat/64.png',
    SCR: 'https://flagsapi.com/SC/flat/64.png',
    SDG: 'https://flagsapi.com/SD/flat/64.png',
    SEK: 'https://flagsapi.com/SE/flat/64.png',
    SGD: 'https://flagsapi.com/SG/flat/64.png',
    SHP: 'https://flagsapi.com/SH/flat/64.png',
    SLL: 'https://flagsapi.com/SL/flat/64.png',
    SOS: 'https://flagsapi.com/SO/flat/64.png',
    SRD: 'https://flagsapi.com/SR/flat/64.png',
    SSP: 'https://flagsapi.com/SS/flat/64.png',
    STN: 'https://flagsapi.com/ST/flat/64.png',
    SYP: 'https://flagsapi.com/SY/flat/64.png',
    SZL: 'https://flagsapi.com/SZ/flat/64.png',
    THB: 'https://flagsapi.com/TH/flat/64.png',
    TJS: 'https://flagsapi.com/TJ/flat/64.png',
    TMT: 'https://flagsapi.com/TM/flat/64.png',
    TND: 'https://flagsapi.com/TN/flat/64.png',
    TOP: 'https://flagsapi.com/TOK/flat/64.png', // Tonga
    TRY: 'https://flagsapi.com/TR/flat/64.png',
    TTD: 'https://flagsapi.com/TT/flat/64.png',
    TWD: 'https://flagsapi.com/TW/flat/64.png',
    TZS: 'https://flagsapi.com/TZ/flat/64.png',
    UAH: 'https://flagsapi.com/UA/flat/64.png',
    UGX: 'https://flagsapi.com/UG/flat/64.png',
    USD: 'https://flagsapi.com/US/flat/64.png',
    UYU: 'https://flagsapi.com/UY/flat/64.png',
    UZB: 'https://flagsapi.com/UZ/flat/64.png',
    VND: 'https://flagsapi.com/VN/flat/64.png',
    VUV: 'https://flagsapi.com/VU/flat/64.png',
    WST: 'https://flagsapi.com/WS/flat/64.png',
    XAF: 'https://flagsapi.com/CM/flat/64.png', // Central Africa
    XCD: 'https://flagsapi.com/VC/flat/64.png', // Eastern Caribbean Dollar
    XOF: 'https://flagsapi.com/CI/flat/64.png', // West Africa
    XPF: 'https://flagsapi.com/PF/flat/64.png', // French Polynesia
    YER: 'https://flagsapi.com/YE/flat/64.png',
    ZAR: 'https://flagsapi.com/ZA/flat/64.png',
    ZMW: 'https://flagsapi.com/ZM/flat/64.png',
    ZWL: 'https://flagsapi.com/ZW/flat/64.png',

    // Additional Currencies
    BND: 'https://flagsapi.com/BN/flat/64.png',
    BOB: 'https://flagsapi.com/BO/flat/64.png',
    CVE: 'https://flagsapi.com/CV/flat/64.png',
    KPW: 'https://flagsapi.com/KP/flat/64.png', // North Korea
    MNT: 'https://flagsapi.com/MN/flat/64.png',
    MRU: 'https://flagsapi.com/MR/flat/64.png',
    PYG: 'https://flagsapi.com/PY/flat/64.png',
    VND: 'https://flagsapi.com/VN/flat/64.png',
    WST: 'https://flagsapi.com/WS/flat/64.png',
    XAF: 'https://flagsapi.com/CM/flat/64.png', // Central Africa
    XCD: 'https://flagsapi.com/VC/flat/64.png', // Eastern Caribbean Dollar
    XOF: 'https://flagsapi.com/CI/flat/64.png', // West Africa
    YER: 'https://flagsapi.com/YE/flat/64.png',
    UNI: 'https://cryptologos.cc/logos/uniswap-uni-logo.png', // Example URL for UNI token icon
    BTC: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', // Bitcoin
    ETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', // Ethereum
    LTC: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png', // Litecoin
    XRP: 'https://cryptologos.cc/logos/ripple-xrp-logo.png', // Ripple
    ADA: 'https://cryptologos.cc/logos/cardano-ada-logo.png', // Cardano
    DOT: 'https://cryptologos.cc/logos/polkadot-dot-logo.png', // Polkadot
    BNB: 'https://cryptologos.cc/logos/binancecoin-bnb-logo.png', // Binance Coin
    DOGE: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png', // Dogecoin
    SOL: 'https://cryptologos.cc/logos/solana-sol-logo.png', // Solana
    MATIC: 'https://cryptologos.cc/logos/polygon-matic-logo.png', // Polygon (MATIC)
    AT: 'https://flagsapi.com/AT/flat/64.png', // Austria
    BE: 'https://flagsapi.com/BE/flat/64.png', // Belgium
    BG: 'https://flagsapi.com/BG/flat/64.png', // Bulgaria
    CY: 'https://flagsapi.com/CY/flat/64.png', // Cyprus
    CZ: 'https://flagsapi.com/CZ/flat/64.png', // Czech Republic
    VED: 'https://flagsapi.com/DE/flat/64.png', // Germany
    DK: 'https://flagsapi.com/DK/flat/64.png', // Denmark
    EE: 'https://flagsapi.com/EE/flat/64.png', // Estonia
    ES: 'https://flagsapi.com/ES/flat/64.png', // Spain
    FI: 'https://flagsapi.com/FI/flat/64.png', // Finland
    FR: 'https://flagsapi.com/FR/flat/64.png', // France
    GR: 'https://flagsapi.com/GR/flat/64.png', // Greece
    HU: 'https://flagsapi.com/HU/flat/64.png', // Hungary
    IE: 'https://flagsapi.com/IE/flat/64.png', // Ireland
    IT: 'https://flagsapi.com/IT/flat/64.png', // Italy
    LT: 'https://flagsapi.com/LT/flat/64.png', // Lithuania
    LU: 'https://flagsapi.com/LU/flat/64.png', // Luxembourg
    MT: 'https://flagsapi.com/MT/flat/64.png', // Malta
    NL: 'https://flagsapi.com/NL/flat/64.png', // Netherlands
    PL: 'https://flagsapi.com/PL/flat/64.png', // Poland
    PT: 'https://flagsapi.com/PT/flat/64.png', // Portugal
    RO: 'https://flagsapi.com/RO/flat/64.png', // Romania
    SE: 'https://flagsapi.com/SE/flat/64.png', // Sweden
    SK: 'https://flagsapi.com/SK/flat/64.png', // Slovakia
    SI: 'https://flagsapi.com/SI/flat/64.png', // Slovenia

    // Additional countries if needed
    CH: 'https://flagsapi.com/CH/flat/64.png', // Switzerland
    NO: 'https://flagsapi.com/NO/flat/64.png', // Norway
    IS: 'https://flagsapi.com/IS/flat/64.png', // Iceland
    LI: 'https://flagsapi.com/LI/flat/64.png', // Liechtenstein
    ME: 'https://flagsapi.com/ME/flat/64.png', // Montenegro
    MK: 'https://flagsapi.com/MK/flat/64.png', // North Macedonia
    RS: 'https://flagsapi.com/RS/flat/64.png', // Serbia
    AL: 'https://flagsapi.com/AL/flat/64.png', // Albania
    MT: 'https://flagsapi.com/MT/flat/64.png', // Malta
    SM: 'https://flagsapi.com/SM/flat/64.png', // San Marino
    VA: 'https://flagsapi.com/VA/flat/64.png', // Vatican City
    UZS: 'https://flagsapi.com/UZ/flat/64.png',
    VEB: 'https://flagsapi.com/VE/flat/64.png',
    VAL: 'https://flagsapi.com/VA/flat/64.png',
    VES: 'https://flagsapi.com/VE/flat/64.png',
    VEF: 'https://flagsapi.com/VE/flat/64.png',
    XAU:  'https://example.com/images/gold-bar.png', // Gold (generic placeholder)
    XBT: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', // Bitcoin (generic placeholder)
    XAG: 'https://example.com/images/silver-bar.png', // Silver (generic placeholder)
    XDR: ' //www.imf.org/-/media/Images/IMF/IMF-Logo.ashx'// Special Drawing Rights (generic placeholder)

};


export default currencyFlagMapping;
