import './index.css'

const PasswordComponent = props => {
  const {passwordDetails} = props
  const {
    id,
    websiteInput,
    usernameInput,
    passwordInput,
    isClicked,
    initialClassName,
  } = passwordDetails
  const initial = websiteInput ? websiteInput[0].toUpperCase() : ''
  const passwordImageUrl = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
    : passwordInput
  const passwordClassName = passwordImageUrl ? 'image' : 'password-name'
  return (
    <li className="password-item">
      <div className="password-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <h1 className="website-name">{websiteInput}</h1>
          <p className="user-name">{usernameInput}</p>
          <p className={passwordClassName}>{passwordImageUrl}</p>
        </div>
        <div>
          <button className="delete-button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              className="delete-image"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PasswordComponent
