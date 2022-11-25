const ColorPicker = ({changeRoof, color}) => {
    return (
        <div>
            <input id={color} type="radio" name="color" onChange={changeRoof}/>
            <label for={color}>
                <span style={{background: color}}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon"/>
                </span>
            </label>
        </div>
    )
}

export default ColorPicker;
