import React from 'react';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.user);
        }
    }

    render() {
        let {user} = this.props;
        return (
            <div onClick = { this.onClick }>
                { user.firstName } { user.lastName } { user.middleName }
            </div>
        )
    }
}

User.propTypes = {
    onClick: React.PropTypes.func,
    user: React.PropTypes.shape({
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        middleName: React.PropTypes.string.isRequired
    })
};

export default User;