import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles/formulario.css'
// import video from "./img/videoff.mp4";
const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<div class="bg"></div>
			<div class="bg bg2"></div>
			<div class="bg bg3"></div>
			<div class="content">
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
					estado: '',
					sexo: '',
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if (!valores.nombre) {
						errores.nombre = 'Por favor ingresa un nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if (!valores.correo) {
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
					//validacion estado
					if (!valores.estado) {
						errores.estado = 'Por favor ingrese un estado de la republica'
					}
					//validacion sexo
					if (!valores.sexo) {
						errores.sexo = 'Por favor una opcion'
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 50000);
					fetch('')
				}}
			>

				{({ errors }) => (
					<div className='formulario'>
						{/* <video src={video} autoplay="true" muted="true" loop="true" poster={video} /> */}
						<div>
							
						<h3>Ingrese los siguientes datos para ser voluntario</h3>
					</div>
						<Form>
							<div class="mb-3">
								<label for="nombre" class="form-label">Nombre</label>
								<Field
									class="form-control"
									type="text"
									id="nombre"
									name="nombre"
									placeholder="Juan Hernandez"
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
							</div>
							<div class="mb-3">
								<label for="correo" class="form-label">Correo Electronico</label>
								<Field
									class="form-control"
									type="text" 
									id="correo" 
									name="correo" 
									placeholder="juan@gmial.com" 
								/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
							</div>
							<div>
								<p class="form-label">Estado de la republica</p>
								<Field class="form-select" name="estado" as="select">
									
									<option value="Puebla">Puebla</option>
									<option value="cdmx">cdmx</option>
									<option value="nuevo leon">nuevo leon</option>
								</Field>
								<ErrorMessage name="estado" component={() => (<div className="error">{errors.estado}</div>)} />
							</div>
							<br />
							<div>
								<label class="form-check form-check-inline">
									<Field type="radio" name="sexo" value="hombre" /> Hombre
								</label>
								<label class="form-check form-check-inline">
									<Field type="radio" name="sexo" value="mujer" /> Mujer
								</label>
								<label class="form-check form-check-inline">
									<Field type="radio" name="sexo" value="prefiero no decirlo" /> Prefiero no decirlo
								</label>
								<ErrorMessage name="sexo" component={() => (<div className="sexo">{errors.sexo}</div>)} />
							</div>
							<button type="submit" class="btn btn-primary">Submit</button>
							{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
						</Form>
					</div>
				)}
			</Formik>
		</div>
		</>
	);
}

export default Formulario;