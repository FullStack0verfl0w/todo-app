import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { dispatchContext } from "../contexts";
import { ACTION_TYPE_ADD_TODO, ACTION_TYPE_TOGGLE_ADD_VIEW } from "../actions";
import TextButton from "./TextButton";

const TodoAddView = (props) => {
	const { setShowAddView } = props;
	const [text, setText] = useState("");
	const dispatch = useContext(dispatchContext);

	const onTextInputChange = (text) => {
		setText(text);
	};

	const closeView = (e) => {
		dispatch({ type: ACTION_TYPE_TOGGLE_ADD_VIEW, state: false });
	};

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