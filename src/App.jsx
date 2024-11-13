import React, { useState, useEffect } from "react";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import NowPlaying from "./components/NowPlaying";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Fetch initial track data from the backend
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      const response = await fetch("/api/tracks");
      const data = await response.json();
      setTracks(data);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const handleAddTrack = (newTrack) => {
    setTracks([...tracks, newTrack]);
  };

  const handleDeleteTrack = (id) => {
    setTracks(tracks.filter((track) => track._id !== id));
  };

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <button onClick={() => setFormVisible(true)}>Add New Track</button>
      <TrackList tracks={tracks} onDelete={handleDeleteTrack} onPlay={handlePlayTrack} />
      {isFormVisible && <TrackForm onAddTrack={handleAddTrack} />}
      {currentTrack && <NowPlaying track={currentTrack} />}
    </div>
  );
};

export default App;
