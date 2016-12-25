import React from 'react';
import User from './User';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class UsersList extends React.Component {

    render() {
        let styles = {
            maxHeight: '300px',
            overflowX: 'auto'
        };

        let users = this.props.users.length > 0 ?
            (
                <List style = {styles}>
                    {this.props.users.map(user => (
                        <ListItem key = {user.id}>
                            <User user = { user } onClick = { this.props.onSelect } />
                        </ListItem>
                    ))}
                </List>
            ) :
            (
                <div>No users</div>
            );

        return (
            <div>
                <Subheader>Список пользователей</Subheader>
                { users }
            </div>
        );
    }
}

UsersList.PropTypes = {
    users: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func
};

UsersList.defaultProps = {
    users: [],
    onSelect: () => {}
};

export default UsersList;