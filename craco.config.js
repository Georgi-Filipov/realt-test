const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							// btn
							'@btn-default-color': '#007D51',
							'@btn-default-bg': '#FFF',
							'@btn-default-border': '#007D51',
							'@btn-height-base': '40px',

							'@btn-disable-color': '#FFF',
							'@btn-primary-color': '#fff',
							'@btn-padding-horizontal-base': '17px',
							// btn
							// input
							'@input-bg': '#F4F7F8',
							'@input-placeholder-color': '#9EA8B7',
							'@input-height-base': '40px',
							'@input-color': '#222222',
							'@input-addon-bg': '#F4F7F8',
							// input
							// divider
							'@divider-color': '#979797',
							'@divider-text-padding': '21px',
							// divider
							// form
							'@form-item-label-font-size': '16px',
							'@form-item-margin-bottom': '8px',
							'@label-color': '#014945',
							// form
							// select
							'@select-border-color': ' #979797',
							'@select-item-selected-font-weight': 500,
							// select
							// modal
							'@modal-mask-bg': 'rgba(0, 39, 72, 0.6)',
							'@modal-header-border-width': '0px',
							'@modal-body-padding': '0px 94px',
							'@modal-header-padding': '72px 0 0',
							// modal
							'@font-size-base': '16px',
							'@primary-color': '#007D51',
							'@border-radius-base': '2px',
							'@text-color': '#222222',
							'@text-color-secondary': '#A7A7A7',
							'@link-color': '#0077D5',
							'@radio-top': '0',
							'@radio-size': '22px',
							'@radio-dot-size': '12px',
							'@component-background': '#FCFCFC',
							'@height-base': '40px',

							// common
							'@line-height-base': '1',

							// table
							'@table-bg': '#F4F6F8',
							'@table-header-bg': '#fff',
							'@table-font-size': '14px',

							// pagination
							'@pagination-item-size': '32px',
							'@pagination-font-weight-active': 'bold',
							'@pagination-item-bg-active': '#007D51',

							// checkbox
							'@checkbox-size': '22px',

							'@switch-height': '27px',
							'@switch-min-width': '53px',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
