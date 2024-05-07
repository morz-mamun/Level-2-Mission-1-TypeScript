{
  // generic type with interface

  interface Developer<X, Y, Z = null> {
    // this is generic type
    name: string;
    computer: X;
    smartWatch: Y;
    bike?: Z;
  }

  interface Computer {
    brand: string;
    model: string;
    releaseYear: number;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<Computer, EmilabWatch> = {
    name: "Morshed",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const RichDeveloper: Developer<Computer, AppleWatch, YamahaBike> = {
    name: "Morshed",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "160cc",
    },
  };
}
