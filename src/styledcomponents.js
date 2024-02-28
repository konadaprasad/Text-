import styled from 'styled-components'

export const Maincontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
  padding: 20px;
`
export const InnerCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1b1c22;
  height: 500px;
  width: 60%;
  padding: 20px;
`
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 500px;
`
export const Cont1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  height: 400px;
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  border: solid 1px #f8fafc;
  padding: 30px;
`

export const Heading = styled.h1`
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
`
export const Image = styled.img`
  height: 300px;
  width: 300px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 20px;
  color: ${props => (props.item1 ? '#faff00' : '#f1f5f9')};
`
export const Button1 = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.item2 ? '#faff00' : '#f1f5f9')};
  margin-right: 20px;
`
export const Button2 = styled.button`
  background-color: transparent;
  margin-right: 20px;
  border: none;
  color: ${props => (props.item3 ? '#faff00' : '#f1f5f9')};
`
export const Cont2 = styled.ul`
  display: flex;
  flex-direction: row;
  border-bottom: 1px;
`
export const Placeholder = styled.textarea`
  color: #ffffff;
  font-size: 20px;
  font-weight: ${props => (props.name1 ? 'bold' : 'normal')};
  font-style: ${props => (props.name2 ? 'italic' : 'normal')};
  text-decoration: ${props => (props.name3 ? 'underline' : 'normal')};
  background-color: transparent;
  border: none;
  outline: none;
`
