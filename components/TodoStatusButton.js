import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { dispatchContext } from "../contexts";
import { ACTION_TYPE_CHANGE_TODO_STATUS } from "../actions";

const TodoStatusButton = (props) => {
	const { id, isDone } = props;
	const dispatch = useContext(dispatchContext);

	// Меняем статус элемента
	const onPress = (e) => {
		dispatch({ type: ACTION_TYPE_CHANGE_TODO_STATUS, id: id });
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.mainWrapper, isDone ? styles.done : styles.notDone]}>
			{
				isDone ?
					<Text style={styles.text}>✓</Text>
				:
					<Text style={styles.text}>✗</Text>
			}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mainWrapper: {
		height: 48,
		width: 48,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#fff",
		fontSize: 24,
		textAlign: "center",
	},
	done: {
		backgroundColor: "#33aa33",
	},
	notDone: {
		backgroundColor: "#aa3333",
	}
});

export default TodoStatusButton;