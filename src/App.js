import ContentPost from "./Components/ContentPost";

function App() {
  return (
    <div>
      <h1>Just some random Text</h1>
      <div className='contentHolder'>
        <ContentPost text='Max_Neijndorff' link='https://picsum.photos/200/'/>
        <ContentPost text='Henkie'/>
        <ContentPost text='Pablo'/>
      </div>
    </div>
  );
}

export default App;
