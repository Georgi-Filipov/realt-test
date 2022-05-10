import React from 'react';
import Default from './modal.default';
import Confirm from './modal.confirm';

const Modal = props => <Default {...props} />;

Modal.Default = Default;
Modal.Confirm = Confirm;

export default Modal;
