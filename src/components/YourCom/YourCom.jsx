import styled from 'styled-components';
import CardDiscovery from '../Card/CardDiscovery';

export default function YourCom(){
  return(
    <div style={{display: 'flex', justifyContent:'space-between'}}>
    <CardDiscovery/>
    <CardDiscovery/>
    <CardDiscovery/>
    <CardDiscovery/>
    </div>
  )
}