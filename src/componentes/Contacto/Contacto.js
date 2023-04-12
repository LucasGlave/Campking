import './Contacto.scss'

const Contacto = () => {
    return(
        <div className="cargando">
            <card class="card border border-blue-300 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-3 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-5 gap-4">
                                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </card>
        </div>
        // <div className="ProdContainer">
        //     <div className="divh2">
        //         <h2>
        //             Contacto
        //         </h2>
        //     </div>
        // </div>
    )
}

export default Contacto