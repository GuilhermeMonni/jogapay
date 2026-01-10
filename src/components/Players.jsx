import { useState } from "react"
import ReactModal from "react-modal"
import { InputNumber, Space } from "antd"

function Players() {
    const [addPlayer, setAddPlayer] = useState(false)
    const [value, setValue] = useState()
    
    const formatter = (value) => {
        //format value 
        const [start, end] = `${value}`.split('.') || [] //string
        const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') //decimal
        
        return `R$ ${end ? `${v}.${end}` : `${v}`}`
    }

    return(
        <>
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
                        border: "none",
                        background: "transparent",
                        inset: "unset"
                    },
                }}
                ariaHideApp={false}
            >
            <div className="bg-gray-200 border-detail font-inter min-w-4/12 mx-auto rounded-xl shadow-xl border p-8 text-detail flex flex-col">
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
                <form className="space-y-6 mb-5 m-5">
                    {/* nickname */}
                    <div className="relative">
                        <input
                            type="text"
                            id="namePlayer"
                            className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder=" "
                        />
                        <label
                            htmlFor="namePlayer"
                            className="absolute left-4 top-3 text-gray transition-all duration-300 pointer-events-none
                                    peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary peer-focus:px-2
                                    peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:px-2"
                        >
                            Nome do Jogador
                        </label>
                    </div>

                    {/* initial income */}
                    <div className="relative">
                        <Space>
                            <InputNumber
                            controls={false}
                            value={value}
                            onBlur={(e) => {
                                const finalValue = e.target.value
                                setValue(finalValue)

                                console.log('Valor final: ', finalValue)
                            }}
                            formatter={formatter}
                            parser={value => value?.replace(/\$\s?|(,*)/g, '')}
                            id="income"
                            className="!peer !w-full !px-4 !py-3 !bg-transparent !border-2 !border-gray-300 !rounded-lg focus:!border-primary focus:!outline-none !transition-colors"
                            placeholder=" "
                        />
                        </Space>
                        {/* <label
                            htmlFor="income"
                            className="absolute left-4 top-3 text-gray-500 transition-all duration-300 pointer-events-none
                                    peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-primary peer-focus:px-2
                                    peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:px-2"
                        >
                            Renda Inicial (R$)
                        </label>  */}
                    </div>
                </form>
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

        <div className="grid grid-cols-3 gap-10 m-0 p-8 justify-items-center bg-main min-h-screen">
            <div className="bg-card mx-0 min-w-60 min-h-56 max-h-56 flex flex-col items-center justify-center max-w-xs  rounded-xl shadow-md"> 
            {/* card player */}
                <button onClick={() => setAddPlayer(true)} className="cursor-pointer w-1/8 hover:scale-105"><img src="https://res.cloudinary.com/dzbdewkbp/image/upload/v1767051353/mais_1_cyyiqq.png" alt="Imagem adicionar" /></button>

            </div>
        </div>
        </>
    )
}

export default Players