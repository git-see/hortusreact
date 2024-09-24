import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AstuceAdd() {
  const navigate = useNavigate();
  const [formvalue, setFormvalue] = useState({
    domaines: "",
    sujet: "",
    astuce: "",
    pseudo: ""
  });

  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formvalue);
    const formData = {
      domaines: formvalue.domaines,
      sujet: formvalue.sujet,
      astuce: formvalue.astuce,
      pseudo: formvalue.pseudo
    };
    const res = await axios.post(
     "http://localhost/reactcrudHortusphp/",
      formData
    );
    if (res.data.success) {
      navigate("/list");
    }
  };

  return (
    <div className="astuce-add">
      <h2 className="domaine">Astuce</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="formDiv">
          <div>
            <label htmlFor="domaines">Domaine</label>
            <select type="text" id="domaines" name="domaines" value={formvalue.domaines} onChange={handleInput} required>
              <option value="Culture" selected="selected">
                Culture
              </option>
              <option value="Nuisibles">Nuisibles</option>
              <option value="Rescousse">Rescousse</option>
              <option value="Arrosage">Arrosage</option>
              <option value="Recettes">Recettes</option>
            </select>
          </div>
          <div>
            <label htmlFor="sujet">Sujet: </label>
            <input
              type="text"
              name="sujet"
              id="sujet"
              placeholder="Sujet"
              value={formvalue.sujet} 
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="astuce">Astuce: </label>
            <textarea
              name="astuce"
              id="astuce"
              placeholder="Écrivez ici votre astuce..."
              value={formvalue.astuce} 
              onChange={handleInput}
              required
            ></textarea>
          </div>
          <p>
            <label htmlFor="pseudo"></label>
            <input
              type="hidden"
              name="pseudo"
              id="pseudo"
              value={formvalue.pseudo}
              onChange={handleInput}
              required
            />
          </p>
          <div>
            <button
              className="domaineButton"
              type="submit"
              name="domaineButton"
              id="domaineButton"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
