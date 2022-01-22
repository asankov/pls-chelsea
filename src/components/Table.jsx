import { TeamRow } from "./TeamRow"

export const Table = ({teams}) => {
    return (<div>
        {teams.map((team, i)=>(
            <TeamRow position={i+1} name={team.fullName} points={team.points} homeResult={team.results?.home} awayResult={team.results?.away} key={i}></TeamRow>
        ))}
    </div>)
}