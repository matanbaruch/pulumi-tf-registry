// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Snmpalarm extends pulumi.CustomResource {
    /**
     * Get an existing Snmpalarm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpalarmState, opts?: pulumi.CustomResourceOptions): Snmpalarm {
        return new Snmpalarm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/snmpalarm:Snmpalarm';

    /**
     * Returns true if the given object is an instance of Snmpalarm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Snmpalarm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Snmpalarm.__pulumiType;
    }

    public readonly logging!: pulumi.Output<string>;
    public readonly normalvalue!: pulumi.Output<number>;
    public readonly severity!: pulumi.Output<string>;
    public readonly state!: pulumi.Output<string>;
    public readonly thresholdvalue!: pulumi.Output<number>;
    public readonly time!: pulumi.Output<number>;
    public readonly trapname!: pulumi.Output<string>;

    /**
     * Create a Snmpalarm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SnmpalarmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpalarmArgs | SnmpalarmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpalarmState | undefined;
            resourceInputs["logging"] = state ? state.logging : undefined;
            resourceInputs["normalvalue"] = state ? state.normalvalue : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["thresholdvalue"] = state ? state.thresholdvalue : undefined;
            resourceInputs["time"] = state ? state.time : undefined;
            resourceInputs["trapname"] = state ? state.trapname : undefined;
        } else {
            const args = argsOrState as SnmpalarmArgs | undefined;
            resourceInputs["logging"] = args ? args.logging : undefined;
            resourceInputs["normalvalue"] = args ? args.normalvalue : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["thresholdvalue"] = args ? args.thresholdvalue : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["trapname"] = args ? args.trapname : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Snmpalarm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Snmpalarm resources.
 */
export interface SnmpalarmState {
    logging?: pulumi.Input<string>;
    normalvalue?: pulumi.Input<number>;
    severity?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    thresholdvalue?: pulumi.Input<number>;
    time?: pulumi.Input<number>;
    trapname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Snmpalarm resource.
 */
export interface SnmpalarmArgs {
    logging?: pulumi.Input<string>;
    normalvalue?: pulumi.Input<number>;
    severity?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    thresholdvalue?: pulumi.Input<number>;
    time?: pulumi.Input<number>;
    trapname?: pulumi.Input<string>;
}
