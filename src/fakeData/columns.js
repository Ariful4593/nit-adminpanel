const columns = [
    { id: 'roll', label: 'Roll', minWidth: 90 },
    { id: 'photo', label: 'Photo', minWidth: 100, },
    { id: 'name', label: 'Name', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'gender', label: 'Gender', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'department', label: 'Department', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'section', label: 'Section', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'parents', label: 'Parents', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'address', label: 'Address', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'dob', label: 'DOB', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'phone', label: 'Phone', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'email', label: 'Email', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
];
export default columns;