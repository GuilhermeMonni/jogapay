function Header() {

    return(
    <div className="bg-primary w-full h-36 p-2 flex">
        <img src="https://res.cloudinary.com/dzbdewkbp/image/upload/v1767051401/banco-central_1_lkoob2.png" alt="Icone banco" className="mt-4 w-20 h-20 justify-center"/>   
        <span className="p-1 w-2/4 mx-3">
            <h1 className="font-cherry text-3xl mt-5">JogaPay</h1>
            <p className="font-varela font-medium text-base mt-2 text-subtitle hover:text-black">Pagamentos, rendimentos e negociações</p>
        </span>
        {/* colocar um contador de qtd de jogadores 
            PAREI NA INSTALAÇÃO DO MAGIC.CSS
        */}
    </div> 
    )
}

export default Header