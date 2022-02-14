import React from 'react';

const Form = props => {

  return (

    <form onSubmit={props.submit}>
        <input className="Input"
        type="text"
        value={props.value}
        placeholder="Name of the city..."
        onChange={props.change}
        />
        <button className="Button">Search city</button>
    </form>
    
  )
}

export default Form;
