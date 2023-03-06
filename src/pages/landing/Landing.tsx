import { useCallback, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useApiHook } from "../../hooks";

const Landing = () => {
    const [hello, setHello] = useState<string>("");
    const [isFetchDone, setIsFetchDone] = useState<boolean>(false);
    const { getHello } = useApiHook();

    const callApi = useCallback( async () => {
        try {
            const response = await getHello();
            setHello(response.data);
        } catch (e){
            setHello("Something failed");
        }
    }, [getHello]);

    useEffect(() => {
        if(!isFetchDone){
            setIsFetchDone(true);
            callApi();
        }
    }, [callApi, isFetchDone])

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                Testing API Data
                </Typography>
                <Typography variant="body1" color="text.primary">
                Hello this is the endpoint data: 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {hello}
                </Typography>
                <Typography variant="subtitle2" color="GrayText">
                    TESTING ENDPOINT: /api/hello
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Landing;