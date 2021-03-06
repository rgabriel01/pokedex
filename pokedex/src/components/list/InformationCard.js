import React from "react";
import pick from "lodash/pick";

const InformationCard = (props) => {

  const textFields = ["id", "name","height", "weight", "base_experience"]
  const arrayFields = ["abilities", "stats", "types"]

  const renderTextFields = () => {
    const fields = pick(props, textFields)
    return Object.keys(fields).map((field) => {
      return <div className="row"> {field}: {props[field]}</div>
    })
  }

  const renderArrayFields = () => {
    const fields = pick(props, arrayFields)
    return Object.keys(fields).map((field) => {
      return (
        <div className="row">
          {field}
          <ul>
            {
              props[field].map((value) => {
                return <li>{value}</li>
              })
            }
          </ul>
        </div>
      )
    })
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          <button onClick={props.addToLineupHandler} type="button" className="btn btn-success">Add To Lineup</button>
        </div>
        <div className="row">
          <img src={props.sprites} alt={props.name}/>
        </div>
        {renderTextFields()}
        {renderArrayFields()}
      </div>
    </div>
  )
}

export default InformationCard;
