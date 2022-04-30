import { ModalContainer, ModalContent } from './ModalStyle'

const Modal = ({onClose = () => {}, children}) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === 'modal') onClose()
    }
    return (
        <ModalContainer id='modal' onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose} />

                <ModalContent>
                    {children}
                </ModalContent>
            </div>
        </ModalContainer>
    )
}

export default Modal