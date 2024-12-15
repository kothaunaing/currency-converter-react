/** @format */

import { Link, useLocation } from 'react-router-dom';

const Error = ({ data }) => {
  const location = useLocation();

  return (
    <div className='Error'>
      <div className='grid gap-y-2'>
        <p style={{ fontWeight: '600', fontSize: '1.1rem' }}>
          <span>There is no page at path</span>{' '}
          <Link to={location.pathname}>
            <span className='text-blue-600 font-bold'>{location.pathname}</span>
          </Link>
        </p>
        <div style={{ display: 'grid', justifyContent: 'center' }}>
          <Link to='/'>
            <button className='btn-3'>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
