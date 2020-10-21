import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TextButton = (props) => {
	const { text, onPress, style, textSize } = props;

	return (
		<TouchableOpacity style={[styles.mainWrapper, style]} onPress={onPress}>
			<Text style={[styles.text, { fontSize: textSize }]}>{text}</Text>
		</TouchableOpacity>
	);
};


const styles = StyleSheet.create({
	mainWrapper: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#aaa5",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 18,
		color: "#333",
		textAlign: "center",
	}
});

export default TextButton;