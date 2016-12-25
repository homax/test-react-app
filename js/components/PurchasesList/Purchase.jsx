import React from 'react';

class Purchase extends React.Component {

    render() {

        let {purchase} = this.props;
        let datetime = new Date(purchase.date);
        let date = [
            datetime.getFullYear(),
            datetime.getMonth(),
            datetime.getDate()
        ].join('.');
        let time = [
            datetime.getHours(),
            datetime.getMinutes()
        ].join(':');

        return (
            <div>
                Сумма: { this.props.purchase.sum } (Скидка: { this.props.purchase.discount })
                <p style = {{textAlign: 'right'}}>
                    <small>{ `${date} ${time}` }</small>
                </p>
            </div>
        );
    }
}

Purchase.propTypes = {
    purchase: React.PropTypes.shape({
        sum: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        discount: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
        date: React.PropTypes.string
    })
};

export default Purchase;