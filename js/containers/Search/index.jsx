import React from 'react';
import debounce from 'lodash/debounce';

import SearchBox from 'components/SearchBox';
import UserList from 'components/UsersList';
import Divider from 'material-ui/Divider';
import PurchasesListContainer from 'containers/PurchasesList';

import Action from 'search/Action';
import Store from 'search/Store';

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.selectUser = this.selectUser.bind(this);
    }

    state = {
        users: Store.getUsers(),
        selected: null
    };

    componentDidMount() {
        Store.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(this.getDataFromStore());
    }

    getDataFromStore() {
        return {
            users: Store.getUsers()
        }
    }

    onChange(value) {
        Action.findUser(value);
    }

    selectUser(user) {
        Action.selectUser(user);
    }

    render() {
        return (
            <div>
                <SearchBox onChange = { debounce(this.onChange, 500) } />
                <UserList users = {this.state.users} onSelect = { this.selectUser } />
                <Divider />
                <br/>
                <PurchasesListContainer />
            </div>
        );
    }
}

export default SearchContainer;