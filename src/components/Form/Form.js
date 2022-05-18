import React from "react";

class Form extends React.Component {


    render() {
        return (
            <>
                <form className="" >
                    <table>
                        <tr>
                            <input
                                type="text"
                                placeholder="Escribe el nombre"
                                name="text"
                            />
                        </tr>
                        <tr>
                            <input
                                type="text"
                                placeholder="Escribe el precio"
                                name="text"
                            />
                        </tr>
                    </table>


                    <button className="">Agregar</button>
                </form>
            </>
        )
    }
}

export default Form