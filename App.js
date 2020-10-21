import React, { useReducer, useContext, useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { stateContext, dispatchContext } from "./contexts";
import { ACTION_TYPE_TOGGLE_ADD_VIEW } from "./actions";
import reducer from "./reducer";
import TodoItem from "./components/TodoItem";
import TextButton from "./components/TextButton";
import TodoAddView from "./components/TodoAddView";

// Начальный state
const initialState = {
	todo: [],
	todoAddViewState: false,
};

const App = (props) => {
	
	// Создаем state и dispatch
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				<AppContainer />
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
};

const AppContainer = (props) => {
	const state = useContext(stateContext);
	const dispatch = useContext(dispatchContext);

	// Переключаем состояние окна
	const toggleAddView = (e) => {
		dispatch({ type: ACTION_TYPE_TOGGLE_ADD_VIEW, state: true });
	};

	return (
		<>
			<ScrollView style={styles.main} contentContainerStyle={styles.mainScroll}>
				{
					// Выводим красивое сообщение, о том, что ничего нет
					state.todo.length === 0 ?
						<Text style={styles.empty}>There's soo empty.</Text>
					:
						// Проходимся по state и рендерим каждый элемент
						state.todo.map((elem, id) => {
							return <TodoItem id={id}
											 text={elem.text}
											 isDone={elem.status}
											 key={id} />
						})
				}
			</ScrollView>
			<TextButton style={styles.addButton} text="+" textSize={32} onPress={toggleAddView}/>
			{
				// Показываем окно для добавления
				state.todoAddViewState ?
					<TodoAddView />
				: <></>
			}
		</>
	);
}

const styles = StyleSheet.create({
	main: {
		paddingTop: 32,
		padding: 12,
		backgroundColor: '#f5f5ff',
	},
	mainScroll: {
		alignItems: "flex-start",
		justifyContent: "center",
	},
	empty: {
		color: "#000",
		fontSize: 24,
	},
	addButton: {
		position: "absolute",
		right: 16,
		bottom: 16,
		width: 48,
		height: 48,
		paddingVertical: 0,
		paddingHorizontal: 0,
		borderRadius: 100,
	}
});

export default App;