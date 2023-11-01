//Funciones para etiquetas de estado y membresía para la lista de clientes

export const renderStatus = (record) => {
    const status = record.contactStatus;
    const className = `status-${status.toLowerCase().replace(' ', '-')}`;
    return <span className={className}>{status}</span>;
};

export const renderMember = (record) => {
    const status = record.membershipStatus;
    const className = `status-${status.toLowerCase().replace(' ', '-')}`;
    return <span className={className}>{status}</span>;
};