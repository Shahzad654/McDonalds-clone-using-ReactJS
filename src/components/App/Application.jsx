import React from 'react'
import './Application.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {Typography, Button, Card,  CardContent, CardMedia, Grid, Container} from '@mui/material'
import APPIMG from '../../assets/app.jpg'
import PIMG from '../../assets/app1.png'
import D1 from '../../assets/f1.png'
import D2 from '../../assets/f2.png'
import App1 from '../../assets/app2.png'
import App2 from '../../assets/app3.jpg'


const Application = () => {
  return (
    <>
    <Navbar/>
    <div>
      <img src={APPIMG} alt="" className='app_img'/>
    </div>

    <div className='app_promotion'>
      <img src={PIMG} alt="" className="promotion_img" />

      <div className='app_content'>
      <Typography variant='h3' style={{marginRight: '180px', marginLeft: '40px', marginTop: '30px'}}>Download The McDonald’s App</Typography>
      <Typography style={{marginLeft: '40px', marginTop: '30px'}}>Get exciting rewards and surprises everyday</Typography>

      <img src={D1} alt="" className='download'/>
      <img src={D2} alt="" className='download'/>


      </div>

    </div>

    <Container>
      <Grid container spacing={2} marginTop='20px'>
    {/* Item#1 */}
      <Grid item padding='20px 0' xs={12} sm={6} md={4} style={{marginLeft: '150px', marginTop: '30px'}}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={App1} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>The McDonald's Rewards Program</Typography>
                    <Typography align='center' style={{marginTop: '10px'}}>Start scanning with every purchase to collect points and redeem them to enjoy more of the food you love.</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>Learn More</Button>
                </CardContent>
            </Card>
      </Grid>

      {/* Item#2 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4} style={{marginLeft: '130px', marginTop: '30px'}}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={App2} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>McDelivery</Typography>
                    <Typography align='center' style={{marginTop: '20px'}}>Get all your McDonald’s favourites delivered right to your doorstep.</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'60px', marginLeft:'100px'}} className='about-btn'>Order Now</Button>
                </CardContent>
            </Card>
      </Grid>

      </Grid>
    </Container>
    <Footer/>
    
    </>
  )
}

export default Application