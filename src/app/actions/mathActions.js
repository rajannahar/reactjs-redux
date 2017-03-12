export function addNumber(number) {
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type: "SET_NAME", 
				payload: text
			});
		}, 2000);
	}
}


export function subtractNumber(number) {
	return {
		type: "SUBTRACT", 
		payload: number
	};
}