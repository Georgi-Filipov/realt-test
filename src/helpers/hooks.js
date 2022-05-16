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

export const usePhone = () => {
	// eslint-disable-next-line prefer-regex-literals
	const reg = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$', 'i');
	return () => ({
		required: true,
		validator: (_, value) => {
			if (reg.test(value)) {
				return Promise.resolve();
			}
			return Promise.reject(new Error('Неверный формат телефона'));
		},
	});
};
