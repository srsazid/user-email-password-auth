
const Register = () => {
    return (
        <div className="mx-auto">
            <h2 className="text-3xl">Please Register</h2>
            <form>
                <input className="mb-4" type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;