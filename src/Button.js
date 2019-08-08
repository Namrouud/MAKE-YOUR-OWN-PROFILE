import React from 'react';
function Button(props)
{




    return (<div>
{(props.isShown) ? (<button onClick={props.onSimpleClick} > 
{props.children}
</button>):(<p>button is not shown</p>)


}</div>)
}
export default Button;