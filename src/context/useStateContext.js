import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext()

export const ContextProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)
    const [openLanguage, setOpenLanguage] = useState(false)
    const [language, setLanguage] = useState("English")
    const [currencyList, setCurrencyList] = useState(false)
    const [currency, setCurrency] = useState("NGN");
    const [symbol, setSymbol] = useState("₹");
    const [registerType, setRegisterType] = useState("email")

    useEffect(() => {
        switch (currency) {
            case "USD":
                setSymbol("$")
                break;
            case "AED":
                setSymbol("د.إ")
                break;
            case "ARS":
                setSymbol("$")
                break;
            case "AUD":
                setSymbol("AU$")
                break;
            case "BGN":
                setSymbol("Лв")
                break;
            case "BRL":
                setSymbol("R$")
                break;
            case "BSD":
                setSymbol("B$")
                break;
            case "CAD":
                setSymbol("CA$")
                break;
            case "CHF":
                setSymbol("Fr")
                break;
            case "CLP":
                setSymbol("$")
                break;
            case "CNY":
                setSymbol("¥")
                break;
            case "COP":
                setSymbol("$")
                break;
            case "CZK":
                setSymbol("Kč")
                break;
            case "DKK":
                setSymbol("kr")
                break;
            case "DOP":
                setSymbol("RD$")
                break;
            case "EGP":
                setSymbol("E£ ")
                break;
            case "EUR":
                setSymbol("€")
                break;
            case "FJD":
                setSymbol("FJ$")
                break;
            case "GBP":
                setSymbol("£")
                break;
            case "GTQ":
                setSymbol("Q")
                break;
            case "HKD":
                setSymbol("HK$")
                break;
            case "HRK":
                setSymbol("Kn")
                break;
            case "HUF":
                setSymbol("Huf")
                break;
            case "IDR":
                setSymbol("Rp")
                break;
            case "ILS":
                setSymbol("₪")
                break;
            case "INR":
                setSymbol("₹")
                break;
            case "ISK":
                setSymbol("Kr")
                break;
            case "JPY":
                setSymbol("¥")
                break;
            case "KRW":
                setSymbol("₩")
                break;
            case "KZT":
                setSymbol("₸")
                break;
            case "MVR":
                setSymbol("Rf ")
                break;
            case "MXN":
                setSymbol("$")
                break;
            case "MYR":
                setSymbol("RM")
                break;
            case "NOK":
                setSymbol("kr")
                break;
            case "NZD":
                setSymbol("NZ$")
                break;
            case "PAB":
                setSymbol("฿")
                break;
            case "PEN":
                setSymbol("S/")
                break;
            case "PHP":
                setSymbol("₱")
                break;
            case "PKR":
                setSymbol("₨")
                break;
            case "PLN":
                setSymbol("zł")
                break;
            case "PYG":
                setSymbol("₲")
                break;
            case "RON":
                setSymbol("lei")
                break;
            case "RUB":
                setSymbol("₽")
                break;
            case "SAR":
                setSymbol("ر.س")
                break;
            case "SEK":
                setSymbol("kr")
                break;
            case "SGD":
                setSymbol("S$")
                break;
            case "THB":
                setSymbol("฿")
                break;
            case "TRY":
                setSymbol("₺")
                break;
            case "TWD":
                setSymbol("NT$")
                break;
            case "UAH":
                setSymbol("₴")
                break;
            case "UYU":
                setSymbol("$U")
                break;
            case "ZAR":
                setSymbol("R")
                break;
            default:
                setSymbol("₦")
        }
    }, [currency]);

    return(
        <StateContext.Provider value={{
            sidebar, setSidebar, openLanguage, setOpenLanguage, language, setLanguage, currency, setCurrency, symbol, currencyList, setCurrencyList, registerType, setRegisterType }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)