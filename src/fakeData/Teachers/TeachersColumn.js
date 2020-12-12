const TeachersColumn = [
    { id: 'id', label: 'ID', minWidth: 90 },
    { id: 'photo', label: 'Photo', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 140, align: 'left', format: (value) => value.toLocaleString('en-US') },
    { id: 'gender', label: 'Gender', minWidth: 140, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'blood', label: 'Blood Group', minWidth: 140, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'department', label: 'Department', minWidth: 140, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'lastQualification', label: 'Last Qualification', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'joiningDate', label: 'Joining Date', minWidth: 150, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'religion', label: 'Religion', minWidth: 140, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'address', label: 'Address', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'phone', label: 'Phone', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center', format: (value) => value.toLocaleString('en-US') },
];
export default TeachersColumn;