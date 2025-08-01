export const formatDuration = (seconds: string) => {
    const mins = Math.floor(parseInt(seconds) / 60);
    return `${mins}m`;
  };
  