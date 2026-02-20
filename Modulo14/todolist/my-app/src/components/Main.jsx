import { Component, React } from 'react';

import './Main.css';

import Form from './Form/index.jsx';
import Tarefas from './Tarefas/index.jsx';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer Café',
      'Beber Água',
      'Estudar JS/TS'
    ],
    indexEdit: -1
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({
      tarefas
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  editInputRefs = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();

    if (!novaTarefa) return;
    if (tarefas.includes(novaTarefa)) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
      novaTarefa: '', // Limpa o input após adicionar
    });
  };

  handleEdit = (e, index) => {
    this.setState({
      indexEdit: index
    }, () => {
      if (this.editInputRefs[index]) {
        this.editInputRefs[index].focus();
      }
    });
  };

  handleNewValue = (e, index) => {
    const { tarefas } = this.state;
    const inputElement = this.editInputRefs[index];

    if (e.key === 'Escape') {
      this.setState({
        indexEdit: -1
      });
    }

    if (e.key !== 'Enter') return;
    if (!inputElement) return;

    const tarefaEdit = inputElement.value.trim();

    if (!tarefaEdit) return;
    if (tarefas.includes(tarefaEdit)) return;

    const novasTarefas = [...tarefas];

    novasTarefas[index] = tarefaEdit;

    this.setState({
      tarefas: novasTarefas,
      indexEdit: -1
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: novasTarefas,
      indexEdit: -1
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

 render() {
    const { novaTarefa, tarefas, indexEdit } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          editInputRefs={this.editInputRefs}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleNewValue={this.handleNewValue}
          indexEdit={indexEdit}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
