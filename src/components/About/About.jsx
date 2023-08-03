import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {Typography, Button, Card,  CardContent, CardMedia, Grid, Container} from '@mui/material'
import './about.css'
import AboutIMG from '../../assets/ahero.jpg'
import A1 from '../../assets/a1.jpg'
import A2 from '../../assets/a2.jpg'
import A3 from '../../assets/a3.png'

const About = () => {
  return (
    <>
      <Navbar/>
     
     <div>
      <img src={AboutIMG} alt="" className='about_img'/>

      <Container>
      <Grid container spacing={2} marginTop='20px'>

        {/* Item#1 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={A1} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>Food Quality</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>Learn More</Button>
                </CardContent>
            </Card>
      </Grid>

      {/* Item#2 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={A2} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>Our Ingredients</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>Learn More</Button>
                </CardContent>
            </Card>
      </Grid>



      {/* Item#3 */}


      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={A3} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>Your Right To Know</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>Learn More</Button>
                </CardContent>
            </Card>
      </Grid>

      </Grid>
      </Container>


     </div>



      <Footer/>
    </>
  )
}

export default About
