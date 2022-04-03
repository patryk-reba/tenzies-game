import React, { useState } from "react";
import Timer from "./Timer";


function StopWatch(props) {

	const [isActive, setIsActive] = useState(true);
	const [isPaused, setIsPaused] = useState(false);
	const [time, setTime] = useState(0);

	React.useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	React.useEffect(() => {
		props.isTenzies && setIsPaused(!isPaused)
	}, [time]);


	const handleStart = () => {
		if (props.isTenzies) {
			setTime(0);
			setIsPaused(!isPaused)
			props.handleClick()
		} else {
			props.handleClick()
		}
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	return (
		<div className="stop-watch">
			<Timer time={time} />

			<button
				className="btn roll-dice-btn"
				onClick={handleStart}
			>
				{props.isTenzies ? "New Game" : "Roll"}
			</button>
			{/* <button className="btn roll-dice-btn" onClick={handleReset}>
				Restart
			</button> */}
		</div>
	);
}

export default StopWatch;
