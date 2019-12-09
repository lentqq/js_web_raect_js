import React, { Fragment } from 'react'
// import styles from './styles.module.css'
// import PropTypes from 'prop-types'
// import { Spinner } from 'react-bootstrap'
import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
import data from '../data'
import './styles.css'


const renderCards = (products) => {
  return products.map(product => {
    return (
      <Fragment key={product.id}>
        {logged(ProductCard, product)}
      </Fragment>
    )
  })
}

class ProductList extends React.Component {

  state = {
    loginName: 'Loading...',
    loginName: '',
    userId: ''
  }

  componentDidMount() {
    fetch('https://api.github.com/users/lentqq')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          loginName: json.login,
          // userId: json.id
        })
      })
      .catch((myErr) => console.log(myErr));
  }

  // state= {
  //   reposName: '',
  // }

  // componentDidMount() {
  //   fetch('https://api.github.com/users/lentqq/repos')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json)
  //       this.setState({
  //         reposName: json.name
  //         // loginName: json.login,
  //         // userId: json.id
  //       })
  //     })
  //     .catch((myErr) => console.log(myErr));
  // }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          {/* {'User Name is: ' + this.state.loginName} */}
          {'User Name is: ' + this.state.loginName}
        </div>
        {/* <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> */}
        <div className="container">
          {renderCards(data)}
        </div>
      </Fragment>
    )
  }
};

// ProductList.defaultProps = {
//   products: []
// }

// ProductList.propTypes = {
//   products: PropTypes.array.isRequired
// }

export default ProductList
