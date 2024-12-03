import React from 'react';

export default function VideoEmbed({ videoId }) {
  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Haven Workspace Video"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
      />
    </div>
  );
}