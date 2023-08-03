import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {Typography, Button, Card,  CardContent,  Grid, Container} from '@mui/material'
import './right.css'
import RightIMG from '../../assets/r1.png'

const Right = () => {
  return (
    <>
    <Navbar/>

    <div>

      <img src={RightIMG} alt="" className='right_img' />

      <Container>
      <Grid container spacing={2} marginTop='20px'>

        {/* Item#1 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardContent>
                  <Typography>ASKED BY MUHAMMAD MAJID</Typography>
                    <Typography variant='h4' align='center' style={{marginTop: '60px'}}>How do I apply for employment at McDonalds?</Typography>
                    <Typography align='center' style={{marginTop: '60px'}}>To apply for a job at McDonald's visit the McDonalds Careers website. Navigate to Restaurant Jobs or Corporate Jobs to find available McDonald's job listings near you.</Typography>
                    
                </CardContent>
            </Card>
      </Grid>

      {/* Item#2 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardContent>
                  <Typography>ASKED BY AYSHA</Typography>
                    <Typography variant='h4' align='center' style={{marginTop: '60px'}}>How do you make French fries?</Typography>
                    <Typography align='center' style={{marginTop: '60px', paddingBottom: '42px'}}>Hi, our World Famous Fries are freshly prepared for you in our restaurants from frozen high quality potatoes, planted and grown specifically for McDonald's.</Typography>
                    
                </CardContent>
            </Card>
      </Grid>



      {/* Item#3 */}

      <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
                <CardContent>
                  <Typography>ASKED BY FAROOQ</Typography>
                    <Typography variant='h4' align='center' style={{marginTop: '60px'}}>Can I buy a McDonald’s franchise?</Typography>
                    <Typography align='center' style={{marginTop: '60px', paddingBottom: '25px'}}>Hi, thank you for your interest. However, we do not offer franchise in Pakistan market at the moment.</Typography>
                    
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

export default Right