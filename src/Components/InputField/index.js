import {Component} from 'react'
import {v4} from 'uuid'
import PasswordComponent from '../PasswordComponent'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class InputField extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordList: [],
    count: 0,
  }

  renderPasswordsList = () => {
    const {passwordList} = this.state
    return (
      <>
        {passwordList.map(eachPassword => (
          <PasswordComponent
            passwordDetails={eachPassword}
            key={eachPassword.id}
          />
        ))}
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {usernameInput, websiteInput, passwordInput, count} = this.state
    const initialBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newPassword = {
      id: v4(),
      usernameInput,
      websiteInput,
      passwordInput,
      isClicked: false,
      count,
      initialClassName: initialBackgroundClassName,
    }
    this.setState(prevState => ({
      usernameInput: '',
      websiteInput: '',
      passwordInput: '',
      count: prevState.count + 1,
      passwordList: [...prevState.passwordList, newPassword],
    }))
  }

  onEnterWebsite = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onEnterUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onEnterPassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  render() {
    const {websiteInput, usernameInput, passwordInput, count} = this.state
    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="form-container">
          <form className="inputs-container" onSubmit={this.onSubmitForm}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-box">
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-image"
                />
              </div>
              <div className="input-column-container">
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-column"
                  onChange={this.onEnterWebsite}
                  value={websiteInput}
                />
              </div>
            </div>
            <div className="input-box">
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-image"
                />
              </div>
              <div className="input-column-container">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-column"
                  onChange={this.onEnterUsername}
                  value={usernameInput}
                />
              </div>
            </div>
            <div className="input-box">
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-image"
                />
              </div>
              <div className="input-column-container">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-column"
                  onChange={this.onEnterPassword}
                  value={passwordInput}
                />
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
          <div className="pic-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pic"
            />
          </div>
        </div>
        <div className="passwords-container">
          <div className="heading-search-container">
            <div className="heading-container">
              <h1 className="password-heading">
                Your Passwords <span className="count">{count}</span>
              </h1>
            </div>
            <div className="search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="search-box"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="checkbox-container">
            <label className="label-name" id="checkbox">
              <input
                type="checkbox"
                className="checkbox-box"
                htmlFor="checkbox"
              />
              Show Passwords
            </label>
          </div>
          <ul className="password-inside-container">
            {this.renderPasswordsList()}
          </ul>
        </div>
      </div>
    )
  }
}
export default InputField
