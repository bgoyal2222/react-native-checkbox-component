/**
 * react-native-custom-check-box
 * Customizable Checkbox component for react native, it works on iOS and Android
 * https://github.com/bgoyal2222/react-native-custom-check-box
 * Email:bhaveshgoyal999@gmail.com
 * Profile:https://www.linkedin.com/in/bhavesh-goyal/
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	ViewPropTypes,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.state = {
			isChecked: this.props.isChecked,
		}
	}
	static propTypes = {
		...(ViewPropTypes || View.PropTypes),
		leftText: PropTypes.string,
		leftTextView: PropTypes.element,
		rightText: PropTypes.string,
		leftTextStyle: PropTypes.object,
		rightTextView: PropTypes.element,
		rightTextStyle: PropTypes.object,
		checkedComponent: PropTypes.element,
		unCheckedComponent: PropTypes.element,
		onClick: PropTypes.func.isRequired,
		isChecked: PropTypes.bool.isRequired,
		checkBoxColor: PropTypes.string,
		checkedCheckBoxColor: PropTypes.string,
		uncheckedCheckBoxColor: PropTypes.string,
		disabled: PropTypes.bool,
		index:PropTypes.number
	}
	static defaultProps = {
		isChecked: false,
		leftTextStyle: {},
		rightTextStyle: {}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.isChecked !== nextProps.isChecked) {
			return {
				isChecked: nextProps.isChecked
			};
		}
		return null;
	}
	onClick() {
		const checkboxState = !this.state.isChecked;
		this.setState({
			isChecked: checkboxState
		})
		this.props.onClick(checkboxState,this.props.index);
	}
	_renderLeft() {
		if (this.props.leftTextView) return this.props.leftTextView;
		if (!this.props.leftText) return null;
		return (
			<Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
		);
	}
	_renderRight() {
		if (this.props.rightTextView) return this.props.rightTextView;
		if (!this.props.rightText) return null;
		return (
			<Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
		);
	}

	_renderImage() {
		if (this.state.isChecked) {
			return this.props.checkedComponent ? this.props.checkedComponent : this.genCheckedIcon();
		} else {
			return this.props.unCheckedComponent ? this.props.unCheckedComponent : this.genCheckedIcon();
		}
	}

	_getCheckedCheckBoxColor() {
		return this.props.checkedCheckBoxColor ? this.props.checkedCheckBoxColor : this.props.checkBoxColor
	}

	_getUncheckedCheckBoxColor() {
		return this.props.uncheckedCheckBoxColor ? this.props.uncheckedCheckBoxColor : this.props.checkBoxColor
	}

	_getTintColor() {
		return this.state.isChecked ? this._getCheckedCheckBoxColor() : this._getUncheckedCheckBoxColor()
	}

	genCheckedIcon() {
		var source;
		source = this.state.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline';
		return (
			<MaterialCommunityIcons name={source} size={20} color={this._getTintColor()} />
		);
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.isChecked !== nextProps.isChecked) {
			this.setState({ isChecked: nextProps.isChecked });
		}
	}
	render() {
		return (
			<TouchableOpacity
				style={this.props.style}
				onPress={this.onClick}
				disabled={this.props.disabled}
			>
				<View style={styles.container}>
					{this._renderLeft()}
					{this._renderImage()}
					{this._renderRight()}
				</View>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	leftText: {
		flex: 1,
	},
	rightText: {
		flex: 1,
		marginLeft: 10
	}
});