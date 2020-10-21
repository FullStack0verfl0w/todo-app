import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { dispatchContext } from "../contexts";
import { ACTION_TYPE_DELETE_TODO } from "../actions";
import TodoStatusButton from "./TodoStatusButton";
import TextButton from "./TextButton";

const TodoItem = (props) => {
	const { id, text, isDone } = props;
	const dispatch = useContext(dispatchContext);

	const doDelete = (e) => {
		dispatch({ type: ACTION_TYPE_DELETE_TODO, id: id });
	};
	console.log("HELLO", id, text, isDone)

	return (
		<>
			<View style={styles.mainWrapper}>
				<TodoStatusButton id={id} isDone={isDone} />
				<Text style={styles.text}>{text}</Text>
				<TextButton onPress={doDelete} text="×" style={styles.button} textSize={32}/>
			</View>
			<View style={styles.border} />
		</>
	);
};

const styles = StyleSheet.create({
	mainWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	text: {
		width: 220,
		fontSize: 16,
		textTransform: "uppercase",
		textAlign: "left",
	},
	button: {
		width: 48,
		height: 48,
	},
	border: {
		width: "100%",
		marginVertical: 8,
		borderBottomWidth: 1,
		borderColor: "#aaa5",
	},
});

export default TodoItem;