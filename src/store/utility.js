export const updateObject = (oldOject, updatedProperties) => {
	return {
		...oldOject,
		...updatedProperties
	};
};