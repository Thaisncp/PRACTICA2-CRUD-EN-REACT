import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Input } from 'react-bootstrap';
import DataTable from "react-data-table-component";
import React, { useState } from 'react';
import { Libros , ObtenerDatos} from "../hooks/Conexion";
import EditarLibro from "./EditarLibro";
import mensajes from "../utilidades/Mensajes";
import { useNavigate } from "react-router";
import RegistrarLibro from "./RegistrarLibro";
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export const Prueba = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    const navegation = useNavigate();
    const [lllibro, setLllibro] = useState(false);
    const [llObtenerLibro, setLlObtenerLibro] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [seleccionarID, setSeleccionarID] = useState(null);
    const handleSearchChange = (event) => {setSearchValue(event.target.value);};
    const [show2, setShooow] = useState(false);
    const handClose = () => setShooow(false);
    const handShow = () => setShooow(true);
    const handleEditarLibro = async (id) => { 
        setSeleccionarID(id);
        handShow();
    };

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
        name: 'Titulo',
        selector: row => row.title,
    },
    {
        name: 'Descripcion',
        selector: row => row.description,
    },
    {
        name: 'Nro. de paginas',
        selector: row => row.pageCount,
    },
    {
        name: 'Fragmento de texto',
        selector: row => row.excerpt,
    },
    {
        name: 'Fecha de publicacion',
        selector: row => row.publishDate,
    },
    {
        name: 'Acciones',
        selector: row => (<>

            <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" class="btn btn-outline-info btn-rounded" value={seleccionarID} onClick={() => handleEditarLibro(row.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </a>

                <a href="#" className="btn btn-outline-danger btn-rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </a>
            </div>

        </>),
    },

];




    if (!lllibro) {
    Libros().then((info) => {
        var hola = info;
        if (info.error == true && info.messaje == 'Acceso denegado. Token a expirado') {
        } else {
            setData(hola);
            setLllibro(true);
        }
    })
    }
    if (!(searchValue == '')) {
        console.log('Buscando...');
        if (!llObtenerLibro) {
            ObtenerDatos(searchValue).then((info) => {
                var aux = info;
                if (info.error == true) {
                    mensajes(info.mensajes);
                    console.log('Error: Error de busqueda');
                } else {
                    setData([aux]);
                    console.log('Exito: Libro encontrado');
                }
            });
            setLlObtenerLibro(true);
        }
    }
    return (

        <div className="container-fuid">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscar libro" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "blue" }}><h2><b>Detalles libros</b></h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span style={{ marginLeft: '5px' }}>Agregar Libro</span>
                        </Button>
                    </div>
                </div>
                <div className="row">

                    <DataTable
                        columns={columns}
                        data={data}
                        selectableRows

                    />

                </div>

                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Agregar Libro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <RegistrarLibro />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>

                        </Modal.Footer>
                    </Modal>



                </div>
 
                <div className="model_box">
                    <Modal
                        show={show2}
                        onHide={handClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Editar libro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditarLibro nro={seleccionarID} ></EditarLibro>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handClose}>
                                Cerrar
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}


export default Prueba;