// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Terminal extends pulumi.CustomResource {
    /**
     * Get an existing Terminal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TerminalState, opts?: pulumi.CustomResourceOptions): Terminal {
        return new Terminal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/terminal:Terminal';

    /**
     * Returns true if the given object is an instance of Terminal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Terminal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Terminal.__pulumiType;
    }

    /**
     * Enable terminal length and width automatically (not work if width or length set to 0)
     */
    public readonly autoSize!: pulumi.Output<number | undefined>;
    /**
     * Enable command line editing
     */
    public readonly editing!: pulumi.Output<number | undefined>;
    public readonly gslbCfg!: pulumi.Output<outputs.TerminalGslbCfg | undefined>;
    public readonly historyCfg!: pulumi.Output<outputs.TerminalHistoryCfg | undefined>;
    /**
     * Set interval for closing connection when there is no input detected (Timeout in minutes, 0 means never timeout, default
     * is 15)
     */
    public readonly idleTimeout!: pulumi.Output<number | undefined>;
    /**
     * Set number of lines on a screen(0 for no pausing) (Number of lines on screen, 0 for no pausing, default is 24)
     */
    public readonly length!: pulumi.Output<number | undefined>;
    public readonly promptCfg!: pulumi.Output<outputs.TerminalPromptCfg | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Set width of the display terminal (Number of characters on a screen line, 0 means infinite, default is 80)
     */
    public readonly width!: pulumi.Output<number | undefined>;

    /**
     * Create a Terminal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TerminalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TerminalArgs | TerminalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TerminalState | undefined;
            resourceInputs["autoSize"] = state ? state.autoSize : undefined;
            resourceInputs["editing"] = state ? state.editing : undefined;
            resourceInputs["gslbCfg"] = state ? state.gslbCfg : undefined;
            resourceInputs["historyCfg"] = state ? state.historyCfg : undefined;
            resourceInputs["idleTimeout"] = state ? state.idleTimeout : undefined;
            resourceInputs["length"] = state ? state.length : undefined;
            resourceInputs["promptCfg"] = state ? state.promptCfg : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["width"] = state ? state.width : undefined;
        } else {
            const args = argsOrState as TerminalArgs | undefined;
            resourceInputs["autoSize"] = args ? args.autoSize : undefined;
            resourceInputs["editing"] = args ? args.editing : undefined;
            resourceInputs["gslbCfg"] = args ? args.gslbCfg : undefined;
            resourceInputs["historyCfg"] = args ? args.historyCfg : undefined;
            resourceInputs["idleTimeout"] = args ? args.idleTimeout : undefined;
            resourceInputs["length"] = args ? args.length : undefined;
            resourceInputs["promptCfg"] = args ? args.promptCfg : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["width"] = args ? args.width : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Terminal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Terminal resources.
 */
export interface TerminalState {
    /**
     * Enable terminal length and width automatically (not work if width or length set to 0)
     */
    autoSize?: pulumi.Input<number>;
    /**
     * Enable command line editing
     */
    editing?: pulumi.Input<number>;
    gslbCfg?: pulumi.Input<inputs.TerminalGslbCfg>;
    historyCfg?: pulumi.Input<inputs.TerminalHistoryCfg>;
    /**
     * Set interval for closing connection when there is no input detected (Timeout in minutes, 0 means never timeout, default
     * is 15)
     */
    idleTimeout?: pulumi.Input<number>;
    /**
     * Set number of lines on a screen(0 for no pausing) (Number of lines on screen, 0 for no pausing, default is 24)
     */
    length?: pulumi.Input<number>;
    promptCfg?: pulumi.Input<inputs.TerminalPromptCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Set width of the display terminal (Number of characters on a screen line, 0 means infinite, default is 80)
     */
    width?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Terminal resource.
 */
export interface TerminalArgs {
    /**
     * Enable terminal length and width automatically (not work if width or length set to 0)
     */
    autoSize?: pulumi.Input<number>;
    /**
     * Enable command line editing
     */
    editing?: pulumi.Input<number>;
    gslbCfg?: pulumi.Input<inputs.TerminalGslbCfg>;
    historyCfg?: pulumi.Input<inputs.TerminalHistoryCfg>;
    /**
     * Set interval for closing connection when there is no input detected (Timeout in minutes, 0 means never timeout, default
     * is 15)
     */
    idleTimeout?: pulumi.Input<number>;
    /**
     * Set number of lines on a screen(0 for no pausing) (Number of lines on screen, 0 for no pausing, default is 24)
     */
    length?: pulumi.Input<number>;
    promptCfg?: pulumi.Input<inputs.TerminalPromptCfg>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Set width of the display terminal (Number of characters on a screen line, 0 means infinite, default is 80)
     */
    width?: pulumi.Input<number>;
}
