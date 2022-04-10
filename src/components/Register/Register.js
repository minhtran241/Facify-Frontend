import React, { Component } from "react";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
		};
	}

	onFirstNameChange = (event) => {
		this.setState({ firstName: event.target.value });
	};

	onLastNameChange = (event) => {
		this.setState({ lastName: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

	onSubmitRegister = () => {
		fetch("https://fierce-coast-61354.herokuapp.com/register", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange("home");
				}
			});
	};

	_handleKeyDown = (event) => {
		if (event.key === "Enter") {
			this.onSubmitRegister();
		}
	};

	render() {
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f1 fw6 ph0 mh0">Register</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="first-name">
									First Name
								</label>
								<input
									onChange={this.onFirstNameChange}
									onKeyDown={this._handleKeyDown}
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="text"
									name="first-name"
									id="first-name"
								/>
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="last-name">
									Last Name
								</label>
								<input
									onChange={this.onLastNameChange}
									onKeyDown={this._handleKeyDown}
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="text"
									name="last-name"
									id="last-name"
								/>
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">
									Email
								</label>
								<input
									onChange={this.onEmailChange}
									onKeyDown={this._handleKeyDown}
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="email"
									name="email-address"
									id="email-address"
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">
									Password
								</label>
								<input
									onChange={this.onPasswordChange}
									onKeyDown={this._handleKeyDown}
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="password"
									name="password"
									id="password"
								/>
							</div>
							<label className="pa0 ma0 lh-copy f6 pointer">
								<input type="checkbox" /> Remember me
							</label>
						</fieldset>
						<div className="">
							<input
								onKeyDown={this._handleKeyDown}
								onClick={this.onSubmitRegister}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
								type="submit"
								value="Register"
							/>
						</div>
					</div>
				</main>
			</article>
		);
	}
}

export default Register;
