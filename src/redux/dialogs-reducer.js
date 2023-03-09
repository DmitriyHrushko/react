const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
	newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body,
			};
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 6, message: body }]
			};
		default:
			return state;
	}
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;