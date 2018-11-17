import React from "react";
import styles from "./styles";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", successMessage: false };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({ successMessage: true }))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  renderForm = () => {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <button type="submit" className={styles.button}>
          Apply
        </button>
      </form>
    );
  };

  render() {
    const { successMessage } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Registration</h1>
        {successMessage ? <p>tada</p> : this.renderForm()}
      </div>
    );
  }
}

export default Registration;
