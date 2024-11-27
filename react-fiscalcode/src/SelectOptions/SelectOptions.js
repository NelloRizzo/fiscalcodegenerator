export function SelectOptions({ source, text, value, hint }) {
    console.log("select options", source)
    if (source.length > 0) {
        return (
            source.filter(v => v[value]).map(v =>
                <option value={v[value]}>{v[text]}</option>
            )
        )
    } else {
        return <option>{hint ?? 'Seleziona una voce'}</option>
    }
}