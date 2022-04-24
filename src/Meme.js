const Meme = () => {
    function handleClick(e){
        e.preventDefault()
        fetch()
    }
  return (
    <form>
      <div className="memecontent">
        <input type="text" className="top" />
        <input type="text" className="bottom"/>
      </div>
      <button onClick={handleClick}>Generate Meme 😎</button>
    </form>
  );
};

export default Meme;
