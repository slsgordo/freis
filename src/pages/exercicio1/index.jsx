import './index.scss';
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exercício1() {

    const [Valor, setValores] = useState(0)
    const [Desconto, setDescontos] = useState(0)
    const [Click, setClick] = useState(0)

    function clicking() {
        let equa = 0
        let res = 0
        if (Desconto == 0) {
            equa = Valor
            res = equa
        }
        else {
            equa = Valor * Desconto / 100
            res = Valor - equa
        }
        setClick(Number(res))
        return setClick
    }

    return (
        <div className='pagina-ex1'>
            <header>
                <div>
                    <img src="/assets/images/Frei-Logo.png" alt="" />
                    <h1>React FreiS</h1>
                </div>
                <div>
                    <Link to='/Home'>Inicio</Link>
                    <Link to='/Sobre'>Sobre</Link>
                </div>
            </header>
            <main>
                <div className='title'>
                    <Link to='/Home'><img src="/assets/images/seta.png" /></Link>
                    <h2>Exercício 01 - Cupom de desconto</h2>
                </div>
                <div className='sep'>
                    <div className='line'></div>
                    <div className='enunciado'>
                        <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                    </div>
                    <div className='square'>
                        <div className='exercise'>
                            <h2>Informe o valor do pedido</h2>
                            <input type="text" value={Valor} onChange={e => setValores(e.target.value)} />
                            <h2>informe o valor do cupom</h2>
                            <input type="text" value={Desconto} onChange={e => setDescontos(e.target.value)} />
                        </div>
                        <button onClick={clicking} >Executar</button>
                    </div>
                    <p>Resultado: O total é R${Click.toFixed(2)}</p>
                </div>
            </main>
        </div>
    )
}