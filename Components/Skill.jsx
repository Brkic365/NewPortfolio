import React from "react";
import styles from "../styles/Skill.module.scss";

function Skill({ skill }) {
  return (
    <div className={styles.skill}>
      <img src={`/icons/skills/${skill.img}`} alt="Icon of a skill" />
      <h3>{skill.name}</h3>
      <p>{skill.desc}</p>
    </div>
  );
}

export default Skill;
