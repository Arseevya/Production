/**
 * @module tasks/layout/task/fields/mark
 */
jn.define('tasks/layout/task/fields/mark', (require, exports, module) => {
	const {Loc} = require('loc');
	const {MenuSelectField} = require('layout/ui/fields/menu-select');

	class Mark extends LayoutComponent
	{
		static get type()
		{
			return {
				positive: Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_MARK_POSITIVE'),
				negative: Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_MARK_NEGATIVE'),
				noValue: Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_MARK_NO_VALUE'),
			};
		}

		constructor(props)
		{
			super(props);

			this.state = {
				readOnly: props.readOnly,
				mark: props.mark,
			};
		}

		componentWillReceiveProps(props)
		{
			this.state = {
				readOnly: props.readOnly,
				mark: props.mark,
			};
		}

		updateState(newState)
		{
			this.setState({
				readOnly: newState.readOnly,
				mark: newState.mark,
			});
		}

		render()
		{
			return View(
				{
					style: (this.props.style || {}),
				},
				MenuSelectField({
					readOnly: this.state.readOnly,
					title: Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_MARK_MSGVER_1'),
					value: this.state.mark,
					emptyValue: (
						this.state.readOnly
							? Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_MARK_NO_VALUE')
							: Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_TO_MARK_THE_TASK')
					),
					config: {
						parentWidget: this.props.parentWidget,
						deepMergeStyles: this.props.deepMergeStyles,
						showIcon: true,
						emptyValueIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#bdc1c6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1273 9.61035L14.4262 9.61087C14.3484 9.61087 14.2733 9.56591 14.2442 9.49449C14.1225 9.1903 14.1273 8.8475 14.2606 8.54543C14.4844 7.89421 14.5098 7.19061 14.3341 6.52458C14.1505 6.06644 14.1019 5.22954 13.2549 5.19092C12.9899 5.23007 12.7587 5.3893 12.6254 5.62154C12.6016 5.6628 12.5915 5.71147 12.5915 5.75856C12.5915 5.75856 12.6305 6.57119 12.5915 7.13612C12.5526 7.70105 11.4716 9.14005 10.7844 10.0537C10.741 10.1119 10.6802 10.1499 10.6082 10.1611C10.3506 10.1996 9.85917 10.265 9.68203 10.2884C9.64057 10.2938 9.61633 10.3459 9.61633 10.3704C9.61633 11.5124 9.61633 13.2208 9.61633 15.4956C9.61633 15.5144 9.63907 15.5555 9.67949 15.5622C9.81826 15.5851 10.1654 15.6486 10.5157 15.7613C10.9558 15.9025 11.3224 16.2368 12.0562 16.4844C12.0948 16.4976 12.1376 16.5045 12.1784 16.5045H15.6239C16.0688 16.4252 16.3999 16.0448 16.4227 15.5883C16.429 15.3338 16.3783 15.082 16.274 14.8508C16.2592 14.8175 16.2788 14.7826 16.3148 14.7757C16.7565 14.6953 17.3088 13.8568 16.6285 13.1812C16.6105 13.1638 16.6137 13.14 16.638 13.1336C17.0131 13.0379 17.3003 12.7384 17.3881 12.3649C17.422 12.2221 17.4098 12.0745 17.3675 11.9343C17.3178 11.7672 17.2384 11.6106 17.1332 11.4709C17.1067 11.436 17.1215 11.3905 17.1638 11.3767C17.5373 11.2503 17.7944 10.8932 17.7918 10.4869C17.8346 10.0886 17.5146 9.61087 17.1273 9.61035ZM8.55882 9.82618H6.60621C6.50463 9.82618 6.4274 9.91612 6.44485 10.014L7.57907 16.386C7.59653 16.4839 7.68276 16.5553 7.7838 16.5553H8.50591C8.61754 16.5553 8.708 16.467 8.708 16.358L8.72387 9.98806C8.72387 9.89866 8.65034 9.82618 8.55882 9.82618Z" fill="white"/></svg>',
						menuTitle: Loc.getMessage('TASKSMOBILE_LAYOUT_TASK_FIELDS_MARK_MSGVER_1'),
						menuItems: [
							{
								id: Task.mark.positive,
								title: Mark.type.positive,
								icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#9DCF00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1273 9.61035L14.4262 9.61087C14.3484 9.61087 14.2733 9.56591 14.2442 9.49449C14.1225 9.1903 14.1273 8.8475 14.2606 8.54543C14.4844 7.89421 14.5098 7.19061 14.3341 6.52458C14.1505 6.06644 14.1019 5.22954 13.2549 5.19092C12.9899 5.23007 12.7587 5.3893 12.6254 5.62154C12.6016 5.6628 12.5915 5.71147 12.5915 5.75856C12.5915 5.75856 12.6305 6.57119 12.5915 7.13612C12.5526 7.70105 11.4716 9.14005 10.7844 10.0537C10.741 10.1119 10.6802 10.1499 10.6082 10.1611C10.3506 10.1996 9.85917 10.265 9.68203 10.2884C9.64057 10.2938 9.61633 10.3459 9.61633 10.3704C9.61633 11.5124 9.61633 13.2208 9.61633 15.4956C9.61633 15.5144 9.63907 15.5555 9.67949 15.5622C9.81826 15.5851 10.1654 15.6486 10.5157 15.7613C10.9558 15.9025 11.3224 16.2368 12.0562 16.4844C12.0948 16.4976 12.1376 16.5045 12.1784 16.5045H15.6239C16.0688 16.4252 16.3999 16.0448 16.4227 15.5883C16.429 15.3338 16.3783 15.082 16.274 14.8508C16.2592 14.8175 16.2788 14.7826 16.3148 14.7757C16.7565 14.6953 17.3088 13.8568 16.6285 13.1812C16.6105 13.1638 16.6137 13.14 16.638 13.1336C17.0131 13.0379 17.3003 12.7384 17.3881 12.3649C17.422 12.2221 17.4098 12.0745 17.3675 11.9343C17.3178 11.7672 17.2384 11.6106 17.1332 11.4709C17.1067 11.436 17.1215 11.3905 17.1638 11.3767C17.5373 11.2503 17.7944 10.8932 17.7918 10.4869C17.8346 10.0886 17.5146 9.61087 17.1273 9.61035ZM8.55882 9.82618H6.60621C6.50463 9.82618 6.4274 9.91612 6.44485 10.014L7.57907 16.386C7.59653 16.4839 7.68276 16.5553 7.7838 16.5553H8.50591C8.61754 16.5553 8.708 16.467 8.708 16.358L8.72387 9.98806C8.72387 9.89866 8.65034 9.82618 8.55882 9.82618Z" fill="white"/></svg>',
							},
							{
								id: Task.mark.negative,
								title: Mark.type.negative,
								icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#FF5752"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.1273 14.3897L14.4262 14.3891C14.3484 14.3891 14.2733 14.4341 14.2442 14.5055C14.1225 14.8097 14.1273 15.1525 14.2606 15.4546C14.4844 16.1058 14.5098 16.8094 14.3341 17.4754C14.1505 17.9336 14.1019 18.7705 13.2549 18.8091C12.9899 18.7699 12.7587 18.6107 12.6254 18.3785C12.6016 18.3372 12.5915 18.2885 12.5915 18.2414C12.5915 18.2414 12.6305 17.4288 12.5915 16.8639C12.5526 16.299 11.4716 14.86 10.7844 13.9463C10.741 13.8881 10.6802 13.8501 10.6082 13.8389C10.3506 13.8004 9.85917 13.735 9.68203 13.7116C9.64057 13.7062 9.61633 13.6541 9.61633 13.6296C9.61633 12.4876 9.61633 10.7792 9.61633 8.50443C9.61633 8.48556 9.63907 8.44448 9.67949 8.43781C9.81826 8.4149 10.1654 8.35141 10.5157 8.23875C10.9558 8.0975 11.3224 7.76316 12.0562 7.51558C12.0948 7.50235 12.1376 7.49547 12.1784 7.49547H15.6239C16.0688 7.57483 16.3999 7.95519 16.4227 8.41174C16.429 8.6662 16.3783 8.91801 16.274 9.14919C16.2592 9.18252 16.2788 9.21743 16.3148 9.22431C16.7565 9.30472 17.3088 10.1432 16.6285 10.8188C16.6105 10.8362 16.6137 10.86 16.638 10.8664C17.0131 10.9621 17.3003 11.2616 17.3881 11.6351C17.422 11.7779 17.4098 11.9255 17.3675 12.0657C17.3178 12.2328 17.2384 12.3894 17.1332 12.5291C17.1067 12.564 17.1215 12.6095 17.1638 12.6233C17.5373 12.7497 17.7944 13.1068 17.7918 13.5131C17.8346 13.9114 17.5146 14.3891 17.1273 14.3897ZM8.55882 14.1738H6.60621C6.50463 14.1738 6.4274 14.0839 6.44485 13.986L7.57907 7.61398C7.59653 7.51611 7.68276 7.44469 7.7838 7.44469H8.50591C8.61754 7.44469 8.708 7.53304 8.708 7.64201L8.72387 14.0119C8.72387 14.1013 8.65034 14.1738 8.55882 14.1738Z" fill="white"/></svg>',
							},
							{
								id: 'noValue',
								title: Mark.type.noValue,
								icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><g opacity="0.5"><path d="M20.7292 6.97901L23.0208 9.27066L9.2709 23.0206L6.97925 20.7289L20.7292 6.97901Z" fill="#525C69"/><path d="M23.0208 20.7289L20.7292 23.0206L6.97925 9.27066L9.2709 6.979L23.0208 20.7289Z" fill="#525C69"/></g></svg>',
								sectionCode: 'noValue',
							},
						],
						isCustomIconColor: true,
					},
					testId: 'mark',
					onChange: (id) => {
						const mark = (id === 'noValue' ? Task.mark.none : id);
						if (mark !== this.state.mark)
						{
							this.setState({mark});
							this.props.onChange(mark);
						}
					},
				}),
			);
		}
	}

	module.exports = {Mark};
});