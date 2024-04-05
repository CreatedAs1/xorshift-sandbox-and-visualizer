/**
 * Microsoft MakeCode port of Lordpoint's xorshift algorithim.
 * Full program and description found at: https://github.com/CreatedAs1/xorshift-sandbox-and-visualizer/tree/master
 */
let state0: number; // SEED - change these to affect the apparent randomness of the outcome
let state1: number; // SEED - change these to affect the apparent randomness of the outcome
/**
 * Different initial seed values will dramatically affect the outcome. The default values, 1 & 2
 * for state0 and state1 respectively, will produce a pattern in the visualizer.
 * A pattern becomes visible when the algorithm starts to repeat itself. If you use 12 & 23, 
 * in contrast, there is no perceptible pattern.
 */
/**
 * Custom bocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Random {
    /**
     * Generates a number using XORSHIFT
     */
    //% block
    export function xorshift(): number {
        let s1 = state0;
        let s0 = state1;
        state0 = s0;
        /**
         * SHIFTS - Just as with the seed values, the shift values (23, 17, and 26 here) must be 
         * carefully chosen to lengthen the algorithm's period (the number of iterations before you 
         * encounter repetition). Try changing these to see how the outcome is affected.
         */
        s1 ^= s1 << 23;  // SHIFT
        s1 ^= s1 >> 17;  // SHIFT
        s1 ^= s0;
        s1 ^= s0 >> 26;  // SHIFT
        state1 = s1;
        return state0 + state1;
    }
    /**
     * Changes the seed
     */
    //% block
    export function changeSeed(seed0: number, seed1: number): void {
        state0 = seed0;
        state1 = seed1;
    }
}
