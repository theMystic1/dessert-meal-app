export async function getData() {
  const res = await fetch(`${process.env.JSON_URL}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    throw new Error("Failed to parse JSON");
  }
}
