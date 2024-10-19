/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '300': '19rem',
        '150': '9.4rem'
      },
      fontSize: {
        '11': ['0.7rem'],
        '10': ['0.63rem'],
        '9': ['0.565rem'],
        '8': ['0.5rem'],
        '6': ['0.38rem'],
        '4': ['0.25rem'],
  
      },
      colors: {
        mainBackground: '#F2F0F9',
        white: '#fff',
        black: '#000',
        darkColor: '#041116',
        brandColor: '#09242E',
        secondBrandColor : '#1A3645',
        mainBorder: '#DBEDF5',
        pagesBorderColor: '#EAEBF0',
        primaryColor: '#A1A1A1',
        secondaryColor: '#474747',
        firstColor: '#26252B',
        secondColor: '#4A4646',
        thirdColor: '#A0A0A033',
        fourthColor: '#667085',
        fifthColor: '#F4F5F6',
        sixthColor: '#333333',
        seventhColor: '#C3C2CA',
        eightColor: '#F0F7FF',
        linkColor: '#478FB4',
        buttonColor : '#5F6D7E',
        mainColor : '#5F6D7E',
        textColor: '#91969B',
        todoColor: '#9FA2B2',
        doneColor: '#00B884',
        rejectColor: '#F34E4E',
        overlayDoneColor: '#00b88421',
        inprogressColor: '#478FB4',
        overlayInprogressColor: '#DBEDF5',
        milestoneProgress : '#004797'
      },
  
    },
  },
  plugins: [],
}