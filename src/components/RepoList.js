import React from "react"

import { asMatrix } from "../utils"

import "./RepoList.css"

const RepoList = ({ repositories }) => (
  <div className="grid">
    { asMatrix(repositories, 3).map((repos_matrix) => (
      repos_matrix.map((r) => (
      <div className="moduleBox" key={ r.id }>
        <a href={ r.url }>{r.name}</a>
        <p className="moduleDescription">{r.description}</p>
      </div>
      ))
    ))}
  </div>
)

export default RepoList