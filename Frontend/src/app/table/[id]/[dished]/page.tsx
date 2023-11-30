"use client";

import { useParams } from 'next/navigation'
import React from 'react'

const DishesCategoryPage = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>DishesCategoryPage</div>
  )
}

export default DishesCategoryPage