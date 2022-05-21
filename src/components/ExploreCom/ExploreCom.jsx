import styled from 'styled-components';
import CardPending from '../Card/CardPending';

export default function ExploreCom(){
  return(
    <div style={{display: 'flex', justifyContent:'space-between'}}>
    <CardPending/>
    <CardPending/>
    <CardPending/>

    </div>
  )
}