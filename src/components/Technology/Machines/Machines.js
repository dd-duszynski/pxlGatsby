import React from "react";
import styles from "./Machines.module.scss";
// import imggg from "../../../assets/images/fota 2.jpg"
// import solvent from "../assets/images/Solvent.PNG";
function Machines(props) {
	return (
		<div className={styles.machine}>
			{/* <img className={styles.machine_image} src={imggg} alt={props.name} /> */}
			<img className={styles.machine_image} src={props.img} alt={props.name} />

			<h3 className={styles.machine_title}>
				{props.name}
				{props.eco && <span className={styles.machine_leaf} />}
			</h3>

			<p className={styles.machine_paragraph}>
				{props.description}
				<br />
				<br />
				{props.description2}
			</p>

			<div className={styles.machine_line} />
		</div>
	);
}

export default Machines;
