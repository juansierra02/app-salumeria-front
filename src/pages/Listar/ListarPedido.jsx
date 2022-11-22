import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './ListarPedido.css'

const URI = "https://app-salumeria-back.herokuapp.com/pedidos/";

const ListarPedido = () => {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        getPedidos()
    }, [])

    const getPedidos = async () => {
        const res = await axios.get(URI)
        setPedidos(res.data)
    }

    //procedimiento para eliminar un Pedido
    const deletePedido = (id) => {
        Swal.fire({
            title: 'Está seguro de ELIMINAR?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `No Eliminar`,
        }).then((result) => {
            if (result.isConfirmed) {
                elimiar(id);
                Swal.fire('Eliminado', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Sus datos no se eliminaron')
            }
        })
    }

    const elimiar = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPedidos()
    }

    return (
        <div className='container'>
            <div>
                <Link
                    to='/logout'
                    className='btn btn-primary mt-5'>
                    Logout
                </Link>
            </div>

            <h2 className='m-4'>Pedidos</h2>

            <div className='row'>
                {pedidos.map((pedido) => (
                    <div
                        className='col-12 col-md-3 '
                        key={pedido.id}>
                        <div className='listcard mb-3'>
                            <p>
                                Fecha: {pedido.createdAt}
                                <br />
                                Cliente: {pedido.nombre_cliente} {pedido.apellido_cliente}
                                <br />
                                Nº Tlf: {pedido.numero_whatsapp}
                                <br />
                                Calle/Altura: {pedido.calle_altura} {pedido.piso_puerta}
                                <br />
                                Chori. P: {pedido.cant_chorizo_pollo}
                                <br />
                                Chori. C:{pedido.cant_chorizo_cerdo}
                                <br />
                                Chule. Ah: {pedido.cant_chuleta_ahumada}
                                <br />
                                Hueso Ah: {pedido.cant_hueso_ahumado}
                                <br />
                                Bondi. Tender {pedido.cant_bondiola_tender}
                                <br />
                                Pastrami: {pedido.cant_pastrami}
                            </p>
                            <div>
                                <Link
                                    to={`/${pedido.id}`}
                                    className='btn btn-info me-2'>
                                    <i className='fa-solid fa-pen-to-square'></i>
                                </Link>
                                <button
                                    onClick={() => deletePedido(pedido.id)}
                                    className='btn btn-danger'>
                                    <i className='fa-solid fa-trash'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListarPedido