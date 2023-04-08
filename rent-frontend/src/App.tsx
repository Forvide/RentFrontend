import React from 'react';
import './App.css';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container, Button
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera/>
                <Typography variant="h6">
                    Главная страница
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                    >
                        Главная страница
                    </Typography>
                    <Typography variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, incidunt?
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent="center" columns={{xs: 6, md: 6}}>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Посмотреть журнал
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Добавить новую квартиру
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth="md"
                       className={'cardGrid'}
            >
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                className={'card'}
                            >
                                <CardMedia
                                    className={'cardMedia'}
                                    image="https://source.unsplash.com/random"
                                    title="Image title">
                                </CardMedia>
                                <CardContent
                                    className={'cardContent'}
                                >
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque beatae deserunt eaque et illum magni nemo numquam quia!
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Открыть</Button>
                                    <Button size="small" color="primary">Редактировать</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </main>
        <footer className={'footer'}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorem expedita fugit ipsa, ipsum labore molestiae molestias odio perferendis voluptatum.
            </Typography>
        </footer>
    </>
  );
}

export default App;
