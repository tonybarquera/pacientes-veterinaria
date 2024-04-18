import { usePatientStore } from "../store/store";
import PatientDetails from "./PatientDetails";

function PatientList() {
  const { patients } = usePatientStore();
  console.log(patients);
  
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      { patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tu {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          { patients.map(patient => (
            <PatientDetails 
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default PatientList;