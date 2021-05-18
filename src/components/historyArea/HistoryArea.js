import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& h6': { fontSize: '90px', opacity: '0.6' }
	}
}));

export default function HistoryArea(props) {
	const classes = useStyles();
	return (
		<div>
      ここに対戦記録が入ります
    </div>
	);
}