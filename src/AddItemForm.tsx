import { ChangeEvent, useState, KeyboardEvent } from "react";

type AddItemFormPropsType = {
	addItem: (title: string) => void;
};

function AddItemForm(props: AddItemFormPropsType) {
	const [title, setTitle] = useState("");
	const [error, setError] = useState<string | null>(null);
	const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};
	const addTask = () => {
		if (title.trim() !== "") {
			props.addItem(title.trim());
			setTitle("");
		} else {
			setError("Title is required");
		}
	};
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null);
		if (e.key === "Enter") {
			addTask();
		}
	};

	return (
		<div>
			<input
				value={title}
				onChange={onNewTitleChangeHandler}
				onKeyDown={onKeyDownHandler}
				className={error ? "error" : ""}
			/>
			<button onClick={addTask}>+</button>
			{error && <div className="error-message">{error}</div>}
		</div>
	);
}

export default AddItemForm;
