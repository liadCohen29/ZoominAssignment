import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    root: { borderRadius: '5px', height: '588px', width: '50%', backgroundColor: 'white', position: 'absolute', marginTop: '40px' },
    detailsBox: {
        padding: '50px 50px 20px 50px'
    },
    header: {
        textDecoration: 'underline'
    }
});

const MovieDetailsView = (props) => {
    const { film } = props;
    const classes = useStyles();
    const favoriteFilmsFromLocalStorage = JSON.parse(localStorage.getItem('favoriteFilms')) ? JSON.parse(localStorage.getItem('favoriteFilms')) : []
    const [favoriteFilms, setFavoriteFilms] = useState(favoriteFilmsFromLocalStorage);
    const [valueUpdate, setValueUpdate] = useState(false);
    const setFilmChecked = (id, state) => {
        if (!favoriteFilms?.find((film) => film.id === id)){
            setFavoriteFilms((prev) => [...prev, { id: id, checkedAsFavourite: state }])
        }else {
            favoriteFilms.filter((film) => film.id === id)[0].checkedAsFavourite = state;
            setValueUpdate(!valueUpdate);
        }
    };

    useEffect(() => {
        window.localStorage.setItem('favoriteFilms', JSON.stringify(favoriteFilms));
    }, [favoriteFilms, valueUpdate]);

    const isFavorite = !!favoriteFilms?.filter((fav) => fav.id === film.episode_id)[0]?.checkedAsFavourite;
    return (
        <div className={classes.root}>
            <Typography style={{ paddingTop: '20px' }} variant={'h3'} align={'center'}>{film.title}</Typography>
            <div className={classes.detailsBox}>
                <div style={{ display: "flex" }}>
                    <Typography className={classes.header} variant={'overline'}>Episode Id:</Typography>
                    <Typography variant={'overline'}>&nbsp;{film.episode_id}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography className={classes.header} variant={'overline'}>Release Date:</Typography>
                    <Typography variant={'overline'} >&nbsp;{film.release_date}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography className={classes.header} variant={'overline'}>Director:</Typography>
                    <Typography variant={'overline'}>&nbsp;{film.director}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography className={classes.header} variant={'overline'}>Producer:</Typography>
                    <Typography variant={'overline'}>&nbsp;{film.producer}</Typography>
                </div>
                <div >
                    <Typography className={classes.header} variant={'overline'}>Opening Crawl:</Typography>
                    <Typography variant={'overline'}>&nbsp;{film.opening_crawl}</Typography>
                </div>
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checked={isFavorite} onChange={() => setFilmChecked(film.episode_id, !isFavorite)} checkedIcon={<Favorite />} />}
                    label="Favorite Film"
                />
            </div>
        </div>
    )
}

export default MovieDetailsView;