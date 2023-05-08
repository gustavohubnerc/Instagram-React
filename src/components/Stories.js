import Story from './Story';

const Stories = () => {
  let storyList = [
    {img: "assets/img/memeriagourmet.svg", text: "memeriagourmet"},
    {img: "assets/img/filomoderna.svg", text: "filomoderna" },
    {img: "assets/img/respondeai.svg", text: "respondeai" },
    {img: "assets/img/wawawicomics.svg", text: "wawaicomics" },
    {img: "assets/img/nathanwpylestrangeplanet.svg", text: "nathanwpylestrageplanet"},
    {img: "assets/img/barked.svg", text: "barked" },
    {img: "assets/img/meowed.svg", text: "meowed" },
    {img: "assets/img/9gag.svg", text: "9gag" }
  ];

  return (
    <div className="stories">
      {storyList.map((s) => (
        <Story key={s.img} img={s.img} text={s.text} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
export default Stories;