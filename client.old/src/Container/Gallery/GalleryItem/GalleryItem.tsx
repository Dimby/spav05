import { Grid, IconButton } from '@material-ui/core';
import React, { FC } from 'react'
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap'

interface GalleryItemProps {
    url: string
    title: string
    description: string
    date: string
    handleClickOpen: () => void
}

const GalleryItem: FC<GalleryItemProps> = ({url, title, description, date, handleClickOpen}) => {
    return <>
        <Grid xs={4} style={{ marginBottom: '20px' }} key={url}>
            <div className="responsive">
            <div className="gallery">
                <img src={url} alt="" />
                <Grid container className="desc">
                <Grid item>
                    <div>
                    <h4 style={{ margin: 0 }}>
                        {title.toUpperCase()}
                    </h4>
                    </div>
                    <div style={{ maxWidth: '300px' }}>
                    {description} - {date}
                    </div>
                </Grid>
                <Grid xs style={{ textAlign: 'right' }}>
                    <IconButton  onClick={handleClickOpen}>
                    <ZoomOutMapIcon />
                    </IconButton>
                </Grid>
                </Grid>
            </div>
            </div>
        </Grid>
    </>
}

export default GalleryItem;
