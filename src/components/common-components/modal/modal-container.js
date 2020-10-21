import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function ModalContainer(props) {

    const { isShow, onOkClick, onCancelClick, title, isRenderFooter, customClass } = props;

    return (
        <Modal dialogClassName={customClass} backdrop="static" show={isShow} onHide={onCancelClick}>
          <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

            <Modal.Body>{props.children}</Modal.Body>
          {isRenderFooter &&
            <Modal.Footer>
              <Button variant="secondary" onClick={onCancelClick}>
                Close
              </Button>
              <Button variant="primary" onClick={onOkClick}>
                Done
              </Button>
            </Modal.Footer>
          }
        </Modal>
    );
}
  
  ModalContainer.propTypes = {
        title: PropTypes.string,
        rating: PropTypes.string,
        released: PropTypes.string,
        runtime: PropTypes.string,
}

export default ModalContainer;