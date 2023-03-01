import { useState } from 'react'
import kyClient from "./ky-client.js";

function App() {

    const roles = kyClient('roles').json();

    return (
        <div className="bg-red-500 text-white">
        </div>
    )
}

export default App
