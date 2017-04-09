function aritGeo(arr){
	    let minRatio = 1/0;
        let maxRatio = -1/0;
        let minDiff  = 1/0;
        let maxDiff  = -1/0;
        let epsilon  = 0.000001;
        let i;
        let ratio;
        let diff;

    if (arr.length <= 2) {
        return;
    }

    for (i = 1; i < arr.length; ++i) {
        diff  = arr[i] - arr[i - 1];
        ratio = arr[i] / arr[i - 1];
        minDiff  = Math.min(diff, minDiff);
        maxDiff  = Math.max(diff, maxDiff);
        minRatio = Math.min(ratio, minRatio);
        maxRatio = Math.max(ratio, maxRatio);
    }

    if (Math.abs(minDiff - maxDiff) < epsilon) {
        return "Arithmetic";
    }

    if (Math.abs(minRatio - maxRatio) < epsilon) {
        return "Geometric";
    }

    return;
}