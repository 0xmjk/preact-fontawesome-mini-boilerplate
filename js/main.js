import { h, render } from 'preact';
import './main.css'
import Hello from "./components/Hello.js";
import TinyFontAwesomeIcon from "./components/TinyFontAwesomeIcon.js";
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub.js'
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify.js'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter.js'

render(<div>
    <Hello />,
    Boilerplate by <a href="https://github.com/0xmjk" target="_blank">
      <TinyFontAwesomeIcon icon={faGithub}/> /0xmjk
    </a>
    &nbsp;<a href="https://twitter.com/0xmjk" target="_blank">
      <TinyFontAwesomeIcon icon={faTwitter}/> @0xmjk
    </a>
    <br/>
  </div>, document.body);
