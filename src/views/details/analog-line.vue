<template>
    <div class="analog-line-container flex-shrink-1 flex-grow-1 d-flex position-relative">
        <div id="svg-container" class="flex-shrink-1 flex-grow-1">
          <svg  id="svg-dom" xmlns="http://www.w3.org/2000/svg" class="img-fluid" xmlns:xlink="http://www.w3.org/1999/xlink" width="86%" height="100%" viewBox="0 0 2800 1500">
            <defs>
                <!--15米电杆-->
                <g id="telegraph-pole">
                    <circle cx="20" cy="20" r="20" fill="none" stroke="black" stroke-width="3" />
                    <circle cx="20" cy="20" r="15" fill="none" stroke="black" stroke-width="3" />
                    <circle cx="20" cy="20" r="10" fill="none" stroke="black" stroke-width="3" />
                </g>
                <!--电表箱-->
                <g id="metersBox" class="boxes">
                    <rect width="80" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="80" y1="30" y2="30" stroke="black" />
                    <line x1="40" x2="40" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="20" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="60" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="40" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                </g>
                <!--变压器-->
                <g id="transformer">
                    <line x1="30" x2="30" y1="0" y2="20" stroke="black" stroke-width="2" />
                    <circle cx="30" cy="40" r="30" fill="none" stroke="black" stroke-width="2" />
                    <circle cx="30" cy="70" r="30" fill="none" stroke="black" stroke-width="2" />
                    <line x1="30" x2="30" y1="90" y2="110" stroke="black" stroke-width="2" />
                </g>
                <!--JP柜-->
                <g id="jp-tank">
                    <rect width="120" height="120" y="10" fill="none" stroke="black" stroke-width="2" />
                    <line x1="60" x2="60" y1="0" y2="30" stroke="black" stroke-width="2" />
                    <polygon fill="none" stroke="black" stroke-width="2" points="60,30 65,40 55,40 " />
                    <path fill="none" stroke="black" stroke-width="2" d="M60,40 L60,70 M20,70 L100,70 M35,70 L35,96 M85,70 L85,96 M35,105 L35,150 M85,105 L85,150"
                    />
                    <polygon fill="none" stroke="black" stroke-width="2" points="35,105 40,96 30,96" />
                    <polygon fill="none" stroke="black" stroke-width="2" points="85,105 90,96 80,96" />
                    <rect width="6" height="12" x="57" y="50" fill="none" stroke="black" stroke-width="2" />
                    <rect width="6" height="12" x="32"  y="82" fill="none" stroke="black" stroke-width="2" />
                    <rect width="6" height="12" x="82"  y="82" fill="none" stroke="black" stroke-width="2" />
                </g>
                <!--双箱子子加个杆-->
                <!-- <g id="boxes-pole">
                    <use x="0" y="0" class="box-0" v-on:click="showBoxDialog(1,0)" xlink:href="#metersBox" />
                    <use x="100" y="0" class="box-1" v-on:click="showBoxDialog(0,1)" xlink:href="#metersBox" />
                    <use x="70" y="120" xlink:href="#telegraph-pole" />
                    <polyline fill="none" stroke="black" stroke-width="2" points="40,60 90,120 100,60" />
                </g> -->
                <!--杆+表箱-->
                <!-- <g id="pole-boxes">
                    <use x="0" y="106" class="box-0" v-on:click="showBoxDialog(1,0)" xlink:href="#metersBox" />
                    <use x="100" y="106" class="box-1" v-on:click="showBoxDialog(0,1)" xlink:href="#metersBox" />
                    <use x="70" y="0" xlink:href="#telegraph-pole" />
                    <polyline fill="none" stroke="black" stroke-width="2" points="40,100 90,40 100,100" />
                </g> -->
            </defs>
            <g id="boxes-pole-0" transform="translate(0,500)" fill="green"  class="boxes-0">
                <g class="box-0"  v-on:click="showBoxDialog(0,0)" transform="translate(0,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(0,1)"  transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                 <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>06</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-1" transform="translate(260,500)" fill="green"   class="boxes-1">
                <g class="box-0" v-on:click="showBoxDialog(1,0)"   transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(1,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>05</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-2" transform="translate(520,500)" fill="green"  class="boxes-2">
                  <g class="box-0" v-on:click="showBoxDialog(2,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(2,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>04</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-3" transform="translate(780,500)" fill="green"  class="boxes-3">
                  <g class="box-0" v-on:click="showBoxDialog(3,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(3,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>03</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-4" transform="translate(1040,500)" fill="green"  class="boxes-4">
                   <g class="box-0" v-on:click="showBoxDialog(4,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(4,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>02</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <path stroke="black" stroke-width="2" d="M130,640 L350,640 M390,640 L610,640
             M650,640 L870,640 M910,640 L1130,640 
             M1170,640 L1360,640 M1410,640 L1610,640 M1650,640 L1870,640
             M1910,640 L2130,640 M2170,640 L2390,640 M2430,640 L2650,640
             M2410,620 L2410,460 M2410,420 L2410,340 M2410,300 L2410,140
             M2430,120 L2650,120 M2390,120 L2170,120 M2130,120 L1910,120
             M2410,660 L2410,900 M2410,940 L2410,1100 M2410,1140 L2410,1250
             M2390,1270 L2190,1270 M2150,1270 L1980,1270 
             M2430,920 L2650,920 M2390,920 L2180,920 M2140,920 L1920,920
             M1880,920 L1650,920 M1610,920 L1390,920 M1350,920 L1130,920
             M1090,920 L870,920 M830,920 L610,920 M570,920 L350,920
             M1630,660 L1630 900" />
            <use x="1325" y="490" xlink:href="#jp-tank" />
            <use x="1355" y="380" xlink:href="#transformer" />
            <g id="boxes-pole-5" transform="translate(1520,500)" fill="green"  class="boxes-5">
                  <g class="box-0" v-on:click="showBoxDialog(5,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(5,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                  <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>01</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-6" transform="translate(1780,500)" fill="green"  class="boxes-6">
                   <g class="box-0" v-on:click="showBoxDialog(6,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(6,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                 <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>02</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-7" transform="translate(2040,500)" fill="green"  class="boxes-7">
                  <g class="box-0" v-on:click="showBoxDialog(7,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(7,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                 <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>03</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-8" transform="translate(2300,500)" fill="green"  class="boxes-8">
                  <g class="box-0" v-on:click="showBoxDialog(8,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(8,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" v-on:mouseover="setMouseOver(8)" v-on:mouseout="setMouseOut(8)" />
                <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>04</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <g id="boxes-pole-9" transform="translate(2560,500)" fill="green"  class="boxes-9">
                   <g class="box-0" v-on:click="showBoxDialog(9,0)" transform="translate(0,0)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(9,1)" transform="translate(120,0)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0" y="-28" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="-6" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="120" xlink:href="#telegraph-pole" />
                 <g transform="translate(80,170)">
                    <rect width="60" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='30' y='28' text-anchor="middle" font-size='22' fill='white'>05</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,60 110,120 120,60" />
            </g>
            <use x="2390" y="420" fill="green"  class="boxes-10" xlink:href="#telegraph-pole" />
            <use x="2390" y="300" fill="green"  class="boxes-11" xlink:href="#telegraph-pole" />
            <g id="boxes-pole-10" transform="translate(2560,100)" fill="green"  class="boxes-10">
                  <g class="box-0" v-on:click="showBoxDialog(10,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(10,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                 <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>04-03-01</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <!-- <use x="2140" y="106" fill="green"  class="boxes-10" xlink:href="#pole-boxes" /> -->
            <g id="boxes-pole-11" transform="translate(2300,100)" fill="green"  class="boxes-11">
                <g class="box-0" v-on:click="showBoxDialog(11,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(11,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                 <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>04-03</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-12" transform="translate(2040,100)" fill="green"  class="boxes-12">
                 <g class="box-0" v-on:click="showBoxDialog(12,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(12,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                 <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>04-04</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-13" transform="translate(1780,100)" fill="green"  class="boxes-13">
                 <g class="box-0" v-on:click="showBoxDialog(13,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                  <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>04-05</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40" />
            </g>
            <g id="boxes-pole-14" transform="translate(2560,900)" fill="green"  class="boxes-14">
                <g class="box-0" v-on:click="showBoxDialog(14,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(14,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-04</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-15" transform="translate(2300,900)" fill="green"  class="boxes-15">
                 <g class="box-0" v-on:click="showBoxDialog(15,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(15,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-03</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-16" transform="translate(2050,900)" fill="green"  class="boxes-16">
                <g class="box-0" v-on:click="showBoxDialog(16,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(16,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-02</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-17" transform="translate(1790,900)" fill="green"  class="boxes-17">
                <g class="box-0" v-on:click="showBoxDialog(17,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(17,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-01</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-18" transform="translate(1520,900)" fill="green"  class="boxes-18">
                <g class="box-0" v-on:click="showBoxDialog(18,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(18,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-19" transform="translate(1260,900)" fill="green"  class="boxes-19">
                 <g class="box-0" v-on:click="showBoxDialog(19,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(19,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-01</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-20" transform="translate(1000,900)" fill="green"  class="boxes-20">
                 <g class="box-0" v-on:click="showBoxDialog(20,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(20,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-02</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-21" transform="translate(740,900)" fill="green"  class="boxes-21">
                <g class="box-0" v-on:click="showBoxDialog(21,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(21,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-03</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <g id="boxes-pole-22" transform="translate(480,900)" fill="green"  class="boxes-22">
                <g class="box-0" v-on:click="showBoxDialog(22,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(22,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole" />
                <g transform="translate(60,-50)">
                    <rect width="100" height="40" rx="4" ry="4" fill="#00706b"></rect>
                    <text x='50' y='28' text-anchor="middle" font-size='22' fill='white'>01-01-04</text>
                </g>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
            </g>
            <use x="310" y="900" fill="green"  class="boxes-26" xlink:href="#telegraph-pole" />
            <use x="2390" y="1100" fill="green"  class="boxes-24" xlink:href="#telegraph-pole" />
            <use x="2390" y="1250" fill="green"  class="boxes-25" xlink:href="#telegraph-pole" />
            <use x="2150" y="1250" fill="green"  class="boxes-26" xlink:href="#telegraph-pole" />
            <g id="boxes-pole-23" transform="translate(1850,1250)" fill="green"  class="boxes-27">
                <g class="box-0" v-on:click="showBoxDialog(23,0)" transform="translate(0,100)">
                   <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <g class="box-1" v-on:click="showBoxDialog(23,1)" transform="translate(120,100)">
                    <rect width="100" height="60" fill="green" class="box-back" stroke="black" stroke-width="2px" />
                    <line x1="0" x2="100" y1="30" y2="30" stroke="black" />
                    <line x1="50" x2="50" y1="0" y2="30" stroke="black" />
                    <text class="meter-no" x="25" y="22" font-size="20" fill="white" text-anchor="middle">
                        6
                    </text>
                    <text class="meter-max-no" x="75" y="22" font-size="20" fill="white" text-anchor="middle">
                        9
                    </text>
                    <text class="box-no" x="50" y="52" font-size="20" fill="white" text-anchor="middle">
                        54
                    </text>
                    <text class="box-info-v" x="0"  y="82" font-size="20">
                        U:0V
                    </text>
                    <text class="box-info-a" x="0" y="106" font-size="20">
                        I:0A
                    </text>
                </g>
                <use x="90" y="0" xlink:href="#telegraph-pole"/>
                <polyline fill="none" stroke="black" stroke-width="2" points="50,100 110,40 120,100" />
                </g>
        </svg>
        </div>
        <div v-if="showDialog" class="meter-dialog position-absolute d-flex flex-column shadow-lg">
            <div class="dia-header d-flex justify-content-center">
              <div class="flex-grow-1">{{selectMeterBoxNo}}#电表箱</div>
              <div class="close-icon align-self-right" v-on:click.stop="showDialog=0"><span class="icon-close iconfont icon-htmal5icon21"></span></div>
            </div>
            <div class="dia-body flex-grow-1 d-flex  flex-wrap-reverse">
                <meter-item  v-for="m in selectBoxMaxMetersNo"  v-bind:meterData="selectMeters[m-1]" :key="m" v-bind:meterOrder="m" class="col-4"></meter-item>
            </div>
        </div>
    </div>
</template>
<script>
import { events } from "@/assets/scripts/events";
import { boxOrder } from "@/assets/scripts/meters-data";
import meterItem from "@/components/details/Meter-Item";
export default {
  name: "line-loss",
  components: {
    meterItem
  },
  data: function() {
    return {
      boxResNoMap: new Map(),
      boxInfoMap: "",
      showDialog: 0,
      selectMeterBoxNo: 0,
      selectMeters: "",
      selectBoxMaxMetersNo: ""
    };
  },
  created: function() {
    this.getAreaBoxesProperties();
    this.getJPData();
  },
  mounted: function() {
    this.setSVGSize();
    this.setResizeListener();
  },
  watch: {
    boxInfoMap: function(newVal) {
      this.getBoxInfo();
    }
  },
  methods: {
    setResizeListener: function() {
      window.addEventListener(
        "resize",
        function() {
          this.setSVGSize();
        }.bind(this)
      );
    },
    setSVGSize: function() {
      let svgContainer = document.getElementById("svg-container");
      let svgDom = document.getElementById("svg-dom");
      svgDom.style.width = svgContainer.clientWidth;
      svgDom.style.height = svgContainer.clientHeight;
    },
    getSelectMeters: function(boxId) {
      let boxIdStr = this.boxResNoMap.get(boxId);
      console.log(boxIdStr);
      events.TQ_request(
        events.METER_PROPERTIES,
        {
          UIDstr: events.USER_ID,
          BXIDstr: boxIdStr
        },
        responseData => {
          console.log("获取的响应数据：" + JSON.stringify(responseData));
          this.selectMeters = responseData;
        }
      );
    },
    showBoxDialog: function(index, order) {
      let box = document.getElementById("boxes-pole-" + index).childNodes[
        order
      ];
      this.selectBoxMaxMetersNo = parseInt(box.childNodes[4].textContent);
      this.selectMeterBoxNo = box.childNodes[5].textContent;
      console.log(this.selectMeterBoxNo);
      this.getSelectMeters(this.selectMeterBoxNo);
      console.log("showDia*********************");
      this.showDialog = 1;
    },
    getBoxInfo: function() {
      boxOrder.forEach((boxes, index) => {
        boxes.forEach((box, order) => {
          this.setBoxInfo(box, index, order);
        });
      });
    },
    setBoxInfo: function(boxOrder, index, order) {
      this.setBoxNo(boxOrder, index, order);
      let boxInfo = this.boxInfoMap.get(boxOrder);
      if (!boxInfo) {
        return;
      }
      let relBox = this.getRelBox(boxInfo);
      console.log(order * 2 + 1);
      let box = document.getElementById("boxes-pole-" + index).childNodes[
        order
      ];
      if (relBox.DY && box && box.childNodes[order]) {
        box.childNodes[0].style.fill = "red";
        box.childNodes[6].style.fill = "red";
        box.childNodes[6].textContent = relBox.DY;
        box.childNodes[7].style.fill = "red";
        box.childNodes[7].textContent = relBox.DL;
      }
    },
    setBoxNo: function(boxOrder, index, order) {
      let box = document.getElementById("boxes-pole-" + index).childNodes[
        order
      ];

      box.childNodes[5].textContent = boxOrder;
      let boxInfo = this.boxInfoMap.get(boxOrder);
      if (!boxInfo) {
        return;
      }
      let relBox = this.getRelBox(boxInfo);
      box.childNodes[3].textContent = relBox.metersNo;
      box.childNodes[4].textContent = relBox.metersMaxNo
        ? relBox.metersMaxNo
        : 9;
    },
    getRelBox: function(boxInfo) {
      let relInfo = {};
      boxInfo.forEach(info => {
        if (info.id == 0) {
          relInfo.metersMaxNo = info.metersMaxNo;
          relInfo.metersNo = info.metersNo;
        } else if (info.id <= 3) {
          if (info.Value > 0) {
            relInfo.DL = info.code.toUpperCase() + ":" + info.Value + info.dw;
          }
        } else if (info.id <= 6) {
          if (info.Value > 0) {
            relInfo.DY = info.code.toUpperCase() + ":" + info.Value + info.dw;
          }
        }
      });
      return relInfo;
    },
    getJPData: function() {
      //获取JP柜信息
      events.TQ_request(
        events.POWER_CABINET,
        {
          UIDstr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        responseData => {
          console.log(
            "***********获取的JP柜数据：" + JSON.stringify(responseData)
          );
        }
      );
    },
    getAreaBoxesProperties: function() {
      //获取表箱属性
      events.TQ_request(
        events.METER_BOX_PROPERTIES,
        {
          UIDStr: events.USER_ID,
          TaskIDstr: events.AREA_ID
        },
        responseData => {
          console.log("获取的台区表象数据：" + JSON.stringify(responseData));
          this.getBoxInfoMap(responseData);
        }
      );
      setTimeout(() => {
        this.getAreaBoxesProperties();
      }, 60000);
    },
    getBoxInfoMap: function(boxList) {
      let map = new Map();
      let resNoMap = new Map();
      boxList.forEach(box => {
        box.JCX.splice(0, 0, {
          id: 0,
          metersMaxNo: parseInt(box.Hang) * parseInt(box.Lie),
          metersNo: box.DianBiaoShu
        });
        console.log("插入数据后的数据：" + JSON.stringify(box.JCX));
        map.set(box.BXH, box.JCX);
        resNoMap.set(box.BXH, box.TabIDStr);
      });
      this.boxInfoMap = map;
      this.boxResNoMap = resNoMap;
    }
  }
};
</script>
<style scoped>
.charts-select {
  margin: 8px 16px 0 0;
  min-height: 36px;
}
.map-title {
  font-size: 24px;
  font-weight: bold;
  color: #00706b;
  height: 38px;
}
.btn-secondary.active {
  background-color: #00706b !important;
  border-color: #00706b !important;
}
.line-info {
  right: 16px;
  top: 16px;
}
.close-icon {
  float: right;
}
.icon-close {
  font-size: 36px;
}
.dia-header {
  font-size: 36px;
  color: #00706b;
}
.meter-dialog {
  position: absolute;
  left: 60px;
  top: 60px;
  bottom: 60px;
  right: 60px;
  z-index: 999;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
}
.analog-line-container {
  color: white;
}
.analog-header {
  font-size: 24px;
}
.analog-body {
  position: relative;
}
.analog-image {
  width: 100%;
}
</style>
