function Fm() {
    return (
        <div>
            <div className="Form">
                <form >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" min="1" max="200" step="5" />
                    </div>
                    <div>
                        <label htmlFor="date">Birthdate</label>
                        <input type="date" name="date" id="date" min="2019-06-10" />
                    </div>
                    <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}