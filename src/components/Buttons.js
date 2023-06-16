import { useNavigate } from 'react-router-dom';

function Buttons(props) {
  const navigate = useNavigate();
  
  return (
    <div className='buttons'>
      <button
        className='sort'
        onClick={props.sort}
      >
        Sort By Name
      </button>
      <button
        className='add'
        
      >
        Add New List
      </button>
    </div>
  )
}

export default Buttons