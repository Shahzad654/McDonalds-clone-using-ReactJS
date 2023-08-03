import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import {Typography, Button, Card,  CardContent, CardMedia, Grid, Container} from '@mui/material'
import Hero1 from '../../assets/heroimg.png'
import C1 from '../../assets/c1.jpg'
import C2 from '../../assets/c2.jpg'
import C3 from '../../assets/c3.jpg'
import C4 from '../../assets/c4.png'
import C5 from '../../assets/c5.png'
import C6 from '../../assets/c6.png'
import Footer from '../Footer/Footer'
import HamMenu from '../HamburgerMenu/HamMenu'


const Home = () => {
  return (
    <>
    <Navbar/>


    <main>
            <div>
                <img src={Hero1} alt="" className='HeroImg1' />
            </div>

            <Container>
                <Grid container spacing={2} marginTop='20px'>
                    
                  {/*  Card#1  */}
                    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                        <Card height='100%' display='flex' direction='column'>
                            <CardMedia component='img' image={C1} height='200px' object-fit='cover' width='100%'/>
                            <CardContent>
                                <Typography variant='h5' align='center'>McCafe</Typography>
                                <Typography align='center'>Browse our menu for more information</Typography>
                                <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}} className='card-btn'>Order Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*  Card#2  */}
                    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                        <Card height='100%' display='flex' direction='column'>
                            <CardMedia component='img' image={C2} height='200px' object-fit='cover' width='100%'/>
                            <CardContent>
                                <Typography variant='h5' align='center'>McDelivery</Typography>
                                <Typography align='center'>Delivering food at your doorsteps.</Typography>
                                <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}}>Order Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*  Card#3  */}
                    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                        <Card height='100%' display='flex' direction='column'>
                            <CardMedia component='img' image={C3} height='200px' object-fit='cover' width='100%'/>
                            <CardContent>
                                <Typography variant='h5' align='center'>Our App</Typography>
                                <Typography align='center'>McDonald's in your Pocket.</Typography>
                                <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}}>Download Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*  Card#4  */}
                    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                        <Card height='100%' display='flex' direction='column'>
                            <CardMedia component='img' image={C4} height='200px' object-fit='cover' width='100%'/>
                            <CardContent>
                                <Typography variant='h5' align='center'>Our Menu</Typography>
                                <Typography align='center'>Our exclusive menu is waiting for you.</Typography>
                                <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}}>Order Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*  Card#5  */}
                    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                        <Card height='100%' display='flex' direction='column'>
                            <CardMedia component='img' image={C5} height='200px' object-fit='cover' width='100%'/>
                            <CardContent>
                                <Typography variant='h5' align='center'>Trending Now</Typography>
                                <Typography align='center'>Find out what's new.</Typography>
                                <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}}>Learn More</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/*  Card#6  */}
                    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
                        <Card height='100%' display='flex' direction='column'>
                            <CardMedia component='img' image={C6} height='200px' object-fit='cover' width='100%'/>
                            <CardContent>
                                <Typography variant='h5' align='center'>Careers</Typography>
                                <Typography align='center'>Be a part of our team.</Typography>
                                <Button variant='contained' size='small' color='secondary' style={{marginTop:'12px', marginLeft:'100px'}}>Apply Now</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                </Grid>

            </Container>
        </main>

        <Footer/>
      
    </>
  )
}

export default Home
