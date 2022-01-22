export const Result = ({ result }) => {
    if (!result) return <div className="result not-played-yet" style={{ width: '100px' }}></div>

    const [chelsea, other] = result.split('-')
    let resultClassName = 'draw'
    if (chelsea > other) {
        resultClassName = 'win'
    } else if (chelsea < other) {
        resultClassName = 'defeat'
    }

    return <div className={`result ${resultClassName}`} style={{ width: '100px' }}>
        {result}
    </div>
}