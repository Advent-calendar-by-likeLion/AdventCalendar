const ColorPickerBody = ({changeBody, color, type}) => {
    return (
        <div>
            <input id={color + type} type="radio" name="color" value={color} onChange={changeBody}/>
            <label for={color + type}>
                <span style={{background: color}}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon"/>
                </span>
            </label>
        </div>
    )
}

export default ColorPickerBody;
