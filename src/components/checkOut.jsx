import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { db } from '../service/firebase'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CheckOut = () => {

    const [user, setUser] = useState({})
    const [validateEmail, setvalidateEmail] = useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState("")

    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        let order = {
            user,
            item: cart,
            total: cartTotal(),
            fecha: serverTimestamp(),
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, order)
        .then ((res)=> {
            setOrderId(res.id)
            clear()
        })
        .catch ((error)=>console.log(error))
    }

  return (
    <div>
        {orderId !== "" 
        ? <div className='div-compfin'>
            <h3>Su compra ha sido finalizada con exito</h3>
            <h4>El id de su compra es: <span>{orderId}</span></h4>
            <Link to='/' className="btn btn-light">Seguir comprando</Link> 
            </div>
        :     <div className='div-checkout'>
        <h2>Terminar Compra</h2>
        <h4>Por favor compltar con sus datos</h4>
        <form className='div-form' onSubmit={finalizarCompra}>
            <div>
                <label className='form-label'>Nombre Completo</label>
                <input onChange={datosComprador} className='form-control' type="text" placeholder='Juan Perez' name='nombre' required/>
            </div>
            <div>
                <label className='form-label'>Numero Telefonico</label>
                <input onChange={datosComprador} className='form-control' type="tel" placeholder='+541100000000' name='telefono' required/>
            </div>
            <div>
                <label className='form-label'>Direccion de email</label>
                <input onChange={datosComprador} className='form-control' type="email" placeholder='juanperez@mail.com' name='mail' required/>
            </div>
            <div>
                <label className='form-label'>Repita su email</label>
                <input onChange={((e)=>setvalidateEmail(e.target.value))} className='form-control' type="email" name='mail' required/>
            </div>
            <button className='btn btn-success' type='submit' disabled={validateEmail !== user.mail}>Generar Orden</button>
        </form>
    </div>}
    </div>
  )
}

export default CheckOut