import { useState, useEffect } from "react"
import ReactModal from "react-modal"

function Players() {
    let [addPlayer, setAddPlayer] = useState(false)

    return(
        <div className="grid grid-cols-3 gap-10 m-0 p-8 justify-items-center bg-main min-h-screen">
            <ReactModal
            // modal popup
                isOpen={addPlayer}
                onRequestClose={() => setAddPlayer(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        top: 50,
                        border: "none",
                        background: "transparent",
                    },
                }}
            >
            <div className="bg-gray-200 border-detail font-inter max-w-4/12 mx-auto rounded-xl shadow-xl border p-6 text-detail flex flex-col">
                <h3 className="text-xl font-bold mb-3 font-varela text-secundary text-center">
                    Adicionar jogador
                </h3>
                <p className="font-roboto my-2 mx-auto">Escolha uma cor para o card do jogador</p>
                <div className="grid grid-cols-4 gap-x-8 gap-y-3 mb-3 mx-auto">
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                    <button 
                        className="w-12 h-12 bg-red-500 rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800"
                    />
                </div>
                <p className="text-sm leading-relaxed mb-5 text-justify indent-2 text-alternate">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam, voluptate sunt id iste dignissimos veritatis molestiae ea quod illo esse laborum repellendus impedit accusantium cumque voluptatibus enim ex iure?Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                <button
                    onClick={() => setAddPlayer(false)}
                    className="align-center px-5 py-2 rounded-md font-semibold text-white hover:opacity-90 transition"
                    style={{
                        backgroundColor: "var(--color-secundary)",
                        fontFamily: "var(--font-rubik)",
                    }}
                    >
                    Entendi
                </button>
            </div>
            </ReactModal>

            <div className="bg-card mx-0 min-w-60 min-h-56 max-h-56 flex flex-col items-center justify-center max-w-xs  rounded-xl shadow-md"> 
            {/* card player */}
                <button onClick={() => setAddPlayer(true)} className="cursor-pointer w-1/8 hover:scale-105"><img src="https://res.cloudinary.com/dzbdewkbp/image/upload/v1767051353/mais_1_cyyiqq.png" alt="Imagem adicionar" /></button>

            </div>
        </div>
    )
}

export default Players