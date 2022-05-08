import React, { useState } from 'react';
import bg from "../../assets/bg.jpg"

const CalculRentaImmo = () => {

    const [inputs, setInputs] = useState({price: 0, size: 0, allCheck: false, worksCheck: false, worksRadioPrice: true, worksValue: 0, worksPerCent:0, worksValue: 0, notaryCheck: false, notaryValue: 0, homeTaxesCheck: false, homeTaxesValue: 0,  condominiumCheck: false, condominiumValue: 0,  noRentCheck: false, noRentValue: 0, monthlyRent: 0, creditCheck: true, creditValue: 0});
    const [results, setResults] = useState({resultGross: 0, resultNet: 0, cashFlow: 0});

    const inputControl = (action, value) => {
        const allCheckBox = document.getElementById('investAllCheck');
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
            allCheckBox.checked = false;
            const newObj = {
                ...inputs,
                worksCheck: !inputs.worksCheck,
                allCheck: false
            }
            setInputs(newObj);   
        } else if (action === "worksPrice") {
            const newObj = {
                ...inputs,
                worksValue: value
            }
            setInputs(newObj);      
        }  else if (action === "notaryCheck") {
            allCheckBox.checked = false;
            const newObj = {
                ...inputs,
                notaryCheck: !inputs.notaryCheck,
                allCheck: false
            }
            setInputs(newObj);         
        } else if (action === "notaryValue") {
            const newObj = {
                ...inputs,
                notaryValue: value
            }
            setInputs(newObj);
        } else if (action === "homeTaxesCheck") {
            allCheckBox.checked = false;
            const newObj = {
                ...inputs,
                homeTaxesCheck: !inputs.homeTaxesCheck,
                allCheck: false
            }
            setInputs(newObj);         
        } else if (action === "homeTaxesValue") {
            const newObj = {
                ...inputs,
                homeTaxesValue: value
            }
            setInputs(newObj);
        } else if (action === "condominiumCheck") {
            allCheckBox.checked = false;
            const newObj = {
                ...inputs,
                condominiumCheck: !inputs.condominiumCheck,
                allCheck: false
            }
            setInputs(newObj);         
        } else if (action === "condominiumValue") {
            const newObj = {
                ...inputs,
                condominiumValue: value
            }
            setInputs(newObj);
        } else if (action === "noRentCheck") {
            allCheckBox.checked = false;
            const newObj = {
                ...inputs,
                noRentCheck: !inputs.noRentCheck,
                allCheck: false
            }
            setInputs(newObj);         
        } else if (action === "noRentValue") {
            const newObj = {
                ...inputs,
                noRentValue: value
            }
            setInputs(newObj);
        } else if (action === "monthlyRent") {
            const newObj = {
                ...inputs,
                monthlyRent: value
            }
            setInputs(newObj);
        } else if (action === "creditCheck") {
            allCheckBox.checked = false;
            const newObj = {
                ...inputs,
                creditCheck: !inputs.creditCheck,
                allCheck: false
            }
            setInputs(newObj);         
        } else if (action === "creditValue") {
            const newObj = {
                ...inputs,
                creditValue: value
            }
            setInputs(newObj);
        } else if (action === "allCheck") {
            const boxes = document.querySelectorAll('.calculRenta__spent__row__checkbox__box');
            const newObj = {
                ...inputs,
                allCheck: !inputs.allCheck
            }
            if (newObj.allCheck) {
                boxes.forEach(el => {
                    el.checked = true
                })
                const newObjAllCheck = {
                    ...newObj,
                    worksCheck: true ,
                    notaryCheck: true ,
                    homeTaxesCheck: true ,
                    condominiumCheck: true ,
                    noRentCheck: true,
                    creditCheck: true 
                }
                setInputs(newObjAllCheck);
            } else {
                boxes.forEach(el => {
                    el.checked = false
                })
                const newObjAllCheck = {
                    ...newObj,
                    worksCheck: false ,
                    notaryCheck: false ,
                    homeTaxesCheck: false ,
                    condominiumCheck: false ,
                    noRentCheck: false, 
                    creditCheck: false 
                }
                setInputs(newObjAllCheck);
            }
        }
    }

    const submitedForm = (e) => {
        e.preventDefault();
        calculRenta()
    }

    const calculRenta = () => {
        let totalRent = (parseInt(inputs.monthlyRent) * 12), totalSpent = parseInt(inputs.price), charges = 0;
        
        inputs.worksCheck && (totalSpent += parseInt(inputs.worksValue))
        inputs.notaryCheck && (totalSpent += parseInt(inputs.notaryValue))
        
        let totalGross = (100 / totalSpent) * totalRent;
        
        inputs.homeTaxesCheck && (charges += parseInt(inputs.homeTaxesValue))
        inputs.condominiumCheck && (charges += parseInt(inputs.condominiumValue))
        inputs.noRentCheck && (charges += (((parseInt(inputs.monthlyRent) * 12) / 100) * parseInt(inputs.noRentValue)))
        
        let rentNet = (parseInt(inputs.monthlyRent) * 12) - charges;
        
        let totalNet = (100 / totalSpent) * rentNet;

        let totalCashflow = rentNet - (parseInt(inputs.creditValue) * 12);

        const newObj = {
            ...results,
            resultGross: totalGross,
            resultNet: totalNet,
            cashFlow: totalCashflow
        }
        
        setResults(newObj);
    }

    return (
        <>
        <img className='bgTop' src={bg} alt="" />
        <h1 className='titleTop'>LeRentable</h1>
        <main className='calculRentaMain'>
            <section className='calculRenta'>
                <h2>Calcul de la rentabilité</h2>
                <form onSubmit={submitedForm} className="calculRenta__spent">
                    <h3>Dépenses</h3>
                    <div className="calculRenta__spent__row">
                        <div className="calculRenta__spent__row__inputs">
                            <label htmlFor="investPrice">Montant du bien :</label>
                            <input onInput={(e) => inputControl("price", e.target.value)} value={inputs.price} type="number" id="investPrice" required/>
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <label htmlFor="investSize">Taille de votre appartement en m² :</label>
                            <input onInput={(e) => inputControl("size", e.target.value)} value={inputs.size} type="number" id="investSize" />
                        </div>
                    </div>
                    <div className="calculRenta__spent__row">
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("allCheck", e.target.value)} type="checkbox" id="investAllCheck" />
                                <label id='allCheckLabel' htmlFor="investAllCheck">Tout cocher</label>
                            </div>
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("worksCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investWorks" />
                                <label id='checkboxLabel' htmlFor="investWorks">Prix total des travaux{inputs.worksCheck && ' :'}</label>
                            </div>
                            {
                                inputs.worksCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("worksPrice", e.target.value)} value={inputs.worksValue} type="number"/>
                                </>
                            }
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("notaryCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investNotaryCost" />
                                <label id='checkboxLabel' htmlFor="investNotaryCost">Frais de notaire{inputs.notaryCheck && ' :'}</label>
                            </div>
                             {
                                 inputs.notaryCheck
                                 && 
                                 <>
                                    <input onInput={(e) => inputControl("notaryValue", e.target.value)} value={inputs.notaryValue} type="number"/>
                                 </>
                            } 
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("homeTaxesCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investHomeTaxes" />
                                <label id='checkboxLabel' htmlFor="investHomeTaxes">Taxe foncière{inputs.homeTaxesCheck && ' :'}</label>
                            </div>
                            {
                                inputs.homeTaxesCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("homeTaxesValue", e.target.value)} value={inputs.homeTaxesValue} type="number" />
                                </>
                            }
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("condominiumCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investCondominium" />
                                <label id='checkboxLabel' htmlFor="investCondominium">Bien en copropriété{inputs.condominiumCheck && ' :'}</label>
                            </div>
                            {
                                inputs.condominiumCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("condominiumValue", e.target.value)} value={inputs.condominiumValue} type="number" />
                                </>
                            }
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("noRentCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investNoRent" />
                                <label id='checkboxLabel' htmlFor="investNoRent">Vacances locatives en %{inputs.noRentCheck && ' :'}</label>
                            </div>
                            {
                                inputs.noRentCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("noRentValue", e.target.value)} value={inputs.noRentValue} type="number" />
                                </>
                            }
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input defaultChecked onInput={(e) => inputControl("creditCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investCredit" />
                                <label id='checkboxLabel' htmlFor="investCredit">Cout du crédit mensuel{inputs.creditCheck && ' :'}</label>
                            </div>
                            {
                                inputs.creditCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("creditValue", e.target.value)} value={inputs.creditValue} type="number" />
                                </>
                            }
                        </div>
                    </div>

                    <div className='calculRenta__separator'></div>

                    <div className="calculRenta__rent">
                        <h3>Revenus</h3>
                        <div className="calculRenta__rent__row">
                            <div className="calculRenta__rent__row__inputs">
                                <label htmlFor="investRent">Loyer mensuel :</label>
                                <input onInput={(e) => inputControl("monthlyRent", e.target.value)} value={inputs.monthlyRent} type="number" id="investRent" required/>
                            </div>
                            <div className="calculRenta__rent__row__inputs">
                                <p>Loyer annuel :</p>
                                <p className='calculRenta__rent__row__inputs__yearly'>{inputs.monthlyRent * 12}</p>
                            </div>
                        </div>
                    </div>
                    <button className='calculRenta__btn'>Calculer</button>
                </form>
            </section>

            <section className='resultRenta'>
                <div className='resultRenta__resultCont'>
                    <h3>Votre rentabilité brut :</h3>
                    <p className='resultRenta__resultCont__result'>{(results.resultGross).toFixed(2)} %</p>                    
                </div>
                <div className='resultRenta__resultCont'>
                    <h3>Votre rentabilité net :</h3>
                    <p className='resultRenta__resultCont__result'>{(results.resultNet).toFixed(2)} %</p>                      
                </div>
                {
                    inputs.creditCheck &&
                    <div className='resultRenta__resultCont'>
                        <h3>votre cashflow générée :</h3>
                        <p className='resultRenta__resultCont__result'>{(results.cashFlow / 12).toFixed(2)} €</p>                      
                    </div>
                }
            </section>
        </main>
    </>
    );
};

export default CalculRentaImmo;