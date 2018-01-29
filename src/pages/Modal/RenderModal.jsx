import { Component } from 'react';

export class RenderModal extends Component {
	state = {
		item: {},
		show: false
	};

	render() {
		const { item, show } = this.state;
		return this.props.render({
			item: item,
			show: show,
			showModal: this._showModal,
			hideModal: this._hideModal
		});
	}

	_showModal = itemObj => {
		this.setState(({ item }) => ({
			item: { ...itemObj },
			show: true
		}));
	};

	_hideModal = () => {
		this.setState({ item: {}, show: false });
	};
}
