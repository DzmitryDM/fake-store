import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Main from './../components/main/Main'

function Root() {
	return (
		<div className='wrapper'>
			<Header />
			<Main/>
			<Footer />
		</div>
	)
}

export default Root
