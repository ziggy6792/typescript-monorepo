
export const revalidate = 0;
export default async function SSR() {
  const time = new Date().toISOString();
  return (
    <div>
      <h1>SSR {time}</h1>
    </div>
  );
}
