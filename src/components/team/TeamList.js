import React from 'react';
import './TeamList.scss';
const TeamList = ({ team, handleOpenModal }) => (
  <div className="cards-container">
    {team.map(person => (
      <div
        onClick={handleOpenModal}
        name="modal-edit"
        className="card team-card"
      >
        <div className="card-image">
          <figure className="image is-square">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure classNamme="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="is-4 is-white">{person.fullname}</p>
              <p className="is-6 is-white">Cargo: {person.role}</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default TeamList;
