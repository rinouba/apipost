import React from 'react'

function Detailss({Detailsz,id,body}) {
  return (<>
    {Detailsz===id?<h5 className='text-white'>Body : {body}</h5>:''}
    </>
    )
}

export default Detailss