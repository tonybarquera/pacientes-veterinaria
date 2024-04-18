import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient
}

function PatientDetails({ patient } : PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-md">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha alta" data={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" data={patient.symptoms} />

      <div className="flex justify-between mt-10">
        <button className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
        <button className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  )
}

export default PatientDetails;