import fs from 'node:fs/promises';
import path from "node:path"

    const rutaEspecialidades = path.join(__dirname, 'data', 'especialidades.json');
    const rutaProfesionales = path.join(__dirname, 'data', 'profesionales.json');

    const dataEspecialidades = await fs.readFile(rutaEspecialidades, 'utf-8');
    const dataProfesionales = await fs.readFile(rutaProfesionales, 'utf-8');

    interface Turnos {

        "FechaMaxima": string;
        "HorarioMinimo": string;
        "HorarioMaximo": string;

    } 

    const Disponibilidad: Turnos = {

        FechaMaxima: "2026-12-30",
        HorarioMinimo: "07:00",
        HorarioMaximo: "13:00",


    } 