import React from 'react';

import TeamModalRegisterForm from './TeamModalRegisterForm';
import TeamModalEditForm from './TeamModalEditForm';

const TeamModal = ({ onChange, onSubmit, modalCloseControl, modalToOpen }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    {modalToOpen == 'modal-register' ? (
      <TeamModalRegisterForm
        onChange={onChange}
        onSubmit={onSubmit}
        modalCloseControl={modalCloseControl}
      />
    ) : (
      <TeamModalEditForm
        onChange={onChange}
        onSubmit={onSubmit}
        modalCloseControl={modalCloseControl}
      />
    )}
  </div>
);

export default TeamModal;
