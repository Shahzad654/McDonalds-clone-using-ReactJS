import React from 'react'
import './family.css'
import {Typography, Button, Card,  CardContent, CardMedia, Grid, Container} from '@mui/material'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import FamHero from '../../assets/family.jpg'
import Fam1 from '../../assets/fam1.png'
import Fam2 from '../../assets/fam2.jpg'
import Fam3 from '../../assets/fam3.png'

const Family = () => {
  return (
    <>
    <Navbar/>

    <div>
      <img src={FamHero} alt="" className='fam_img'/>

    </div>

    <Container>
      <Grid container spacing={2} marginTop='20px'>

        {/* Item#1 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={Fam1} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>Happy Meal Menu</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>View Menu</Button>
                </CardContent>
            </Card>
      </Grid>

      {/* Item#2 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={Fam2} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>Happy Meal Toys</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>View Toys</Button>
                </CardContent>
            </Card>
      </Grid>

      {/* Item#3 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardMedia component='img' image={Fam3} height='200px' object-fit='cover' width='100%'/>
                <CardContent>
                    <Typography variant='h5' align='center'>Download McDonald's App</Typography>
                    <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='about-btn'>Learn More</Button>
                </CardContent>
            </Card>
      </Grid>

      </Grid>

    </Container>

    <Footer/>
    
    </>
  )
}

export default Family