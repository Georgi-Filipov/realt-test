import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	apartmentsList: [],
	apartmentsListLoading: false,
	apartmentInfo: {
		id: 1,
		title: 'Квартира в ЖК "Столичный"',
		price: 327,
		currency: 'USD',
		address: 'улица Тимирязева, 10',
		image:
			'/api/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-05-11_%D0%B2_14.21.51.png',
		location_type: 'Жилая',
		rent_type: 'Аренда',
		city: 'Минск',
		date: '2022-05-11',
		description:
			'сдам однокомнатную квартиру в новостройке ЖК "Столичный". Квартира полностью мебелированная: есть кухня, холодильник, электроплита,обеденный стол и стулья, диван, кровать, шкаф, комод, туалетный столик с зеркалом, полка, письменный стол, стиральная машина, пылесос. Оборудована гардеробная комната.\r\nВ доме работает консьерж, установлено круглосуточное видеонаблюдение, оборудована детская площадка.\r\nВ 10 минутах ходьбы метро "Молодежная", супермаркет "Корона". Шаговая доступность обелиска стела «Минск-город-герой», в непосредственной близости парковые зоны, а также р.Свислочь и Комсомольское озеро.\r\nПодключен интернет.\r\nСдается ответственным, порядочным и аккуратным людям без маленьких детей и домашних животных по договору (желательно девушке или паре). Исключена возможность аренды одинокими парнями, студентами и иностранцами. Стоимость 850 рублей + коммунальные платежи. Залог 850 рублей, который возвращается при выселении. В квартире никто не прописан, возможна ваша регистрация для оптимизации коммунальных платежей.\r\nНа все обращения отвечаю исключительно в вайбер.',
		phone: '+375 33 323-18-38',
		year: 2018,
		area: 50,
		room_count: 1,
		hot: false,
	},
	apartmentInfoLoading: false,
};

export const apartmentsSlice = createSlice({
	name: 'apartments',
	initialState,
	reducers: {
		setApartmentsList: (state, { payload }) => {
			state.apartmentsList = [...state.apartmentsList, ...payload];
		},
		clearApartmentsList: state => {
			state.apartmentsList = [];
		},
		setApartmentsListLoading: (state, { payload }) => {
			state.apartmentsListLoading = payload;
		},
		setApartmentInfo: (state, { payload }) => {
			state.apartmentInfo = payload;
		},
		clearApartmentInfo: () => {
			// state.apartmentInfo = {};
		},
		setApartmentInfoLoading: (state, { payload }) => {
			state.apartmentInfoLoading = payload;
		},
	},
});

export const {
	clearApartmentInfo,
	clearApartmentsList,
	setApartmentInfo,
	setApartmentsList,
	setApartmentInfoLoading,
	setApartmentsListLoading,
} = apartmentsSlice.actions;

export default apartmentsSlice.reducer;
