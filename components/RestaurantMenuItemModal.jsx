import { useState } from "react";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export function RestaurantMenuItemModal ({ itemName, price, image, handleModalOpen, modalIsOpen }) {

    const [numOfItems, setNumOfItems] = useState(1);

    const addOrRemoveItem = (str) => {
        if (str === "add") {
            setNumOfItems(numOfItems + 1)
        } else if (str === "remove" && numOfItems > 1) {
            setNumOfItems(numOfItems - 1)
        } else {
            setNumOfItems(1)
        }

    }

    return (
        <>
            <Modal centered keyboard show={modalIsOpen} onHide={handleModalOpen}>
                <Modal.Header style={{ height: "30vh", backgroundImage: `url(${image})`, backgroundSize: "cover" }} closeButton className="border-0">
                </Modal.Header>
                <Modal.Body className="my-2 border-bottom">
                    <h1>
                        {itemName}
                    </h1>
                </Modal.Body>
                <ButtonGroup className="p-2">
                    <Button size="lg" className="rounded-circle m-2 border-0" onClick={() => addOrRemoveItem("remove")} style={{ backgroundColor: "#EEEEEE", color: "#000000" }}><FontAwesomeIcon icon={faMinus} /></Button>
                    <Button size="lg" className="border-0 text-center" style={{ backgroundColor: "transparent", color: "#000000", width: "7ch", pointerEvents: "none" }}>{numOfItems}</Button>
                    <Button size="lg" className="rounded-circle m-2 border-0" onClick={() => addOrRemoveItem("add")} style={{ backgroundColor: "#EEEEEE", color: "#000000" }}><FontAwesomeIcon icon={faPlus} /></Button>
                    <Button block size="lg" className="m-2 border-0" style={{ borderRadius: "0", backgroundColor: "#000000", color: "#FFFFFF" }}><span className="float-left">Add {numOfItems} to Order </span><span className="float-right">${(price * numOfItems).toFixed(2)}</span></Button>

                </ButtonGroup>
            </Modal>
        </>
    )
}

export default RestaurantMenuItemModal;