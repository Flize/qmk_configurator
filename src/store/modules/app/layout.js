export const layout = {
  manufacturer: 'Azel4231',
  keyboard_name: 'azelus2',
  maintainer: 'Azel4231',
  bootloader: 'atmel-dfu',
  diode_direction: 'COL2ROW',
  features: {
    bootmagic: true,
    command: false,
    console: false,
    extrakey: true,
    mousekey: true,
    nkro: true
  },
  matrix_pins: {
    cols: [
      'F7',
      'F6',
      'F5',
      'F0',
      'F4',
      'F1',
      'D0',
      'D4',
      'D7',
      'B4',
      'B5',
      'B6'
    ],
    rows: ['D3', 'B0', 'B2', 'D2']
  },
  processor: 'atmega32u4',
  url: '',
  usb: {
    device_version: '1.0.0',
    pid: '0x0000',
    vid: '0xFEED'
  },
  layouts: {
    LAYOUT: {
      layout: [
        { matrix: [0, 0], x: 0, y: 1.92 },
        { matrix: [0, 1], x: 1, y: 1.65 },
        { matrix: [0, 2], x: 2, y: 1.03 },
        { matrix: [0, 3], x: 3, y: 0.72 },
        { matrix: [0, 4], x: 4, y: 1.0 },
        { matrix: [0, 5], x: 5, y: 1.14 },

        { matrix: [0, 6], x: 8.5, y: 1.14 },
        { matrix: [0, 7], x: 9.5, y: 1.0 },
        { matrix: [0, 8], x: 10.5, y: 0.72 },
        { matrix: [0, 9], x: 11.5, y: 1.03 },
        { matrix: [0, 10], x: 12.5, y: 1.65 },
        { matrix: [0, 11], x: 13.5, y: 1.92 },

        { matrix: [1, 0], x: 0, y: 2.92 },
        { matrix: [1, 1], x: 1, y: 2.65 },
        { matrix: [1, 2], x: 2, y: 2.03 },
        { matrix: [1, 3], x: 3, y: 1.72 },
        { matrix: [1, 4], x: 4, y: 2.0 },
        { matrix: [1, 5], x: 5, y: 2.14 },

        { matrix: [1, 6], x: 8.5, y: 2.14 },
        { matrix: [1, 7], x: 9.5, y: 2.0 },
        { matrix: [1, 8], x: 10.5, y: 1.72 },
        { matrix: [1, 9], x: 11.5, y: 2.03 },
        { matrix: [1, 10], x: 12.5, y: 2.65 },
        { matrix: [1, 11], x: 13.5, y: 2.92 },

        { matrix: [2, 0], x: 0, y: 3.92 },
        { matrix: [2, 1], x: 1, y: 3.65 },
        { matrix: [2, 2], x: 2, y: 3.03 },
        { matrix: [2, 3], x: 3, y: 2.72 },
        { matrix: [2, 4], x: 4, y: 3.0 },
        { matrix: [2, 5], x: 5, y: 3.14 },

        { matrix: [2, 6], x: 8.5, y: 3.14 },
        { matrix: [2, 7], x: 9.5, y: 3.0 },
        { matrix: [2, 8], x: 10.5, y: 2.72 },
        { matrix: [2, 9], x: 11.5, y: 3.03 },
        { matrix: [2, 10], x: 12.5, y: 3.65 },
        { matrix: [2, 11], x: 13.5, y: 3.92 },

        { matrix: [3, 0], x: 0, y: 0.92 },
        { matrix: [3, 1], x: 4, y: 0 },
        { matrix: [3, 2], x: 3, y: 3.72 },
        { matrix: [3, 3], x: 4, y: 4.72 },
        { matrix: [3, 4], x: 5, y: 4.72 },
        { matrix: [3, 5], x: 6, y: 4.72 },

        { matrix: [3, 6], x: 7.5, y: 4.72 },
        { matrix: [3, 7], x: 8.5, y: 4.72 },
        { matrix: [3, 8], x: 9.5, y: 4.72 },
        { matrix: [3, 9], x: 10.5, y: 3.72 },
        { matrix: [3, 10], x: 9.5, y: 0 },
        { matrix: [3, 11], x: 13.5, y: 0.92 }
      ]
    }
  }
};
