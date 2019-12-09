import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ProductCard from '../product-card'
import Header from '../header'
import './styles.css'

const renderCards = (products) => {
  return products.map(product => {
    return (<ProductCard key={product.id} {...product} />);
  })
}

class ProductList extends React.Component {
  state = {
    loginName: 'Loading...',
    userId: ''
  }

  componentDidMount() {
    fetch('https://api.github.com/users/lentqq')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          loginName: json.login,
          userId: json.id
        })
      })
      .catch((myErr) => console.log(myErr));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          {'User Name is:' + this.state.loginName}
        </div>
        <div className="container">
          {renderCards(this.props.products)}
        </div>
      </Fragment>
    )
  }
};

ProductList.defaultProps = {
  products: []
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
