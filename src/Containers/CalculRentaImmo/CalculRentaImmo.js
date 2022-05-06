import React, { useState } from 'react';

const CalculRentaImmo = () => {

    const [inputs, setInputs] = useState({price: 0, size: 0, worksCheck: false, worksRadioPrice: true, worksPrice: 0, worksPerCent:0, worksValue: 0, notaryCheck: false, notaryValue: 0});

    const inputControl = (action, value) => {
        if (action === "price") {
            const newObj = {
                ...inputs,
                price: value
            }
            setInputs(newObj);
        } else if (action === "size") {
            const newObj = {
                ...inputs,
                size: value
            }
            setInputs(newObj);
        } else if (action === "worksCheck") {
            const newObj = {
                ...inputs,
                worksCheck: !inputs.worksCheck
            }
            setInputs(newObj);   
        } else if (action === "worksRadio") {
            const newObj = {
                ...inputs,
                worksRadioPrice: !inputs.worksRadioPrice
            }
            setInputs(newObj);      
        } else if (action === "worksPrice") {
            const newObj = {
                ...inputs,
                worksPrice: value
            }
            setInputs(newObj);      
        } else if (action === "worksPerCent") {
            const newObj = {
                ...inputs,
                worksPerCent: value
            }
            setInputs(newObj);       
        } else if (action === "notaryCheck") {
            const newObj = {
                ...inputs,
                notaryCheck: !inputs.notaryCheck
            }
            setInputs(newObj);         
        } else if (action === "notaryValue") {
            const newObj = {
                ...inputs,
                notaryValue: value
            }
            setInputs(newObj);
        }
    }

    return (
        <main>
            <section className='calculRenta'>
                <h2>Calcul de la rentabilité</h2>
                <div className="calculRenta__spent">
                    <h3>Dépenses</h3>
                    <div className="calculRenta__spent__row">
                        <div className="calculRenta__spent__row__inputLong">
                            <label htmlFor="investPrice">prix</label>
                            <input onInput={(e) => inputControl("price", e.target.value)} value={inputs.price} type="number" id="investPrice" />
                        </div>
                        <div className="calculRenta__spent__row__inputShort">
                            <label htmlFor="investSize">m²</label>
                            <input onInput={(e) => inputControl("size", e.target.value)} value={inputs.size} type="number" id="investSize" />
                        </div>
                    </div>
                    <div className="calculRenta__spent__row">
                        <div className="calculRenta__spent__row__inputLong">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("worksCheck", e.target.value)} type="checkbox" id="investWorks" />
                                <label htmlFor="investWorks">travaux?</label>
                            </div>
                            {
                                inputs.worksCheck
                                &&
                                <>
                                <div className='calculRenta__spent__row__options'>
                                    <div className="calculRenta__spent__row__options__radioCont">
                                        <input onInput={(e) => inputControl("worksRadio", e.target.value)} value={"worksRadioPrice"} defaultChecked type="radio" name="radioWorks" id="investRadioPrice" />
                                        <label htmlFor="investRadioPrice">zaezae</label>
                                        <input onInput={(e) => inputControl("worksRadio", e.target.value)} value={"worksRadioPerCent"} type="radio" name="radioWorks" id="investRadioPerCent" />
                                        <label htmlFor="investRadioPerCent">azeaze</label>
                                    </div>
                                     {
                                         inputs.worksRadioPrice
                                        ?
                                            <div className="calculRenta__spent__row__inputLong calculRenta__spent__row__inputLong__noMargin">
                                                <label htmlFor="worksPrice">price</label>
                                                <input onInput={(e) => inputControl("worksPrice", e.target.value)} value={inputs.worksPrice} type="number" id="worksPrice" />
                                            </div>
                                        :
                                            <div className="calculRenta__spent__row__inputLong calculRenta__spent__row__inputLong__noMargin">
                                                <label htmlFor="worksPerCent">zae</label>
                                                <input onInput={(e) => inputControl("worksPerCent", e.target.value)} value={inputs.worksPerCent} type="number" id="worksPerCent" />
                                            </div>
                                    } 
                                </div>
                                    </>
                            }
                        </div>
                        <div className="calculRenta__spent__row__inputShort">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("notaryCheck", e.target.value)} type="checkbox" id="investNotaryCost" />
                                <label htmlFor="investNotaryCost">notaire?</label>
                            </div>
                             {
                                 inputs.notaryCheck
                                &&
                                <div className="calculRenta__spent__row calculRenta__spent__row__options__notary">
                                    <div className="calculRenta__spent__row__inputShort">
                                        <label htmlFor="investNotaryPrice">zaeaze</label>
                                        <input onInput={(e) => inputControl("notaryValue", e.target.value)} value={inputs.notaryValue} type="number" id="investNotaryPrice" />
                                    </div>
                                </div>
                            } 
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CalculRentaImmo;