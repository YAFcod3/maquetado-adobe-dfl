import React from 'react'
import { Paper } from "@mui/material";
import style from '../../styles/influencers.module.css'

const DataHeader = () => {
  return (
    <Paper elevation={1} className={style.header}>
    <div>
      <span>Inicio /</span><span>Mi tienda</span>
    </div>
  </Paper>  )
}

export default DataHeader