/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const InputRoot = styled.div``

export const Label = styled.label`
  display: block;
  margin: 8px 0;
`

export const Line = styled.span`
        background-color: red;
         height: 2px;
         width: 0;
         display:block;
         transition: all .3s;
         position: relative;
         top: -2px;
         border-radius: 4px;
`

export const Input = styled.input`
        border: 0;
        border-radius: 4px;
        color: #fff;
        height: 50px;
        width: 100%;
        line-height: 50px;
        padding: 0 20px 0;
         border: none;
         outline: none;
         background-color: #1e1e1e;
         caret-color: white;
         color: #fff;
         font-size: 18px;

         &:focus {
             + ${Line}{
                 background-color: red;
                 width: 100%;
                 background-position:left bottom;
             }
         }

         &:not(:placeholder-shown) +  ${Line} {

              width: 100% !important;

         }
`