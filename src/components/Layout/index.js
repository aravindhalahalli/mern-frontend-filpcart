import React from 'react'
import Header from '../Header/index';
import MenuHeader from '../MenuHeader/index'

const Layout = (props) => {
    return (
        <>
          <Header />
          <MenuHeader />
          {
              props.children
          }
        </>
    )
}

export default Layout
