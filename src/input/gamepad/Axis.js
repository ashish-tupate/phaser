var Class = require('../../utils/Class');

/**
 * @classdesc
 * [description]
 *
 * @class Axis
 * @memberOf Phaser.Input.Gamepad
 * @constructor
 * @since 3.0.0
 *
 * @param {[type]} pad - [description]
 * @param {integer} index - [description]
 */
var Axis = new Class({

    initialize:

    function Axis (pad, index)
    {
        /**
         * [description]
         *
         * @property {[type]} pad
         * @since 3.0.0
         */
        this.pad = pad;

        /**
         * [description]
         *
         * @property {[type]} events
         * @since 3.0.0
         */
        this.events = pad.events;

        /**
         * [description]
         *
         * @property {integer} index
         * @since 3.0.0
         */
        this.index = index;

        /**
         * Between -1 and 1 with 0 being dead center.
         *
         * @property {float} value
         * @default 0
         * @since 3.0.0
         */
        this.value = 0;

        this.threshold = 0.05;
    },

    /**
     * [description]
     *
     * @method Phaser.Input.Gamepad.Axis#update
     * @since 3.0.0
     *
     * @param {[type]} value - [description]
     */
    update: function (value)
    {
        this.value = value;
    },

    /**
     * Applies threshold to the value and returns it.
     *
     * @method Phaser.Input.Gamepad.Axis#getValue
     * @since 3.0.0
     *
     * @return {[type]} [description]
     */
    getValue: function ()
    {
        var percentage = (Math.abs(this.value) - this.threshold) / (1 - this.threshold);

        if (percentage < 0)
        {
            percentage = 0;
        }

        return percentage * (this.value > 0 ? 1 : -1);
    }

});

module.exports = Axis;
