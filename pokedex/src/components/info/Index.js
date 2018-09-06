import React, { Component } from "react"
import remove from "lodash/remove"
import { updatePokemonInfo } from "../../actions/index"

class Info extends Component {

  defaultState = {
    id: 0,
    selectedMoves: [],
    nickname: ""
  }

  constructor(props) {
    super(props)
    this.state = {...this.defaultState, ...props}
  }

  renderMovesSelect = () => {
    return this.props.moves.map((move) => {
      return <option>{move}</option>
    })
  }

  removeMoveHandler = (event) => {
    const target = event.currentTarget
    const value = target.dataset.move
    const movesCopy = Object.assign([], this.state.selectedMoves)
    const newMoves = remove(movesCopy, (mve) => mve === value )
    this.setState({ selectedMoves: movesCopy })
  }

  nicknameChangeHandler = (event) => {
    const target = event.currentTarget
    this.setState({nickname: target.value})
  }

  infoSaveHandler = () => {
    let updateHash = {...this.state}
    window.App.store.dispatch(updatePokemonInfo(updateHash))
    console.log("save!")
  }

  renderSelectedMoves = () => {
    const { selectedMoves = [] } = this.state
    const classnames = "list-group-item d-flex justify-content-between align-items-center"
    return selectedMoves.map((move) => {
      return (
        <li className={classnames}>
          {move}
          <button data-move={move} onClick={this.removeMoveHandler} type="button" className="close">
            <span>&times;</span>
          </button>
        </li>
      )
    })
  }

  onMoveSelectHandler = (event) => {
    const target = event.currentTarget
    const { selectedMoves } = this.state
    selectedMoves.push(target.value)
    this.setState({selectedMoves: selectedMoves})
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-12">
          <pre>Moves</pre>
          <div className="row">
            <div className="col-sm-4">
              <select onChange={this.onMoveSelectHandler} className="form-control">
                { this.renderMovesSelect() }
              </select>
            </div>
            <div className="col-sm-4">
              <ul className="list-group">
                { this.renderSelectedMoves() }
              </ul>
            </div>
          </div>
          <pre className="mt-3">Nickname</pre>
          <div className="row">
            <div className="col-sm-12">
              <input
                onChange={this.nicknameChangeHandler}
                type="type"
                className="form-control"
                value={this.state.nickname}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-12">
              <button
                onClick={this.infoSaveHandler}
                type="button"
                className="btn btn-success form-control"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Info;
