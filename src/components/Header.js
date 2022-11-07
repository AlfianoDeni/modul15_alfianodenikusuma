import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">Toko Buku Asadel</div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">New Arrival</a>
            </li>
          </ul>
          <form action="" class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setText(e.target.value)}></input>
            <button onClick={() => { navigate("/" + text) }} class="btn btn-outline-success" type="submit">Search</button>
            <script>console.log(text)</script>
          </form>
        </div>
      </nav>
    </>
  )
}