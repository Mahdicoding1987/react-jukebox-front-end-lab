import React from "react";
import { Link } from "react-router-dom";
import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";

const Home = ({ tracks, setTracks, currentTrack, setCurrentTrack }) => {
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/tracks/${id}`, { method: "DELETE" });
      setTracks(tracks.filter((track) => track._id !== id));
    } catch (error) {
      console.error("Error deleting track:", error);
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <h1>Reactville Jukebox</h1>
      <Link to="/add-track">Add New Track</Link>
      <TrackList tracks={tracks} onDelete={handleDelete} onPlay={handlePlay} />
      {currentTrack && <NowPlaying track={currentTrack} />}
    </div>
  );
};

export default Home;
