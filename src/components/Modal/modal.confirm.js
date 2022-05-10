import { Modal } from 'antd';
import './modal.confirm.scss';
import { BTN_TXT, LABELS } from '../../constants';

const Confirm = ({
	content,
	title = LABELS.ARE_YOU_SURE,
	cancelText = BTN_TXT.GO_BACK,
	okText = BTN_TXT.YES_SURE,
	...props
}) => {
	const rootSelector = () => {
		return document.querySelector('.portal-container_body');
	};
	return Modal.confirm({
		className: 'modal-confirm',
		title,
		content,
		cancelText,
		okText,
		icon: null,
		centered: true,
		getContainer: rootSelector,
		...props,
	});
};

export default Confirm;
