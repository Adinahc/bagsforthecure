import styled from 'styled-components';

const H2 = styled.h2`
  color: #000;
`; 

const Success = styled.span`
  color: green;
`;

const DetailsContentText = styled.span`
  position: relative;
  top: -20px;
`;

const H3 = styled.h3` 
  color: #000;
  font-size: large
  font-weight: bolder;
`;

const homeStyle = {
    backgroundImage: 'url("./imgs/DiveInnCornHole.jpg")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat, repeat',
    width: '100%',
    minHeight: '100vh',
    overflow: 'auto',
};
  
const registerStyle = {
    backgroundImage: 'url("./imgs/CornHoleBoard.jpg")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat, repeat',
    minHeight: '100vh',
    overflow: 'auto',
};
  
const diveInnStyle = {
    backgroundImage: 'url("./imgs/DiveInnLogoBlack.jpg")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat, repeat',
    minHeight: '100vh',
    overflow: 'auto',
};
  
const prizesStyle = {
    backgroundImage: 'url("./imgs/Dive-Inn-Exterior.jpg")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat, repeat',
    minHeight: '100vh',
    overflow: 'auto',
};
  
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
    top: '80px'
}

export { diveInnStyle, floatLeft, floatRight, fullWidth, gridCenterAlign, gridLeftAlign, hidden, homeStyle,  prizesStyle, registerStyle, rowTopMargin, slideBackground, visible, DetailsContentText, H2, H3, Success };