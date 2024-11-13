import React from "react";

const TrackList = ({ tracks, onDelete, onPlay }) => {
  return (
    <div>
      <h2>Track List</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <p>
              {track.title} by {track.artist}
            </p>
            <button onClick={() => onPlay(track)}>Play</button>
            <button onClick={() => onDelete(track._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
