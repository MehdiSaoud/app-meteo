const Formulaire = ({locationForm, setLocationForm}) => {

    return (
        <div>

            <label htmlFor="location">Location : </label>
            <input type="text" id="location" name="location" value={locationForm} onChange={(e) => setLocationForm(e.target.value)}></input>
        </div>
    )
}

export default Formulaire