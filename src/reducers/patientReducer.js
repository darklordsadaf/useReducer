export const patientState = {
    patients: []
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }

            const allPatients = [...state.patients, newPatient]
            return { patients: allPatients };
        case 'REMOVE_PATIENT':
            console.log(action);
            const remainingPatients = state.patients.filter(pt => pt.id !== action.id);
            return { patients: remainingPatients };
        default:
            return state;
    }
}