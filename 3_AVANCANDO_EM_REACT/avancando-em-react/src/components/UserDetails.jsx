//UserDetails.jsx
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <>
        <p>Nome: {nome} | Idade: {idade} | Profissão: {profissao}</p>
        {idade >= 18 ? (<p>Já pode tirar a carteira de habilitação!</p>) : (<p>Não pode tirar a carteira de habilitação!</p>)}
    </>
  )
}

export default UserDetails;