function Greeting() {
    const firstName = 'Miguel';
    const lastName = 'Silva';

    return <h1 className="greeting">Olá {`${firstName} ${lastName}`}</h1>;
}

export default Greeting;