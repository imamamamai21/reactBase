import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
}));

export default function TitleArea(props) {
	const classes = useStyles();
	return (
		<div>
      <Typography variant="h6">勝利者予想を的中させよう！</Typography>
    </div>
	);
}