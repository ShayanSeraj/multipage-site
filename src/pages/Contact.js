import { useLocation } from 'react-router-dom'


export default function Contact() {

  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')

  return (
    <div>
        <div>
            {name && <h2>Hello {name}, Contact us ...</h2>}
            <h3>Email : shayanseraj69@gmail.com</h3>
            <h4>tell: +393803473054</h4>
        </div>
    </div>
  )
}
