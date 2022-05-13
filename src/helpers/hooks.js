export const useRequired = () => ({
	required: true,
	message: 'Обязательное поле',
});

export const useMinMax =
	(min = 0, max = 999) =>
	() => ({
		required: true,
		validator: (_, value) => {
			if (value >= min && value <= max) {
				return Promise.resolve();
			}
			return Promise.reject(new Error(`В пределах от ${min} до ${max}`));
		},
	});
