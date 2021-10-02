import React, { useContext } from 'react'
import './globalbox.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ContextApi} from '../GlobalState/contextApi'


function GlobalBox({ Data, loading }) {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(0),
            backgroundColor: 'rgba(0, 0, 0,0.4)'
        },
        main: {
            maxWidth: '90%',
            margin: '60px auto',

        },

        extraDiv1: {
            position: 'absolute',
            bottom: '0',
            height: '3px',
            width: '100%',
            boxSizing: 'border-box',
            background: 'linear-gradient(to right ,#00c2ae,purple)',
        },
        extraDiv2: {
            position: 'absolute',
            bottom: '0',
            height: '3px',
            width: '100%',
            boxSizing: 'border-box',
            background: 'linear-gradient(to right ,#00c2ae,#fa0505)',
        },
        extraDiv3: {
            position: 'absolute',
            bottom: '0',
            height: '3px',
            width: '100%',
            boxSizing: 'border-box',
            background: 'linear-gradient(to right ,#00c2ae,yellow)',
        },
        extraDiv4: {
            position: 'absolute',
            bottom: '0',
            height: '3px',
            width: '100%',
            boxSizing: 'border-box',
            background: 'linear-gradient(to right ,#00c2ae,#88fa05)',
        },

        headDiv: {
            position: 'relative',
        },
        text: {
            fontSize: '30px',
            color: 'white',
            margin: '0',
            padding: '25px',
            fontWeight: '600',
            fontStyle: 'italic',
            // fontFamily: 'new'
        },
        textDiv: {
            display: 'flex',
            alignItems: 'center',
            // marginTop:'20px',
            height: '80px',
            position: 'relative'
        },
        head: {
            fontSize: '30px',
            color: '#878787',
            margin: '0px',
            padding: '5px 20px',
            fontFamily: 'new'
        },
        totalDataHead: {
            // textAlign: 'center',
            color: 'white',
            fontSize: '2.7rem',
            fontWeight: '500',
            marginBottom:'0px',
            marginTop:'60px',
            fontFamily:'new'
        },
        extraDivForHead:{
            backgroundColor:'rgb(255,215,0)',
            width:'100%',
            height:'2px',
            borderRadius:'10px',
            position:'absolute',
            bottom:'0'
        }
    }));
    const classes = useStyles();
    const {context} = useContext(ContextApi)
    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
        return parts.join(".");
        
    }
    return (
        <div>
            <div style={{width:'90%',margin:'0 auto',position:'relative'}}>
                <div id='totalDataHead' className={classes.totalDataHead}>{context.country.toUpperCase()} TOTAL DATA</div>
                <div className={classes.extraDivForHead}></div>
            </div>

            <div className={classes.root}>
                <Grid className={classes.main} container spacing={3}>
                    <Grid item xs={12} sm={6} lg={3} >
                        <Paper className={classes.paper}>
                            <div>
                                <div className={classes.headDiv}>
                                    <p className={classes.head}>Cases</p>
                                    <div className={classes.extraDiv1}></div>
                                </div>
                                <div className={classes.textDiv}>
                                    {
                                        loading === true ?
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div className="loader"></div>

                                            </div> :
                                            <p className={classes.text}>{numberWithCommas(Data.cases)}</p>
                                        // <CountUp start={0} end={Data.cases} duration={2.5} separator=',' className={classes.text} />
                                    }
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <div>
                                <div className={classes.headDiv}>
                                    <p className={classes.head}>Deaths</p>
                                    <div className={classes.extraDiv2}></div>
                                </div>
                                <div className={classes.textDiv}>
                                    {
                                        loading === true ?
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div className="loader"></div>

                                            </div> :
                                            <p className={classes.text}>{numberWithCommas(Data.deaths)}</p>
                                        // <CountUp start={0} end={Data.deaths} duration={2.5} separator=',' className={classes.text} />
                                    }
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} >
                        <Paper className={classes.paper}>
                            <div>
                                <div className={classes.headDiv}>
                                    <p className={classes.head}>Recovered</p>
                                    <div className={classes.extraDiv3}></div>
                                </div>
                                <div className={classes.textDiv}>
                                    {
                                        loading === true ?
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div className="loader"></div>

                                            </div> :
                                            <p className={classes.text} >{numberWithCommas(Data.recovered)}</p>
                                        // <CountUp start={0} end={Data.recovered} duration={2.5} separator=',' className={classes.text} />
                                    }
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper className={classes.paper}>
                            <div>
                                <div className={classes.headDiv}>
                                    <p className={classes.head}>Today's Cases</p>
                                    <div className={classes.extraDiv4}></div>
                                </div>
                                <div className={classes.textDiv}>
                                    {
                                        loading === true ?
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div className="loader"></div>

                                            </div> :
                                            <p className={classes.text}>{numberWithCommas(Data.today)}</p>
                                        // <CountUp start={0} end={Data.today} duration={2.5} separator=',' className={classes.text} />
                                    }
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}

export default GlobalBox;
