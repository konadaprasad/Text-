import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Maincontainer,
  InnerCont,
  Cont,
  Image,
  Heading,
  Cont1,
  Cont2,
  Button,
  Button1,
  Button2,
  Placeholder,
} from './styledcomponents'

class App extends Component {
  state = {Bold: false, Italic: false, Underline: false}

  toBold = () => {
    this.setState(prevState => ({Bold: !prevState.Bold, ActiveId: 'Bold'}))
  }

  toItalic = () => {
    this.setState(prevState => ({
      Italic: !prevState.Italic,
      ActiveId: 'Italic',
    }))
  }

  toUnderline = () => {
    this.setState(prevState => ({
      Underline: !prevState.Underline,
      ActiveId: 'Underline',
    }))
  }

  render() {
    const {Bold, Italic, Underline} = this.state
    return (
      <Maincontainer>
        <InnerCont>
          <Cont>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Cont>
          <Cont1>
            <Cont2>
              <li>
                <Button data-testid="bold" item1={Bold} onClick={this.toBold}>
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button1
                  data-testid="italic"
                  item2={Italic}
                  onClick={this.toItalic}
                >
                  <GoItalic size={25} />
                </Button1>
              </li>
              <li>
                <Button2
                  data-testid="underline"
                  item3={Underline}
                  onClick={this.toUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button2>
              </li>
            </Cont2>
            <hr />
            <Placeholder
              name1={Bold}
              name2={Italic}
              name3={Underline}
              rows="50"
              cols="30"
            />
          </Cont1>
        </InnerCont>
      </Maincontainer>
    )
  }
}

export default App
