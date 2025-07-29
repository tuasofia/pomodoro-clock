import React, { useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetUp from 'moment-duration-format';

momentDurationFormatSetUp(moment)

const TimeLeft = ({
    sessionLegth
}) => {

    const [timeLeft, setTimeLeft] = useState(sessionLegth);

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');
    return (
        <div>{formattedTimeLeft} </div>
    )

}

export default TimeLeft