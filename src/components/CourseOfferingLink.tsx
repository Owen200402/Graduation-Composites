import { Link, Typography, useMediaQuery } from '@mui/material';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';

const CourseOfferingLink = () => {
  const is4KScreen = useMediaQuery('(min-width:3000px)');
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Link
        href="https://course-navigator.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ClassOutlinedIcon
          sx={{
            cursor: 'pointer',
            fontSize: 35,
            pl: 1,
            mt: 1.2,
            color: '#18184d',
          }}
        />
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: '#18184d', textAlign: 'center', mt: is4KScreen ? 0 : 1 }}
        >
          Courses
        </Typography>
      </div>
    </div>
  );
};

export default CourseOfferingLink;
