import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { dispatchContext } from "../contexts";
import { ACTION_TYPE_ADD_TODO, ACTION_TYPE_TOGGLE_ADD_VIEW } from "../actions";
import TextButton from "./TextButton";

const TodoAddView = (props) => {
	const { setShowAddView } = props;
	const [text, setText] = useState("");
	const dispatch = useContext(dispatchContext);

	// Записываем текст в state
	const onTextInputChange = (text) => {
		setText(text);
	};

	// Закрываем окно
	const closeView = (e) => {
		dispatch({ type: ACTION_TYPE_TOGGLE_ADD_VIEW, state: false });
	};

	// Добавляем элемент в state и закрываем окно
	const doAdd = (e) => {
		dispatch({ type: ACTION_TYPE_ADD_TODO, text: text});
		closeView(e);
	};

	return (
		<View style={styles.mainWrapper}>
			<View style={styles.info}>
				<Text style={styles.text}>Enter what you want to do:</Text>
				<TextInput style={styles.textInput} onChangeText={onTextInputChange}/>
				<TextButton text="Add" onPress={doAdd} textSize={20} style={styles.button}/>
			</View>
			<TextButton text="✕" textSize={13} style={styles.closeButton} onPress={closeView} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainWrapper: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "#000a",
		alignItems: "center",
		justifyContent: "center",
	},
	info: {
		width: 320,
		height: 200,
		backgroundColor: "#fff",
		justifyContent: "space-between",
		borderRadius: 3,
	},
	closeButton: {
		width: 24,
		height: 24,
		borderRadius: 1000,
		position: "relative",
		bottom: 210,
		left: 156,
	},
	text: {
		fontSize: 18,
		padding: 8,
		paddingBottom: 0,
	},
	textInput: {
		fontSize: 18,
		paddingHorizontal: 8,
	},
	button: {
		paddingVertical: 12,
		borderRadius: 0,
		borderWidth: 0,
		borderTopWidth: 1,
		borderBottomLeftRadius: 3,
		borderBottomRightRadius: 3,
	},
});

export default TodoAddView;