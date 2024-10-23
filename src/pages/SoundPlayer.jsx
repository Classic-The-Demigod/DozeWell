import Nav from "../components/SoundPlayerUI/Nav";
import SoundFilter from "../components/SoundPlayerUI/SoundFilter";
import SoundList from "../components/SoundPlayerUI/SoundList";


const SoundPlayer = () => {
  return <section className="sound-player-bg w-full max-w-full  h-full">
    <Nav />
    <SoundFilter />
    <SoundList />
  </section>;
}

export default SoundPlayer