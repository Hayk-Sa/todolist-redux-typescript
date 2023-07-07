import { ChangeEvent, useState } from "react";

type EditableSpanType = {
	title: string;
	onChange: (newValue: string) => void;
};

function EditableSpan(props: EditableSpanType) {
	let [editMode, setEditMode] = useState(false);
	let [title, setTitle] = useState("");

	const activeEditMode = () => {
		setEditMode(true);
		setTitle(props.title);
	};

	const activeViewMode = () => {
		setEditMode(false);
		props.onChange(title);
	};

	const onChnageTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};

	return editMode ? (
		<input
			value={title}
			onChange={onChnageTitleHandler}
			onBlur={activeViewMode}
			autoFocus
		/>
	) : (
		<span onDoubleClick={activeEditMode}>{props.title}</span>
	);
}

export default EditableSpan;
