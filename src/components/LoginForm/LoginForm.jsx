import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Email</h3>
          <label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
              required
            />
          </label>
          <h3>Password</h3>
          <label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginForm);