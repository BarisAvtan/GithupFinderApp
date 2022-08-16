import React from 'react'
//import loading from './loading.gif'
import loading from '../Gif/cartoon-snail-loading.gif'
const Loading = () => {
    //$ npm install file-loader --save-dev  kurulmalı
    //https://www.npmjs.com/package/file-loader
    return (
        <React.Fragment>
            <img src={loading} alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/>
            {/* <img src={`/${loading}`}  alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/> */}
        </React.Fragment>
    )
}
export  default Loading;

