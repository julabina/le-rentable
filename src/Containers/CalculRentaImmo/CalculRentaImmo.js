import React, { useState } from 'react';
import bg from "../../assets/bg.jpg"

const CalculRentaImmo = () => {

    const [inputs, setInputs] = useState({price: 0, size: 0,allCheck: false, worksCheck: false, worksRadioPrice: true, worksPrice: 0, worksPerCent:0, worksValue: 0, notaryCheck: false, notaryValue: 0, homeTaxesCheck: false, homeTaxesValue: 0,  condominiumCheck: false, condominiumValue: 0,  noRentCheck: false, noRentValue: 0, monthlyRent: 0});

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
                worksPrice: value
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
                    noRentCheck: true 
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
                    noRentCheck: false 
                }
                setInputs(newObjAllCheck);
            }
        }
    }

    const test = (e) => {
        e.preventDefault()
        console.log('TEST');
    }

    return (
        <>
        <img className='bgTop' src={bg} alt="" />
        <main className='calculRentaMain'>
            <section className='calculRenta'>
                <h2>Calcul de la rentabilité</h2>
                <form onSubmit={test} className="calculRenta__spent">
                    <h3>Dépenses</h3>
                    <div className="calculRenta__spent__row">
                        <div className="calculRenta__spent__row__inputs">
                            <label htmlFor="investPrice">prix</label>
                            <input onInput={(e) => inputControl("price", e.target.value)} value={inputs.price} type="number" id="investPrice" required/>
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <label htmlFor="investSize">m²</label>
                            <input onInput={(e) => inputControl("size", e.target.value)} value={inputs.size} type="number" id="investSize" required />
                        </div>
                    </div>
                    <div className="calculRenta__spent__row">
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("allCheck", e.target.value)} type="checkbox" id="investAllCheck" />
                                <label id='allCheckLabel' htmlFor="investAllCheck">all</label>
                            </div>
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("worksCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investWorks" />
                                <label id='checkboxLabel' htmlFor="investWorks">travaux?</label>
                            </div>
                            {
                                inputs.worksCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("worksPrice", e.target.value)} value={inputs.worksPrice} type="number"/>
                                </>
                            }
                        </div>
                        <div className="calculRenta__spent__row__inputs">
                            <div className="calculRenta__spent__row__checkbox">
                                <input onInput={(e) => inputControl("notaryCheck", e.target.value)} type="checkbox" className='calculRenta__spent__row__checkbox__box' id="investNotaryCost" />
                                <label id='checkboxLabel' htmlFor="investNotaryCost">notaire?</label>
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
                                <label id='checkboxLabel' htmlFor="investHomeTaxes">taxe</label>
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
                                <label id='checkboxLabel' htmlFor="investCondominium">copro</label>
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
                                <label id='checkboxLabel' htmlFor="investNoRent">vac loc</label>
                            </div>
                            {
                                inputs.noRentCheck
                                &&
                                <>
                                    <input onInput={(e) => inputControl("noRentValue", e.target.value)} value={inputs.noRentValue} type="number" />
                                </>
                            }
                        </div>
                    </div>

                    <div className='calculRenta__separator'></div>

                    <div className="calculRenta__rent">
                        <h3>Revenus</h3>
                        <div className="calculRenta__rent__row">
                            <div className="calculRenta__rent__row__inputs">
                                <label htmlFor="investRent">Loyer mensuel</label>
                                <input onInput={(e) => inputControl("monthlyRent", e.target.value)} value={inputs.monthlyRent} type="number" id="investRent" required/>
                            </div>
                        </div>
                    </div>
                    <button className='calculRenta__btn'>Calculer</button>
                </form>
            </section>
        </main>
    </>
    );
};

export default CalculRentaImmo;