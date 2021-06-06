const perikopa2021 = [
  { id: '1', andalana: 'MANEHO NY MAHA ANDRIAMANITRA AZY NY TOMPO' },
  { id: '2', andalana: "MAMPIORINA NY MINO NY TENIN'ANDRIAMANITRA" },
  { id: '3', andalana: 'MAMPIORINA NY MINO NY FIZAHAN-TOETRA' },
  { id: '4', andalana: "MAMPIORINA NY MINO NY FANAVOTAN'I KRISTY" },
  { id: '5', andalana: "MAMPIORINA NY MINO NY HERIN 'NY FANAHY MASINA" },
  { id: '6', andalana: 'ANORENANA NY MAHA KRISTIANINA NY FINOANA' },
  { id: '7', andalana: "MIORENA AMIN'NY ANTSON'I TOMPO" },
  { id: '8', andalana: "MIORENA AMIN'NY ASA TSARA" },
  { id: '9', andalana: "MIORENA AO AMIN'NY TOMPO AMIN'NY BATISA" },
  { id: '10', andalana: "MIORENA AO AMIN'NY TOMPO AMIN'NY FANASANY" },
  { id: '11', andalana: "TAFATOETRA NY FON'IZAY MIANDRY NY TOMPO" },
  { id: '12', andalana: "MINOA NY FIFALIANA AO AMIN'NY TOMPO" },
]

export const getAndalana = (numberMonth: number) => {
  return perikopa2021[numberMonth]
}
