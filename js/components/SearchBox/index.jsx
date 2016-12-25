import React from 'react';
import TextField from 'material-ui/TextField';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        return (
            <div>
                <TextField
                    onChange = { this.onChange }
                    hintText = 'Введите имя пользователя или номер карты'
                    floatingLabelText = 'Поиск пользователя'
                    fullWidth = { true }
                />
            </div>
        )
    }
}

SearchBox.propTypes = {
    onChange: React.PropTypes.func
};

export default SearchBox;