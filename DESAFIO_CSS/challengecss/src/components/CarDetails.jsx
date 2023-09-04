import styles from "./CarDetails.module.css";

const carDetails = ({fabricante, cor, quilometragem}) => {
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.list_item}>Fabricante: {fabricante}</li>
            <li className={styles.list_item}>Cor: {cor}</li>
            <li className={styles.list_item}>Quilometragem: {quilometragem} Km</li>
        </ul>
    </div>
  )
}

export default carDetails;