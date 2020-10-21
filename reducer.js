import {
	ACTION_TYPE_ADD_TODO,
	ACTION_TYPE_DELETE_TODO,
	ACTION_TYPE_CHANGE_TODO_STATUS,
	ACTION_TYPE_TOGGLE_ADD_VIEW,
} from "./actions";

const reducer = (state, action) => {
	switch (action.type) {

		// Добавляем элемент todo в state
		case ACTION_TYPE_ADD_TODO: {
			const newState = {...state};
			// Структура элемента todo
			const newElement = {
				id: newState.todo.length + 1,
				text: action.text,
				status: false,
			};
			// Заносим элемент в массив
			newState.todo.push(newElement);

			return newState;
		}

		// Удаляем элемент todo из state
		case ACTION_TYPE_DELETE_TODO: {
			const newState = {...state};
			// Удаляем элемент
			newState.todo.splice(action.id, 1);

			return newState;
		}

		// Изменяем статус элемента todo
		case ACTION_TYPE_CHANGE_TODO_STATUS: {
			const newState = {...state};

			// Проверяем на наличие элемента в state
			if ( newState.todo[action.id] ) {
				
				// Изменяем статус на указанный в action.status или просто переворачиваем его
				newState.todo[action.id].status = action.status || !newState.todo[action.id].status
			}

			return newState;
		}

		// Изменяем состояние окна добавления элемента
		case ACTION_TYPE_TOGGLE_ADD_VIEW: {
			const newState = {...state};

			// Изменяем статус на указанный в action.status или просто переворачиваем его
			newState.todoAddViewState = action.state || !newState.todoAddViewState;

			return newState;
		}
		default: {
			return state;
		}
	}
};

export default reducer;