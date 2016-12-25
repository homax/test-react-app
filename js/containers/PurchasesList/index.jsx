import React from 'react';
import PurchasesList from 'components/PurchasesList';

import Store from 'search/Store';
import PurchasesAction from 'purchases/Action';
import PurchasesStore from 'purchases/Store';

class PurchasesListContainer extends React.Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    state = {
        selected: Store.getSelectedUser(),
        purchases: PurchasesStore.getPurchases()
    };

    componentDidMount() {
        Store.addChangeListener(this._onChange);
        PurchasesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange);
        PurchasesStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        let state = this.getDataFromStore();
        if (state.selected && (!this.state.selected || state.selected.id !== this.state.selected.id)) {
            PurchasesAction.loadPurchasesForUser(state.selected);
        }
        this.setState(state);
    }

    getDataFromStore() {
        return {
            selected: Store.getSelectedUser(),
            purchases: PurchasesStore.getPurchases()
        }
    }

    render() {
        return (
            <div>
                <PurchasesList user = { this.state.selected } purchases = { this.state.purchases } />
            </div>
        );
    }
}

export default PurchasesListContainer;