export default function gridAdapter(divisor) {
    switch (divisor) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 3;
      case 6:
        return 2;
      case 12:
        return 1;
      default:
        return 0; 
    }
  }
  