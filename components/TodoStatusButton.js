import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const TodoStatusButton = (props) => {
	const { id, isDone } = props;

	return (
		<TouchableOpacity>
			<View style={[mainWrapper, isDone ? styles.done : styles.notDone]} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mainWrapper: {
		height: 32,
		width: 32,
	},
	done: {
		backgroundColor: "#33aa33",
	},
	notDone: {
		backgroundColor: "#aa3333",
	}
});

export default TodoStatusButton;