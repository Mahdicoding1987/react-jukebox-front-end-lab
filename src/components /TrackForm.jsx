import React, { useState } from "react";

const TrackForm = ({ onAddTrack }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tracks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, artist }),
      });
      const newTrack = await response.json();
      onAddTrack(newTrack);
    } catch (error) {
      console.error("Error adding track:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Track Title" />
      <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" />
      <button type="submit">Add Track</button>
    </form>
  );
};

export default TrackForm;
