import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { TEAM_QUERY } from '../querys/TeamQuerys';

import Header from '../components/layouts/container/Header';
import TeamList from '../components/team/TeamList';
import TeamModal from '../components/team/TeamModal';
class Team extends Component {
  state = {
    form: {
      fullname: '',
      email: '',
      password: '',
      phone: ''
    },
    modalToOpen: '',
    isOpenModal: false,
    id: '',
    data: []
  };

  handleOpenModal = (e, id) => {
    this.setState({
      id: id,
      modalToOpen: e.target.name,
      isOpenModal: true
    });
    console.log(this.state);
  };
  handleCloseModal = () => {
    this.setState({
      isOpenModal: false,
      modalToOpen: ''
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="team-page">
        <Header />
        <div className="">
          <div className="has-text-centered">
            <h1 className="title team-title">Equipo de Trabajo</h1>
          </div>
          <div className="buttons team-button-group">
            <button
              className="button is-success"
              name="modal-register"
              onClick={this.handleOpenModal}
            >
              Registrar empleado
            </button>
          </div>
          {this.state.isOpenModal ? (
            <TeamModal
              modalCloseControl={this.handleCloseModal}
              modalToOpen={this.state.modalToOpen}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              id={this.state.id}
            />
          ) : (
            <div />
          )}
          <div>
            <Query query={TEAM_QUERY}>
              {({ data, loading, error }) => (
                <div>
                  {error && (
                    <div>
                      <h1 className="title">{error}</h1>
                    </div>
                  )}
                  {loading || !data ? (
                    <div>
                      <h1 className="title">CARGANDO...</h1>
                    </div>
                  ) : (
                    <TeamList
                      team={data.me.employees}
                      handleOpenModal={this.handleOpenModal}
                    />
                  )}
                </div>
              )}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}
{
  /*  */
}

export default Team;
