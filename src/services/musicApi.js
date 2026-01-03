export async function fetchSaavnSongs(query = "arijit") {
  const res = await fetch(
    `https://saavn.sumit.co/api/search/songs?query=${encodeURIComponent(query)}&limit=10`
  );

  const json = await res.json();

  return json.data.results.map((s) => ({
    id: s.id,
    title: s.name || s.title,
    artist: s.artists?.primary?.[0]?.name || "Unknown",
    duration: s.duration,
    url: s.downloadUrl?.[s.downloadUrl.length - 1]?.url,
  }));

}


