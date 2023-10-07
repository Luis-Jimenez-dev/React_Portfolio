import React from 'react';
import { useRouter } from 'next/router';

//Button action listener to route to another page
const useChangePage = ({title, path}: {title: string, path: string}) => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push(path);
    };
  
    return (
      <button onClick={handleClick} className='hover:underline decoration-2 underline-offset-8'>
        {title}
      </button>
    );
  };

export default useChangePage;