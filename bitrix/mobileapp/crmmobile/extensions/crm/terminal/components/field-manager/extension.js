/**
 * @module crm/terminal/components/field-manager
 */
jn.define('crm/terminal/components/field-manager', (require, exports, module) => {
	const { FieldFactory } = require('layout/ui/fields');
	const { mergeImmutable } = require('utils/object');

	/**
	 * @class FieldManager
	 */
	class FieldManager
	{
		/**
		 * @param {Object[]} fieldsData
		 * @param {Object} options
		 */
		constructor(fieldsData, options = {})
		{
			this.fieldsData = fieldsData;
			this.renderIfEmpty = BX.prop.getBoolean(options, 'renderIfEmpty', true);
		}

		/**
		 * @param {String} name
		 * @param {Object} data
		 */
		renderField(name, data = {})
		{
			const fieldData = this.getFieldData(name);
			if (!fieldData)
			{
				return null;
			}

			const field = FieldFactory.create(
				fieldData.type,
				mergeImmutable(fieldData, data),
			);

			return field.isEmpty() && !this.renderIfEmpty ? null : field;
		}

		/**
		 * @param {String} fieldName
		 * @return {Object|null}
		 */
		getFieldData(fieldName)
		{
			const foundFieldsData = this.fieldsData.filter((field) => field.name === fieldName);
			const foundFieldData = foundFieldsData.length > 0 ? foundFieldsData[0] : null;

			return foundFieldData || null;
		}
	}

	module.exports = {
		FieldManager,
		FieldNameSum: 'SUM',
		FieldNamePhone: 'PHONE',
		FieldNameClient: 'CLIENT',
		FieldNameClientName: 'CLIENT_NAME',
		FieldNameDatePaid: 'DATE_PAID',
		FieldNameStatus: 'STATUS',
		FieldNamePaymentSystem: 'PAYMENT_SYSTEM',
		FieldNameSlipLink: 'SLIP_LINK',
	};
});
