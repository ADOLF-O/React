import { Card } from "./twiterFollowCard.jsx";
import "./app.css"

let valores = [{
    userName: "RockstarGames",
    name: "RockStart Games",
    isFollowing: true},
    {
    userName: "RockstarGames" ,
    name: "RockStart Games",
    isFollowing: false

}]

export function App() {
    
    return (
        <section className="app"> 

            {
                valores.map(({userName,name,isFollowing}) => (
                    <Card 
                        key={userName}
                        userName={userName}
                        isFollowing={isFollowing}
                    >
                    {name}
                    </Card>
                ))
            }



        </section>
    )
   
}