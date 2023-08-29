const Challenge = () => {

    const num1 = 10;
    const num2 = 5;

    return (
        <div>
            <p>O primeiro número é {num1}, o segundo número é {num2}</p>
            <button onClick={() => console.log(num1 + num2)}>Somar</button>
        </div>
    )
}

export default Challenge;