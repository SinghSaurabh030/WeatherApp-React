import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';

export default function InfoBox({result}){
    let RainImg='https://plus.unsplash.com/premium_photo-1661715276689-619fb1c79d6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    let ColdImg='https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';
    let HotImage='https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
  let def='https://images.unsplash.com/photo-1627764575220-d7fc469f4d03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div className='Info'>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={result.humidity==0 && result.temp==0 ? def :result.humidity>80? RainImg : result.temp>15? HotImage : ColdImg}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'monospace'}}>
            {result.city}&nbsp;{result.humidity>80? <ThunderstormIcon/> : result.temp>15? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <div variant="body2" color="text.secondary">
            <h4 style={{fontFamily:'monospace'}}>Temperature : {result.temp}&deg;C</h4>
            <h4 style={{fontFamily:'monospace'}}>Min-Temperature : {result.tempMin}&deg;C</h4>
            <h4 style={{fontFamily:'monospace'}}>Max-Temperature : {result.tempMax}&deg;C</h4>
            <h4 style={{fontFamily:'monospace'}}>Humidity : {result.humidity}</h4>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    );
}