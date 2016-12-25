import React from 'react';
import Purchase from './Purchase';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class PurchasesList extends React.Component {
    render() {

        let firstName = this.props.user && this.props.user.firstName || '';
        let lastName = this.props.user && this.props.user.lastName || '';
        let cardNumber = this.props.user && this.props.user.cardNumber || '';

        let styles = {
            maxHeight: '300px',
            overflowX: 'auto'
        };
        let purchases = this.props.purchases.length > 0 ?
            (
                <div>
                    <Subheader>
                        { `Покупки ${firstName} ${lastName} (${cardNumber})` }
                    </Subheader>
                    <List style = {styles}>
                        {this.props.purchases.map(purchase => {
                            return (
                                <ListItem key = {purchase.id}>
                                    <Purchase purchase = { purchase } />
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            ) :
            null;



        return (
            <div>
                { purchases }
            </div>
        );
    }
}

PurchasesList.propTypes = {
    purchases: React.PropTypes.array,
    user: React.PropTypes.object
};

export default PurchasesList;