import { Result } from "./Result";

export const TeamRow = ({ position, name, homeResult, awayResult }) => (<div style={{ display: 'flex', paddingBottom: '5px' }}>
    <div className="position" style={{ width: '50px' }}>{position}.</div>
    <div className="team-name" style={{ width: '500px' }}>{name}</div>
    {name != 'Chelsea' &&
        <>
            <Result result={homeResult}></Result>
            <Result result={awayResult}></Result>
        </>
    }
</div>)