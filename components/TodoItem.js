import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoStatusButton from "./TodoStatusButton";

const TodoItem = (props) => {
	const { id, title, desc, isDone } = props;

	return (
		<View style={styles.mainWrapper}
			<TodoStatusButton id={id} isDone={isDone} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainWrapper: {
		
	},
});