import React from 'react';
import {Link} from 'react-router-dom'; 
function Error() {
  return (
      <>
      <div>
          <div className='justify-center'>
              <div className="p-8 md:p-48">
                 <h1 className='text-8xl text-slate-500'>404</h1>
                 <h1 className='font-medium'>Not Found</h1>
                 <span className='font-thin'>The page your are looking for doesn't exist</span>
                 <button className="mx-2 btn btn-sm btn-outline btn-primary inline">
                 <Link to='/'>Home</Link>
                 </button>
              </div>
          </div>
      </div>
      </>
  );
}

export default Error;
