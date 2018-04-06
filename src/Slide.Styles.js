import styled from 'styled-components';

const H2 = styled.h2`
  color: #000;
`; 

const Success = styled.span`
  color: green;
`;

const Content = styled.div`
    margin-top: 60px;
    padding: 10px;
    text-align: left;
`;

const ContentCenter = styled.div`
    margin-top: 60px;
    padding: 10px;
    text-align: center;
`;

const H3 = styled.h3` 
  color: #000;
  font-size: large
  font-weight: bolder;
`;

const Home = styled.div`
    background-image: url("./imgs/DiveInnCornHole.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: 'no-repeat, repeat';
    min-height: 100vh;
    overflow: auto;
    width: 100%;
`;

const Register = styled.div`
    background-image: url("./imgs/CornHoleBoard.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: 'no-repeat, repeat';
    min-height: 100vh;
    overflow: auto;
    width: 100%;
`;

const DiveInn = styled.div`
    background-image: url("./imgs/DiveInnLogoBlack.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: 'no-repeat, repeat';
    min-height: 100vh;
    overflow: auto;
    width: 100%;
`;

const Prizes = styled.div`
    background-image: url("./imgs/Dive-Inn-Exterior.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: 'no-repeat, repeat';
    min-height: 100vh;
    overflow: auto;
    width: 100%;
    ul {
        list-style-type: none;
    }
`;
  
const slideBackground = {
    backgroundColor: 'rgba(183, 188, 192, 255)',
    minHeight: '100vh',
    overflow: 'auto',
};

const hidden = {
    display: 'none'
}
  
const visible = {
    display: 'block'
}

const floatLeft = {
    float: 'left'
}

const floatRight = {
    float: 'right'
}

const rowTopMargin = {
    top: '60px'
}

const fullWidth = {
    width: '100%'
}

const gridCenterAlign = {
    textAlign: 'center',
    top: '80px'
}

const gridLeftAlign =  {
    textAlign: 'left',
    top: '100px'
}

export { floatLeft, floatRight, fullWidth, gridCenterAlign, gridLeftAlign, hidden, rowTopMargin, slideBackground, visible, Content, ContentCenter, DiveInn, H2, H3, Home, Prizes, Register, Success };