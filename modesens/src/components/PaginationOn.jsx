import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



export function PaginationSize(count1,page1,setPage1) {
  console.log(count1.count1)
     const handleChange = () => {
        setPage1(page1+1);
        
      };
    return (
      <Stack spacing={2} className='pagi'>
        <Pagination onChange={()=>{handleChange()}} className="pag" count={count1.count1} size="small" />
        
      </Stack>
    );
  }