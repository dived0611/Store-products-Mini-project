import React from 'react'

export default function Rating({count ,rate}) {
  return <>
  <span className='badge badge-pill badge-primary bg-primary'>{rate}/5 |{count}</span>
  </>
}
