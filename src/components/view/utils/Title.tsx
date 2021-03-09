import { Typography } from "@material-ui/core";
import * as React from "react";

const Title: React.FC<ITitleProps> = ({ title, subtitle }) => (
  <>
  <Typography variant='h4' className='maintenance_body-container'>
    {Title}
  </Typography>
  <Typography variant='subtitle1'>
    {subtitle}
  </Typography>
</>
);

interface ITitleProps {
  title: string;
  subtitle: string;
}

export default Title;