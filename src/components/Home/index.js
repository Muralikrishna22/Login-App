import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeBtn = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  changeBtnName = () => {
    const {isLogin} = this.state

    if (isLogin === true) {
      return 'Logout'
    }
    return 'Login'
  }

  showMsg = () => {
    const {isLogin} = this.state

    if (isLogin === true) {
      return 'Welcome User'
    }
    return 'Please Login'
  }

  render() {
    const btnName = this.changeBtnName()
    const msg = this.showMsg()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">{msg}</h1>
          <button className="button" onClick={this.changeBtn}>
            {btnName}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
