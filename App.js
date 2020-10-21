import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { stateContext, dispatchContext } from "./contexts";
import reducer from "./reducer";

// Начальный state
const initialState = {
	todo: [],
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
	return (
		<View style={styles.main}>

		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;