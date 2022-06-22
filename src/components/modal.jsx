import { useState } from "react"
import axios from "axios";
export function Button_modal() {
    const [isHere, setIsHere] = useState(false)
    function handleClick() {
        setIsHere(!isHere);
    }
    function onClcikk() {
        setIsHere(!isHere);
    }
    return (<>
        <button className="btn-add" onClick={handleClick}>Add</button>
        <Modal ih={isHere} onTik={onClcikk} top="Add new"/>
    </>
    )
}
export function Modal({ ih, onTik, top, name, position, office, age, startDay, salary }) {
    return (<>
        <div className={ih ? "actif" : "nonactif"} onClick={onTik}>

        </div>

        <div className={ih ? "overlay2" : ""}>

            {ih ? 
            <Field 
                topA={top} 
                nameValue={name} 
                localisationvalue={position} 
                officeValue={office} 
                ageValue={age} 
                startDateValue={startDay} 
                salaryValue={salary} 
            /> : ""}
        </div>
    </>
    )
}
function Input({
    label,
    nameId,
    idId,
    placeholderId,
    typeId,
    numberId,
    takeData,
}) {
    function sendVal(e){
        if(placeholderId===null){
            console.log("test")
        }
            takeData(e.target.value)
    }
    let [listOfInput] = useState([<input name={nameId} id={idId} placeholder={placeholderId} type={typeId} onInput={sendVal}></input>])
    for (let i = 1; i < numberId; i++) {
        listOfInput.push([<input name={nameId + i} id={idId + i} placeholder={placeholderId} type={typeId} onInput={sendVal}></input>])
    }
    return (
        <div className="Input">
            <label>{label}</label>
            {listOfInput.map((i) => {
                return i
            })}
        </div>
    )
}
export function Field({ topA,
    nameValue,
    localisationvalue,
    officeValue,
    ageValue,
    startDateValue,
    salaryValue,
}) {
    const[nameS,setNameS]=useState(nameValue);
    const[localisationS,setlocalistionS]=useState(localisationvalue);
    const[ageS,setageS]=useState(ageValue);
    const[S_D_V_S,setS_D_V_S]=useState(startDateValue);
    const[salaryS,setSalaryS]=useState(salaryValue);
    const[officeS,setOfficeS]=useState(officeValue);

    function sendToPlacHolder(){
        axios.post('https://jsonplaceholder.typicode.com/users',{
        "name":nameS,
        "localisation":localisationS,
        "age":ageS,
        "startDate":S_D_V_S,
        "salary":salaryS,
        "office":officeS,
        })
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.error(err)})
    }
    return (<>
        <div className="head">
            {topA}
        </div>
        <Input nameId="Nom" label="Name" placeholderId={nameValue} typeId="text" takeData={setNameS}/>
        <Input nameId="localisation" label="localisation" placeholderId={localisationvalue} typeId="text" takeData={setlocalistionS}/>
        <Input nameId="office" label="Office" placeholderId={officeValue} typeId="text" takeData={setOfficeS}/>
        <Input nameId="age" label="Age" placeholderId={ageValue} typeId="number" takeData={setageS}/>
        <Input nameId="start-date" label="Start-date" placeholderId={startDateValue} typeId="text" takeData={setS_D_V_S}/>
        <Input nameId="salary" label="Salary" placeholderId={salaryValue} typeId="text" takeData={setSalaryS}/>
        <button className="btn-axios-get" onClick={sendToPlacHolder}>send</button>
    </>
    )
}