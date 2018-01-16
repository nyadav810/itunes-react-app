import React from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react';

const RadioButton = ({ label, value, media, onChange }) => {
    return (
        <Form.Field>
            <Radio
               label={label}
               name='radioGroup'
               value={value}
               checked={media === value}
               onChange={e => {
                   e.preventDefault();
                   onChange();
               }}
            />
        </Form.Field>
    );
};

RadioButton.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    media: PropTypes.string,
    onChange: PropTypes.func
};

export default RadioButton;
