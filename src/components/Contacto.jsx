import { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
const Contacto = () =>{
    const [loader,setLoader] = useState(false);
    const [form, setForm] = useState({
    nombre: "",
    email: "",
    motivo: "",
    mensaje: ""
    });
        const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacto"), {
      ...form,
      fecha: new Date()
    });

    Swal.fire({
        icon:"success",
        title:"Se ha enviado el mensaje, a la brevedad le responderemos."
    })
    setForm({
      nombre: "",
      email: "",
      motivo: "",
      mensaje: ""
    });

  } catch (error) {
    console.error(error);
    Swal.fire({
        icon:"error",
        title:"Ocurrió un error al enviar el mensaje"
    })
  }
};
    return(
        <>
        <section className="contact-section">
            <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contactanos</h2>
            <p>
                ¿Tenés alguna consulta, sugerencia o encontraste un error? Nos encantaría
                leerte.
            </p>

            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                onChange={handleChange}
                value={form.nombre}
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                onChange={handleChange}
                value={form.email}
                type="email"
                id="email"
                name="email"
                placeholder="nombre@email.com"
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Motivo</label>
                <select
                onChange={handleChange}
                value={form.motivo}
                id="motivo"
                name="motivo" 
                required>
                <option value="">Seleccioná una opción</option>
                <option value="consulta">Consulta</option>
                <option value="error">Reportar un error</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="colaboracion">Colaboración</option>
                <option value="otro">Otro</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                onChange={handleChange}
                value={form.mensaje}
                id="mensaje"
                name="mensaje"
                rows="6"
                placeholder="Escribí tu mensaje..."
                required
                ></textarea>
            </div>

            <button type="submit">Enviar mensaje</button>
            </form>
</section>
        </>
    )
}
export default Contacto;