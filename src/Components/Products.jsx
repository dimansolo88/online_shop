import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Products = ({ products }) => {
  return (
    <div>
      {products.map(p => (
        <div key={p.id}> {p.name} </div>
      ))}
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array,
}

const mapStateToProps = state => ({
  products: state.products.products,
})
export default connect(mapStateToProps, {})(Products)
