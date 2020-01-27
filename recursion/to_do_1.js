function rSigma(val) {
    val = Math.floor(val);
    if (val < 0) {
        return 0;
    }
    if (val == 1) {
        return 1;
    }
    return val + rSigma(val - 1);
}