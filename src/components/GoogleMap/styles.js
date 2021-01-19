import styled from 'styled-components'

export const GoogleMapQrapper =styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  iframe{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 30%;
  }
`