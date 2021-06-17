import React from 'react'

function Child({childToParentprop}) {
    const data1 = "This Data goes from child to parent"
return (
<div>
{/* {parenttoChildprop} */}
<button onClick={() => childToParentprop(data1)}> Child button</button>
</div>
)
}

export default Child



// import React from 'react'
// import { Button } from 'semantic-ui-react';

// export default function Child({childToParent}) {
//     const data = "This is data from Child Component to the Parent Component."
//     return (
//         <div>
//             <Button primary onClick={() => childToParent(data)}>Click Child</Button>
//         </div>
//     )
// }
