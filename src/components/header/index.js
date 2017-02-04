import { h, Component } from "preact";
import { Link } from "preact-router";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>daily quote</h1>

      </header>
    );
  }
}
// <nav>
//   <Link href="/">Home</Link>
//   <Link href="/profile">Me</Link>
//   <Link href="/profile/john">John</Link>
// </nav>
