function Header() {

    return(
    <div className="bg-blue-200 w-full h-36 p-4 flex">
        <img src="https://res.cloudinary.com/dzbdewkbp/image/upload/v1767051401/banco-central_1_lkoob2.png" alt="Icone banco" className="my-auto w-20 h-20"/>   
        <h1 className="">JogaPay</h1> 
        <p>Pagamentos, rendimentos e negociações</p>
        {/* colocar um contador de qtd de jogadores */}
    </div> 
    )
}

export default Header