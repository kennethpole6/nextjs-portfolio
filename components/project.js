import styles from "../styles/project.module.css";
import Cards from "./Cards";
import cardsData from "./cardsData";
const project = () => {
  return (
    <>
      <div className={styles.project_container} id="projects">
        <h1>Featured Project.</h1>
        <div className={styles.cards_container}>
          {cardsData.map((item) => {
            return (
              <Cards
                key={item.id}
                title={item.title}
                desc={item.description}
                badge={item.badge}
                link={item.link}
                github={item.github}
              ></Cards>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default project;
