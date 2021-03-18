import React, { useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Grid,
	Container,
	Paper,
	AppBar,
	Button,
	Toolbar,
	Typography,
	Link,
	TextField,
	Modal,
	CssBaseline
} from "@material-ui/core"

function rand() {
	return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
	const top = 50 + rand()
	const left = 50 + rand()

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	}
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	modal: {
		position: "absolute",
		width: 300,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	input: {
		height: 2
	},
	text: {
		margin: "0 10px",
		textAlign: "left"
	}
}))
export default function App() {
	const classes = useStyles()
	const [text, setText] = useState("Change the text here.")
	const [open, setOpen] = useState(false)
	const [modalStyle] = useState(getModalStyle)
	const inputText = useRef(null)
	const preventDefault = (e) => {
		e.preventDefault()
	}
	const handleOpen = (e) => {
		e.preventDefault()
		setOpen(true)
	}
	const changeText = (e) => {
		handleClose()
		console.log(inputText.current.value)
		setText(inputText.current.value)
	}
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<Paper elevation={2} className={classes.paper}>
							<AppBar position='relative' color='primary'>
								<Toolbar variant='dense'>
									<Grid container justify='space-between'>
										<Grid item>
											<Link
												href='#'
												color='inherit'
												onClick={preventDefault}>
												File
											</Link>
										</Grid>
										<Grid item>
											<Link
												href='#'
												color='inherit'
												onClick={handleOpen}>
												Edit
											</Link>
										</Grid>
									</Grid>
								</Toolbar>
							</AppBar>
							<Typography
								variant='h2'
								component='h2'
								color='primary'
								style={{ marginTop: 20 }}>
								Heading
							</Typography>
							<p className={classes.text}>{text}</p>
						</Paper>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<div style={modalStyle} className={classes.modal}>
					<form onSubmit={changeText}>
						<p>
							<b>About</b>
							<br />
							Type your message
						</p>
						<TextField
							variant='outlined'
							fullWidth={true}
							InputProps={{
								classes: {
									input: classes.input
								}
							}}
							inputRef={inputText}
						/>
						<p>
							<Button
								variant='contained'
								color='primary'
								type='submit'>
								OK
							</Button>
						</p>
					</form>
				</div>
			</Modal>
		</div>
	)
}
