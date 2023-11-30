import { ProductDescription } from '@/components'
import { products } from '@/utils/data'
import React from 'react'

const ProductPage = () => {
  return (
    <div>
        <ProductDescription {...products[0]} />
    </div>
  )
}

export default ProductPage   