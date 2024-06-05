import React from 'react';
import { Link } from '@mui/material';
import ClassIcon from '@mui/icons-material/Class';

const CourseOfferingLink = () => {
  return (
    <Link
      href="https://course-navigator.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ClassIcon
        sx={{
          cursor: 'pointer',
          fontSize: 38,
          ml: 2,
          mr: 10,
          color: '#18184d',
        }}
      />
    </Link>
  );
};

export default CourseOfferingLink;
