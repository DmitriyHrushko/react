const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Dmitriy111' },
		{ id: 2, name: 'Daria' },
		{ id: 3, name: 'Alexander' },
		{ id: 4, name: 'Tarek' },
		{ id: 5, name: 'Vadim' }
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are U?' },
		{ id: 3, message: 'Okey' },
		{ id: 4, message: 'Write me later' },
		//{ id: 5, message: 'Nice' }
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 6, message: body }]
			};
		default:
			return state;
	}
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;