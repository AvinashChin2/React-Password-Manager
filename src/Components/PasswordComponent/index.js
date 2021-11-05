import './index.css'

const PasswordComponent = props => {
  const {passwordDetails, deleteButton} = props
  const {
    id,
    websiteInput,
    usernameInput,
    passwordInput,
    isClicked,
    isActive,
    initialClassName,
  } = passwordDetails
  const onDeleteButton = () => {
    deleteButton(id)
  }
  const initial = websiteInput ? websiteInput[0].toUpperCase() : ''
  const passwordImageUrl = isClicked
    ? 'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
    : passwordInput
  const passwordClassName = isActive ? 'image' : 'password-name'
  return (
    <li className="password-item">
      <div className="password-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <p className="website-name">{websiteInput}</p>
          <p className="user-name">{usernameInput}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className={passwordClassName}
            alt="stars"
          />
        </div>
        <div>
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteButton}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              className="delete-image"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PasswordComponent
