import styled from "styled-components";

export const Estilos = styled.div`
 .estatico {
  width: 100%;
  height: 80px;
	max-width: 1000px;
	margin: 30px auto 100px auto;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
  display: flex;
 }
 .cajas {
  margin:20px;
  height: 70px;
  width: 18 3-0px;
  border:1px solid black;
  font-size: 20px;
  text-align: center;
  font-style: sans-serif;
  padding: 10px;
 }
 .cajasPaises {
  margin:20px;
  height: auto;
  width: auto;
  border:1px solid black;
  font-size: 18px;
  font-style: sans-serif;
  padding: 10px;
 }
 .contenido{
  width: 100%;
	max-width: 1000px;
	margin: 30px auto 100px auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
}
  .titulos{
    text-align:center;
    font-family: sans-serif ;
    padding:30px;
    text-transform: uppercase;
  }
  .botones{
    text-align:center;
  }
 }
`;