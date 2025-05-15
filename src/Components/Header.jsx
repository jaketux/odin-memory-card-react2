import "/src/App.css";
import pokeBall from "/images/pokeball.png";
export default function Header() {
  return (
    <div>
      <div className="header-div">
        <div className="header-icon">
          <img src={pokeBall} alt="poke-ball image" className="header-icon" />
        </div>
        <div className="header-text">PokéMemory</div>
      </div>
    </div>
  );
}
