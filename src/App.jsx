
import { useState } from 'react'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winner = calculateWinner(board)

  function handleClick(index) {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'

    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }

  const isDraw = !winner && board.every(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">

      <div className="w-full max-w-md text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
          Tic <span className="text-purple-400">Tac</span> Toe
        </h1>

        <p className="text-gray-300 mb-8">
          Challenge your friend and have fun!
        </p>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold text-white mb-6">
            {winner
              ? `Player ${winner} Wins! 🎉`
              : isDraw
                ? "It's a Draw! 🤝"
                : `Player ${isXNext ? 'X' : 'O'}'s Turn`}
          </h2>

          <div className="grid grid-cols-3 gap-3">

            {board.map((value, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="aspect-square rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-5xl font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className={value === 'X' ? 'text-cyan-400' : 'text-pink-400'}>
                  {value}
                </span>
              </button>
            ))}

          </div>

          <button
            onClick={resetGame}
            className="mt-8 w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 transition-colors"
          >
            Restart Game
          </button>

        </div>

        <p className="text-gray-400 text-sm mt-6">
          Made with React & Tailwind CSS
        </p>

      </div>
    </div>
  )
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a]
    }
  }

  return null
}

export default App
