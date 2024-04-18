import { usePatientStore } from "../store/store";

function PatientList() {
  const { patients } = usePatientStore();
  console.log(patients);
  
  return (
    <p>PatientList</p>
  )
}

export default PatientList;