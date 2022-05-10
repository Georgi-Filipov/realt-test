// eslint-disable-next-line import/no-cycle
import { TXT } from './txt';

export const WEB_STORAGE = {
	ACCESS_TOKEN: 'access_token',
	REFRESH_TOKEN: 'refresh_token',
};

export const JUSTIFY = {
	START: 'start',
	END: 'end',
	SPACE_BETWEEN: 'space-between',
	CENTER: 'center',
	SPACE_AROUND: 'space-around',
};

export const ALIGN = {
	TOP: 'top',
	MIDDLE: 'middle',
	BOTTOM: 'bottom',
};

export const SPACE_DIRECTION = {
	VERTICAL: 'vertical',
	HORIZONTAL: 'horizontal',
};

export const WHEN_SHOULD_INTEREST_BE_ADDED = Array(31)
	.fill(1)
	.map((i, idxArr) => {
		const idx = idxArr + 1;
		const j = idx % 10;
		const k = idx % 100;
		if (j === 1 && k !== 11) {
			return { label: `${idx}st of month`, value: idx };
		}
		if (j === 2 && k !== 12) {
			return { label: `${idx}nd of month`, value: idx };
		}
		if (j === 3 && k !== 13) {
			return { label: `${idx}rd of month`, value: idx };
		}
		return { label: `${idx}th of month`, value: idx };
	});

export const FEE_TYPES = {
	INTERESTED_RATE: 'Interest Rate',
	FIXED_AMOUNT: 'Fixed Amount',
};

export const FEE_TYPES_OPTIONS = Object.keys(FEE_TYPES).map(i => ({
	value: i,
	label: FEE_TYPES[i],
}));

export const USER_STATUS = {
	INACTIVE: 'Inactive',
	ACTIVE: 'Active',
	PENDING: 'Pending',
};

export const SORTER_DIRECTIONS = { ascend: 'ASC', descend: 'DESC' };
export const SCROLL_DIRECTION = { FORWARD: 'forward', BACKWARD: 'backward' };

export const TABLE_LIMIT = 50;

export const YES_NO_OPTIONS = [
	{ value: true, label: TXT.YES },
	{ value: false, label: TXT.NO },
];

export const FEE_TYPE_SAVINGS = [
	{ value: true, label: TXT.FIXED_CASH_WITHDRAWAL },
	{ value: false, label: `${TXT.CASH_WITHDRAWAL} %` },
];

export const FREQUENCY = [
	{ value: 'daily', label: TXT.DAILY },
	{ value: 'weekly', label: TXT.WEEKLY },
	{ value: 'monthly', label: TXT.MONTHLY },
	{ value: 'quarterly', label: TXT.QUARTERLY },
	{ value: 'annually', label: TXT.ANNUALLY },
];
export const INTERESTED_METHODS_LOAN = [
	{ value: 'flat', label: TXT.FLAT },
	{ value: 'declining balance', label: TXT.DECLINING_BALANCE },
];
