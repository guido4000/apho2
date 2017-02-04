import { h, Component } from "preact";
import style from "./style";

const aphos = [
  "Life is short. The sooner a man begins to enjoy his wealth the better.",
  "Every advance in civilization has been denounced as unnatural while it was recent.",
  "There is little friendship in the world, and least of all between equals.",
  "Only fools and charlatans know and understand everything.",
  "Be careful what you pretend to be because you are what you pretend to be.",
  "Hope for pleasure is almost as enjoyable as the pleasure itself.",
  "Shallow men believe in luck. Strong men believe in cause and effect.",
  "Necessity is the mother of invention.",
  "There is music you never hear unless you play it yourself.",
  "Laughter is the antidote to existential pain",
  "The only way to fight nostalgia is to listen to somebody else's nostalgia",
  "For every minute you are angry you lose sixty seconds of happiness.",
  "Folks are usually about as happy as they make their minds up to be.",
  "One day, in retrospect, the years of struggle will strike you as the most beautiful.",
  "Nothing changes your opinion of a friend so surely as success - yours or his.",
  "Most women are so artificial that art leaves them indifferent.",
  "We think very few people sensible except those who are of our opinion.",
  "The best time for you to hold your tongue is the time you feel you must say something or bust."
];

const currentApo = aphos[Math.floor(Math.random() * aphos.length)];

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>{currentApo}</h1>

      </div>
    );
  }
}
