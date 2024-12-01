import { isSignalRef } from 'my-framework';

function processValue(v) {
    if (isSignalRef(v)) {
        // Handle signal reference
        v.signal.connect(data => {
            console.log("Received signal data:", data);
        });
    } else {
        // Handle regular values
        console.log("Processing regular value:", v);
    }
}

const regularValue = 42;
const signalRef = { signal: { connect: callback => callback("signal data") } };

processValue(regularValue); // Outputs: Processing regular value: 42
processValue(signalRef);    // Outputs: Received signal data: signal data
