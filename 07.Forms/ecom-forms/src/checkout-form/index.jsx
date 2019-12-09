import React, { Component } from 'react';

class CheckoutForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            address: '',
            city: '',
            iban: '',
            terms: false,
            gender: '',
            error: null,
        }
    }

    changeAddress = e => {
        this.setState({
            address: e.target.value
        })
    };

    changeUsername = e => {
        this.setState({
            username: e.target.value
        })
    };

    changeCity = e => {
        this.setState({
            city: e.target.value
        })
    };

    changeIban = e => {
        this.setState({
            iban: e.target.value
        })
    };

    changeTerms = e => {
        console.log(e.target.checked)
        this.setState({
            terms: e.target.checked
        })
    };

    changeGender = e => {
        this.setState({
            gender: e.target.value
        })
    };

    handleOnFocusOut = e => {
        console.log('Focus out')
    }

    handleSbmit = (e) => {
        e.preventDefault()
        const {
            username,
            address,
            city,
            iban,
            gender,
            terms
        } = this.state;
        if (username === '') {
            this.setState({
                error: 'Username is mandatory!'
            })
        } else {
            this.setState({
                error: false
            })
            console.log(this.state);
        }
    }

    render() {
        const {
            username,
            address,
            city,
            iban,
            error,
            terms
        } = this.state;
        return (
            <form onSubmit={this.handleSbmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" onBlur={this.handleOnFocusOut} value={username} id="username" />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" onChange={this.changeAddress} value={address} id="address" />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <select onChange={this.changeCity} value={city}>
                        <option value="">Choose...</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Varna">Varna</option>
                        <option value="Burgas">Burgas</option>
                        <option value="Carevo">Carevo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="iban">IBAN:</label>
                    <input onChange={this.changeIban} type="text" value={iban} id="iban" />
                </div>
                <div>
                    <label htmlFor="terms">Terms & Conditions</label>
                    <input onChange={this.changeTerms} type="checkbox" selected={terms} />
                </div>
                <div>
                    <label htmlFor="terms">Gender:</label>
                    Male: <input onChange={this.changeGender} type="radio" value="male" name="gender" />
                    Woman: <input onChange={this.changeGender} type="radio" value="woman" name="gender" />
                    Other: <input onChange={this.changeGender} type="radio" value="other" name="gender" />
                </div>
                <button type="submit">Submit</button>
                <Link to={'/'}>
                <button>Back to Home Page</button>
                </Link>
                {error ?
                    (
                        <div>
                            {error}
                        </div>
                    ) : null
                }
            </form>
        )
    }
}

export default CheckoutForm