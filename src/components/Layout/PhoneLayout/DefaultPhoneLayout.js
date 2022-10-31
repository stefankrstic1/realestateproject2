import React, { Fragment } from 'react'
import PhoneBottomNav from '../../Navigation/PhoneNavigation/PhoneBottomNav'
import PhoneDefaultTopBar from '../../Navigation/PhoneNavigation/PhoneDefaultTopBar'

function DefaultPhoneLayout(props) {
  return (
    <Fragment>
        <PhoneDefaultTopBar toggleDrawer={props.toggleDrawer}/>
        {props.children}
        {/* <PhoneBottomNav toggleDrawer={props.toggleDrawer}/> */}
    </Fragment>
  )
}

export default DefaultPhoneLayout