import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "https://app-salumeria-back.herokuapp.com/pedidos/";

const EditarPedido = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [calle, setCalle] = useState('')
    const [piso, setPiso] = useState('')
    const [choriPollo, setChoriPollo] = useState('')
    const [choriCerdo, setChoriCerdo] = useState('')
    const [chuletaAhu, setChuletaAhu] = useState('')
    const [huesoAhu, setHuesoAhu] = useState('')
    const [bondiolaTender, setBondiolaTender] = useState('')
    const [pastrami, SetPastrami] = useState('')
    const navigate = useNavigate()
    const { id }   = useParams()
//console.log(id.id);


    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre_cliente: nombre,
            apellido_cliente: apellido,
            numero_whatsapp: whatsapp,
            calle_altura: calle,
            piso_puerta: piso,
            cant_chorizo_pollo: choriPollo,
            cant_chorizo_cerdo: choriCerdo,
            cant_chuleta_ahumada: chuletaAhu,
            cant_hueso_ahumado: huesoAhu,
            cant_bondiola_tender: bondiolaTender,
            cant_pastrami: pastrami
        })

        navigate('/listarPedido')
    }

    useEffect(() => {
        getPedidoById();
    }, []);

    const getPedidoById = async () => {
        console.log(URI + id.id);
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre_cliente)
        setApellido(res.data.apellido_cliente)
        setWhatsapp(res.data.numero_whatsapp)
        setCalle(res.data.calle_altura)
        setPiso(res.data.piso_puerta)
        setChoriPollo(res.data.cant_chorizo_pollo)
        setChoriCerdo(res.data.cant_chorizo_cerdo)
        setChuletaAhu(res.data.cant_chuleta_ahumada)
        setHuesoAhu(res.data.cant_hueso_ahumado)
        setBondiolaTender(res.data.cant_bondiola_tender)
        SetPastrami(res.data.cant_pastrami)
    }



    return (
        <div className='container mb-3'>
            <div className='text-center mt-5'>
                <h3>Editar Pedido</h3>
            </div>

            <div className='row justify-content-center '>
                <div className='col-md-6'>
                    <form onSubmit={update}>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Apellido</label>
                            <input
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>N° Whatsapp</label>
                            <input
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                        </div>
                        <div className='row'>
                            <div className='col-8 mb-3'>
                                <label className='form-label'>Calle / Altura</label>
                                <input
                                    value={calle}
                                    onChange={(e) => setCalle(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-4 mb-3'>
                                <label className='form-label'>Piso / Puerta</label>
                                <input
                                    value={piso}
                                    onChange={(e) => setPiso(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-6  mb-3'>
                                <label className='form-label'>Chorizos de Pollo</label>
                                <input
                                    value={choriPollo}
                                    onChange={(e) => setChoriPollo(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <label className='form-label'>Chorizos de Cerdo</label>
                                <input
                                    value={choriCerdo}
                                    onChange={(e) => setChoriCerdo(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <label className='form-label'>Chuletas Ahumadas</label>
                                <input
                                    value={chuletaAhu}
                                    onChange={(e) => setChuletaAhu(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <label className='form-label'>Hueso Ahumado</label>
                                <input
                                    value={huesoAhu}
                                    onChange={(e) => setHuesoAhu(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <label className='form-label'>Bondiola Tender</label>
                                <input
                                    value={bondiolaTender}
                                    onChange={(e) => setBondiolaTender(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                            <div className='col-6 mb-3'>
                                <label className='form-label'>Pastrami</label>
                                <input
                                    value={pastrami}
                                    onChange={(e) => SetPastrami(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary'>
                            Editar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarPedido

