import { useState } from "react"
import ReactModal from "react-modal"
import { Input, InputNumber, Space } from "antd"

function Players() {
    //name and income player    
    const [addPlayer, setAddPlayer] = useState(false)
    const [value, setValue] = useState()
    //color card player
    const [card, setCard] = useState()
    const [isFocused, setIsFocused] = useState(false) //focus input
    
    const formatter = (value) => {//format value 
        if(!value) return ''

        const [start, end] = `${value}`.split('.') || [] //string
        const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') //decimal
        
        return `${end ? `${v}.${end}` : `${v}`}`
    }

    //save in local storage
    const playerInfo = (card, name, value) => {
        console.log(card, value, name)
        
        setAddPlayer(false)
        setValue()
        setCard('')
    }

    const keyDown = () => { //click enter
        const form = document.querySelector('#form')//form player
            if(form){

                form.addEventListener('keydown', (e) => {
                    if(e.key === 'Enter'){
                        e.preventDefault()
                        const name = document.querySelector('#name')

                        playerInfo(name, value, card)
                    }
                })
            }
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
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('blue')
                    }}
                        className="w-12 h-12 bg-card_blue rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('pink')
                    }} 
                        className="w-12 h-12 bg-card_pink rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('yellow')
                    }} 
                        className="w-12 h-12 bg-card_yellow rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('lilac')
                    }} 
                        className="w-12 h-12 bg-card_lilac rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('green')
                    }} 
                        className="w-12 h-12 bg-card_green rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('peach')
                    }} 
                        className="w-12 h-12 bg-card_peach rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('magenta')
                    }} 
                        className="w-12 h-12 bg-card_magenta rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                    <button onClick={(e) => {
                        e.preventDefault
                        setCard('cyan')
                    }} 
                        className="w-12 h-12 bg-card_cyan rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-gray-800
                        focus:border-gray-800 focus:scale-110"
                    />
                </div>
                <form onKeyDown={keyDown} id="form" className="space-y-6 mb-5 m-5">
                    {/* nickname */}
                    <div className="relative flex w-full">
                        <Input
                            type="text"
                            id="name"
                            className="!mx-auto !min-w-52 !max-w-52 !h-12 !px-4 !py-3 !border-2 !border-gray-300 !rounded-lg focus:!border-primary"
                            placeholder="Nome do Jogador"
                        />
                    </div>

                    {/* initial income */}
                    <div className="relative flex">
                        <Space>
                            <p className="font-roboto text-sm">R$</p>
                            <InputNumber
                            style={{
                                minWidth: '13rem',
                                height: '3rem',
                                margin: 'auto',
                                marginLeft: '-.3rem',
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                                paddingTop: '0.75rem',
                                paddingBottom: '0.75rem',
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                borderColor: isFocused ? 'var(--color-primary)' : '#d1d5db',
                                borderRadius: '0.5rem',
                                outline: 'none',
                                transition: 'border-color 0.3s ease'
                            }}
                            onFocus={() => setIsFocused(true)}
                            controls={false}
                            value={value}
                            onBlur={(e) => {
                                const finalValue = e.target.value
                                setValue(finalValue)
                                setIsFocused(false)

                                console.log('Valor final: ', finalValue)
                            }}
                            formatter={formatter}
                            parser={value => value?.replace(/\$\s?|(,*)/g, '')}
                            id="income"
                            placeholder="Renda Inicial"
                        />
                        </Space>
                    </div>

                    <div className="mx-auto flex">
                        <button
                        type="submit"
                        onClick={ (e) => {
                            e.preventDefault()
                            const name = document.querySelector('#name').value

                            playerInfo(name, value, card)
                        }}
                        className="w-2/4 mx-auto bg-primary px-5 py-2 rounded-md font-semibold text-white hover:opacity-90 transition">
                            Concluido
                        </button>
                    </div>
                </form>
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