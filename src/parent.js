import React, { useState } from 'react'
import Child from './Child'

function Parent() {


    const [data,setdata] = useState('');
    
    // const ParentClick = () => {
    //  setdata('This message coming from parent')
    // }

   const childToParent = (childdata) => {
            setdata(childdata)
    }

return (
<div>
    {data}
 {/* <Child parenttoChildprop = {data}></Child> */}
 <Child childToParentprop = {childToParent}></Child>
 {/* <button onClick={ParentClick}> Parent Button</button> */}
</div>


)

}

export default Parent