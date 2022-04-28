const Meme = () => {
    function handleClick(e){
        e.preventDefault()
        fetch()
    }

    const arr = ['HI', 'HELLO']
  return (
    <form>
      <div className="memecontent">
        <input type="text" className="top" />
        <input type="text" className="bottom"/>
      </div>
      <button onClick={handleClick}>Generate Meme 😎</button>
      <ul>{arr}</ul>
    </form>
  );
};

export default Meme;
