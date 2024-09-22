import React from 'react';
import {  Modal } from 'antd';

const VModal = ({openState,title,children,afterClose,classNames,styles,onClose}) => {
 

  return (
    <>
   
      <Modal title={title} maskClosable={true} open={openState} closable={true} footer={null} classNames={classNames} styles={styles}  onCancel={onClose}>
          {children}
      </Modal>
    </>
  );
};

export default VModal;