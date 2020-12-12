const columns = [
    { id: 'roll', label: 'Roll', minWidth: 90 },
    { id: 'photo', label: 'Photo', minWidth: 100,align: 'center', },
    { id: 'name', label: 'Name', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'gender', label: 'Gender', minWidth: 120, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'department', label: 'Department', minWidth: 140, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'section', label: 'Section', minWidth: 50, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'admissionId', label: 'Admission ID', minWidth: 150, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'religion', label: 'Religion', minWidth: 120, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'dob', label: 'DOB', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'phone', label: 'Phone', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
];
export default columns;