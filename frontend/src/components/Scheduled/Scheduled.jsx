import styled from 'styled-components';
import CardScheduled from '../Card/CardScheduled';

export default function Scheduled(){
  return(
    <div style={{display: 'flex', justifyContent:'space-between'}}>
    <CardScheduled/>
    <CardScheduled/>
    <CardScheduled/>
    </div>
  )
}