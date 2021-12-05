import {useEffect, useState} from "react";
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'

const useStyles = makeStyles({
    mainBoxBackground: {
        position:'absolute',
        zIndex:'2',
        height:'750px',
        width:'90%',
        backgroundColor:'rgb(128, 128, 128,0.7)',
        top:'15%',
        left:'5%',
        borderRadius:'25px',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    container:{
        content: "",
        display: 'flex',
        width:'100%'
    },
    leftSide:{
        flex:'39%',
        height:'100%',
        padding:'10px',
    },
    rightSide:{
        flex:'60%',
        height:'100%',
        padding:'10px',
    }
});

const MainPage=()=> {
    const classes = useStyles();
    const [allFilmsData, setAllFilmsData] = useState([]);
    const getSwapiData = () => {
        axios.get('https://swapi.dev/api/films').then((res)=>{
            setAllFilmsData(res.data.results);
        }).catch((err)=>{console.log(err)});
    }

    useEffect(()=>{
        getSwapiData();
    },[])

    return (
        <div className={classes.mainBoxBackground}>
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <Typography variant={'h2'} style={{paddingBottom:'40px', textAlign:'center', color:'white'}}>Films List</Typography>
                </div>
                <div className={classes.rightSide}>
                    <Typography variant={'h2'} style={{color: 'white', marginLeft: '260px'}}>Film Details</Typography>
                </div>

            </div>
        </div>
    );
}

export default MainPage;