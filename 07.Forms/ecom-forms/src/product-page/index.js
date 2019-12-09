import React, { Fragment } from 'react'
import Header from '../header/index'
import { Link } from 'react-router-dom'
import data from '../data'

const ProductPage = (props) => {
    console.log(props);
// const product = data[props.match.params.id]

    const product = data.filter((item) => {
        return item.id === props.match.params.id
    })[0]

    return (
        <Fragment>
            <Header />
            <div>
                Product Page - {product.title}
                <div>
                    <Link to='/'>
                        Go back to home
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductPage