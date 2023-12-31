"use client"
import React, { useState } from 'react';

function EnergyLoadCalculator() {
  const [tubeLight, setTubeLight] = useState('')
  const [energySaver, setEnergySaver] = useState('')
  const [ledBlub, setLedBlub] = useState('')
  const [fan, setFan] = useState('')
  const [computer, setComputer] = useState('')
  const [tvs, setTVs] = useState('')
  const [ledTv, setLedTV] = useState('')
  const [refrigerator, setRefrigerator] = useState('')
  const [freezer, setFreezer] = useState('')
  const [washingMachine, setWashingMachine] = useState('')
  const [waterPump, setWaterPump] = useState('')
  const [iron, setIron] = useState('')
  const [splitACOne, setSplitACOne] =useState('')
  const [spliteACTwo, setSpliteACTwo] =useState('')
  const [splitACThree, setSplitACThree] =useState('')
  const [splitACFour, setSplitACFour] =useState('')
  const [inverterACOne, setInverterACOne] =useState('')
  const [inverterACTwo, setInverterACTwo] =useState('')
  const [inverterACThree, setInverterACThree] =useState('')
  const [energyGenerated, setEnergyGenerated] = useState(0);

  const calculateEnergyGenerated = () => {
    // Simple energy generation calculation formula
    const totalTubeLight = tubeLight * 40;
    const totalEnergySaver = energySaver * 25;
    const totalLedBlub = ledBlub * 7
    const totalFan = fan * 100
    const totalTvs = tvs * 250
    const totalledTv = ledTv * 50
    const totalComputer = computer * 250
    const totalRefrigerator = refrigerator * 350
    const totalFreezer = freezer * 350
    const totalWashingMachine = washingMachine * 800
    const totalWaterPump = waterPump * 700
    const totalIron = iron * 1000
    const totalSplitACone = splitACOne * 1800
    const totalSplitACtwo = spliteACTwo * 2400
    const totalSplitACthree = splitACThree * 3000
    const totalSplitACfour = splitACFour * 7500
    const totalInverterACone = inverterACOne * 1000
    const totalInverterACtwo = inverterACTwo * 1500
    const totalInverterACthree = inverterACThree * 2000
    const energyGenerated = totalTubeLight + totalEnergySaver + totalLedBlub + totalFan + totalTvs + totalledTv + totalComputer + totalRefrigerator + totalFreezer +
     totalWashingMachine + totalWaterPump + totalIron + totalSplitACone + totalSplitACtwo + totalSplitACthree + totalSplitACfour + totalInverterACone + totalInverterACtwo + totalInverterACthree;
     const totalEngery = parseInt(energyGenerated) / 1000;
    setEnergyGenerated(totalEngery);
  };

  return (
    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-8 lg:px-20" data-aos="zoom-in">
        <div className="w-full bg-white py-8 my-4 md:px-12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl">
          <div className="flex place-content-center">
            <h1 className="font-bold text-center lg:text-left text-green-700 uppercase text-3xl">Calculate your energy</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-8">
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Tubelights:
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Tubelight = 40W*"
                value={tubeLight}
                onChange={(e) => setTubeLight(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Energy Saver:
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Energy Saver = 25W*"
                value={energySaver}
                onChange={(e) => setEnergySaver(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of LED Bulb:
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 LED Bulb = 7W*"
                value={ledBlub}
                onChange={(e) => setLedBlub(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Fans
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Fan = 100W*"
                value={fan}
                onChange={(e) => setFan(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of TVs
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 TVs = 250W*"
                value={tvs}
                onChange={(e) => setTVs(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of LED TV 32
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 LED TV 32 = 50W*"
                value={ledTv}
                onChange={(e) => setLedTV(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Computer
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Computer = 250W*"
                value={computer}
                onChange={(e) => setComputer(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Refrigerator
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Refrigerator = 350W*"
                value={refrigerator}
                onChange={(e) => setRefrigerator(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Freezer
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Freezer = 350W*"
                value={freezer}
                onChange={(e) => setFreezer(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Washing Machine
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Washing Machine = 250W*"
                value={washingMachine}
                onChange={(e) => setWashingMachine(e.target.value)}
              />
            </label>

            <label className='px-4 md:px-2 lg:px-2'>
               Water Pump 1 HP
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Water Pump 1 HP = 700W*"
                value={waterPump}
                onChange={(e) => setWaterPump(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Iron
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Iron = 1000W*"
                value={iron}
                onChange={(e) => setIron(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Split AC 1 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Split AC 1 ton = 1800W*"
                value={splitACOne}
                onChange={(e) => setSplitACOne(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Split AC 1.5 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Split AC 1.5 ton = 2400W*"
                value={spliteACTwo}
                onChange={(e) => setSpliteACTwo(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Split AC 2 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Split AC 2 ton = 3000W*"
                value={splitACThree}
                onChange={(e) => setSplitACThree(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Split AC 3.5 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Split AC 3.5 ton = 7500W*"
                value={splitACFour}
                onChange={(e) => setSplitACFour(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Inverter AC 1 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Inverter AC 1 ton = 1000W*"
                value={inverterACOne}
                onChange={(e) => setInverterACOne(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Inverter AC 1.5 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Inverter AC 1.5 ton = 1500W*"
                value={inverterACTwo}
                onChange={(e) => setInverterACTwo(e.target.value)}
              />
            </label>
            <label className='px-4 md:px-2 lg:px-2'>
              No. of Inverter AC 2 ton
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Inverter AC 2 ton = 2000W*"
                value={inverterACThree}
                onChange={(e) => setInverterACThree(e.target.value)}
              />
            </label>
   


            {/* <div>
              <button className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={calculateEnergyGenerated}>Calculate</button>
              {energyGenerated !== null && (
                <div>
                  <p className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'>Energy Generated: {energyGenerated} W</p>
                </div>
              )}
            </div> */}
          </div>
          <div className='justify-center'>
            <div className="px-8 my-2 md:w-1/2 lg:w-2/4">
              <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-700 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline" onClick={calculateEnergyGenerated}> Calculate </button>

              <div>
                <p className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-xl font-semibold'>Energy Generated: {energyGenerated} KW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default EnergyLoadCalculator;
