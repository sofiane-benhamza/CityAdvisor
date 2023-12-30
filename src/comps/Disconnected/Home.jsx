import "bootstrap/dist/css/bootstrap.css";
import friend from "../../img/friend.png";
import "../style.css";

export default function Home() {
  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      <div className="row justify-content-center" style={{ minHeight: "70vh" }}>
        <div
          className="col-sm d-flex flex-column align-items-left justify-content-center m-2 h-100 rounded simple"
          style={{
            minHeight: "70vh",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <h4 className="fw-bold">Qu'est-ce que City Advisor ?</h4>
          <p className="fw-bold">
            City Advisor est une application web spécialement conçue pour les
            personnes qui ont besoin de mieux connaître une ville. Elle fournit
            des différentes informations sur toutes les villes de la planète.
          </p>
          <h4 className="fw-bold">Comment utiliser City Advisor ?</h4>
          <p className="fw-bold">
            Pour utiliser City Advisor, vous devez d'abord créer un compte. Une
            fois connecté, vous pouvez rechercher une ville spécifique et
            accéder à des informations détaillées.
          </p>
        </div>

        <div
          className="col-sm d-flex justify-content-center align-items-center m-2"
          style={{
            backgroundImage: `url(${friend})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "5",
          }}
        ></div>
      </div>
    </div>
  );
}
