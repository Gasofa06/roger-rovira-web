import "../../scss/main.scss";
import { useState } from "react";

// The 'Switch' function is the main one for all the different switches.
//
// This function will change between checked and not checked.
//
// Also, we can pass an initial value (initialValue) which the switch will 
// start with and a function (onCahnge) that will be called every time 
// the switch changes.
const Switch = ({initialValue, onChange}) => {

  const [checked, setCheck] = useState(initialValue === true)
  const switchChecked = () => { setCheck(!checked); }

  // The '_onChange' constant function will be called every time the
  // switch is modified and will check if the 'onChange (prop)' had been assigned
  // when declaring the Switch component.
  // If it's been assigned, it will call it.
  const _onChange = (e) => {
    if (typeof onChange == 'function'){
      onChange(e);
    }
  }
  
  return(
    <label className="switch">
      <input 
        type="checkbox"
        defaultChecked={checked}
        onChange={(e) => {switchChecked(); _onChange(e)}}
      />
      <span className={`slider ${checked ? 'checked' : ''}`}/>
    </label>
  )
}
export default Switch;