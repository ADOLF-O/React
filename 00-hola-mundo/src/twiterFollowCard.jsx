import {useState} from "react"
export function Card({ userName, children, isFollowing}) {

  const [count, setCount] = useState(isFollowing);
  const text = count ? "Siguiendo" : "Seguir";
  const clasBoton = count ? "TwCard-boton isFollowing" : " TwCard-boton"

  

  
    return (
      <section className="Twitter-card">
        <header className="TwCard-header">
          <img className="TwCard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="imagen del avatar" />
  
          <div className="TwCard-info">
            <strong>{children}</strong>
            <span className="TwCard-infoUser">@{userName}</span>
          </div>
        </header>
  
        <aside >
          <button onClick={()=>{setCount(!count)}} className={clasBoton}>
            {text}
          </button>
        </aside>
      </section>
    )
  }