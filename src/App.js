import { useEffect, useState } from "react";

export default function App() {
  const [column, setColumn] = useState(3);
  const [row, setRow] = useState(10);
  const [level, setLevel] = useState("easy");
  const MapTile = () => {
    return (
      <div
        style={{
          height: 20,
          width: 20,
          backgroundColor: "black",
          margin: 0,
          float: "left",
          border: "1px solid white",
        }}
      />
    );
  };

  const TileLine = ({ column }) => {
    const [columnData, setColumnData] = useState([]);
    useEffect(() => {
      let bowl = [];
      for (let i = 0; i < column; i++) {
        bowl.push(<MapTile />);
      }
      setColumnData(bowl);
    }, [column]);

    return (
      <div style={{ height: 22 }}>
        {columnData.map(value => {
          return value;
        })}
      </div>
    );
  };

  const MakeRow = ({ rowTile }) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
      let bowl = [];
      for (let i = 0; i < rowTile; i++) {
        bowl.push(<TileLine column={column} />);
      }
      setRowData(bowl);
    }, [rowTile]);

    return rowData.map(value => {
      return value;
    });
  };

  const SettingMap = () => {
    const selectLevel = e => {
      switch (e.target.value) {
        case "easy":
          setColumn(4);
          setRow(10);
          return setLevel("easy");
        case "normal":
          setColumn(6);
          setRow(12);
          return setLevel("normal");
        case "hard":
          setColumn(8);
          setRow(14);
          return setLevel("hard");
        case "boss":
          setColumn(10);
          setRow(16);
          return setLevel("boss");
      }
    };

    return (
      <select value={level} onChange={selectLevel}>
        <option value={"easy"}>4 x 10</option>
        <option value={"normal"}>6 x 12</option>
        <option value={"hard"}>8 x 14</option>
        <option value={"boss"}>10 x 16</option>
      </select>
    );
  };

  return (
    <>
      <SettingMap />
      <MakeRow rowTile={row} />
    </>
  );
}
