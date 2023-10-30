const EditModal = ({ title = "Remember to add title", message = "Remember to add message", onConfirm }) => {

    const handleOnConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    }

    return (
        <>
            <button type="button" id="editModalButton" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#EditModal"></button>
            <div className="modal fade" id="EditModal" tabIndex="-1" aria-labelledby="EditModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" id="EditModal">{title}</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {message}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleOnConfirm}>Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;