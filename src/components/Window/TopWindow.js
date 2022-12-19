import styled from 'styled-components';

const TopWindow = ({info}) => {
    return (
        info[25] ?
            <svg width="59" height="44" viewBox="0 0 59 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.7006 32.2229L29.7525 1.48423L53.8043 32.2229H5.7006Z" fill="white" stroke="black"/>
                <rect x="5.19287" y="25.6738" width="49.1188" height="6.97691" fill="white" stroke="black"/>
                <path d="M52.694 10.5339L30.7596 2.72502L47.6363 24.1631L52.694 10.5339Z" fill="white" stroke="black"/>
                <path d="M6.82673 10.5336L28.8321 2.72264L11.9508 24.1665L6.82673 10.5336Z" fill="white" stroke="black"/>
                <rect x="22.6772" y="14.1484" width="13.2353" height="7.84002" fill="#AF2010"/>
                <path d="M29.2949 19.0371L22.7997 14.2639L35.7901 14.2639L29.2949 19.0371Z" fill="#005452"/>
                <rect x="5.79492" y="0.672852" width="48" height="32" fill="#FFF9C4" fill-opacity="0.25"/>
            </svg>
        :
            <svg width="59" height="43" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.05655 31.5501L29.1084 0.811376L53.1603 31.5501H5.05655Z" fill="white" stroke="black"/>
                <rect x="4.54883" y="25.0005" width="49.1188" height="6.97691" fill="white" stroke="black"/>
                <path d="M16.731 24.5705L27.4891 10.0607L27.489 24.5705H16.731Z" fill="white" stroke="black"/>
                <path d="M30.1706 10.0607L40.9287 24.5705L30.1706 24.5704L30.1706 10.0607Z" fill="white" stroke="black"/>
                <path d="M29.5 0L54.1817 32.25H4.81828L29.5 0Z" fill="black" fill-opacity="0.3"/>
                <path d="M21.2508 25.2124H28.1508V24.0424H25.1058C24.5508 24.0424 23.8908 24.0874 23.3058 24.1474C25.9008 21.7024 27.6258 19.4674 27.6258 17.2624C27.6258 15.2974 26.3958 14.0224 24.4308 14.0224C23.0358 14.0224 22.0758 14.6674 21.1758 15.6424L21.9708 16.4074C22.5858 15.6874 23.3658 15.1324 24.2658 15.1324C25.6308 15.1324 26.2758 16.0624 26.2758 17.3224C26.2758 19.1974 24.7008 21.4024 21.2508 24.4174V25.2124ZM32.8261 25.4224C34.6711 25.4224 36.4261 24.0424 36.4261 21.6424C36.4261 19.2124 34.9411 18.1324 33.1111 18.1324C32.4511 18.1324 31.9561 18.2974 31.4611 18.5674L31.7461 15.3874H35.9011V14.2174H30.5461L30.2011 19.3624L30.9361 19.8274C31.5661 19.4074 32.0311 19.1674 32.7661 19.1674C34.1311 19.1674 35.0311 20.1124 35.0311 21.6874C35.0311 23.2774 33.9961 24.2824 32.6911 24.2824C31.4311 24.2824 30.6211 23.6974 30.0061 23.0524L29.3161 23.9524C30.0661 24.7024 31.1161 25.4224 32.8261 25.4224Z" fill="#DADADA"/>
            </svg>
    )
}

export default TopWindow;

const WriterNickname = styled.p `
    margin-bottom: 10px;
    font-size: 12px;
    color: #6E6E6E;
`
