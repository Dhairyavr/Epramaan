import web3 from './web3';
import epramaan from './build/epramaan.json';

const instance = new web3.eth.Contract(
  JSON.parse(epramaan.interface), '0xd3d81194114e7e9641d3bec453e6de2487c0ba54');

export default instance;
