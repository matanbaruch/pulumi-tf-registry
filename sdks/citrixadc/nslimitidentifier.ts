// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Nslimitidentifier extends pulumi.CustomResource {
    /**
     * Get an existing Nslimitidentifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NslimitidentifierState, opts?: pulumi.CustomResourceOptions): Nslimitidentifier {
        return new Nslimitidentifier(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/nslimitidentifier:Nslimitidentifier';

    /**
     * Returns true if the given object is an instance of Nslimitidentifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Nslimitidentifier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Nslimitidentifier.__pulumiType;
    }

    public readonly limitidentifier!: pulumi.Output<string>;
    public readonly limittype!: pulumi.Output<string>;
    public readonly maxbandwidth!: pulumi.Output<number>;
    public readonly mode!: pulumi.Output<string>;
    public readonly selectorname!: pulumi.Output<string>;
    public readonly threshold!: pulumi.Output<number>;
    public readonly timeslice!: pulumi.Output<number>;
    public readonly trapsintimeslice!: pulumi.Output<number>;

    /**
     * Create a Nslimitidentifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NslimitidentifierArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NslimitidentifierArgs | NslimitidentifierState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NslimitidentifierState | undefined;
            resourceInputs["limitidentifier"] = state ? state.limitidentifier : undefined;
            resourceInputs["limittype"] = state ? state.limittype : undefined;
            resourceInputs["maxbandwidth"] = state ? state.maxbandwidth : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["selectorname"] = state ? state.selectorname : undefined;
            resourceInputs["threshold"] = state ? state.threshold : undefined;
            resourceInputs["timeslice"] = state ? state.timeslice : undefined;
            resourceInputs["trapsintimeslice"] = state ? state.trapsintimeslice : undefined;
        } else {
            const args = argsOrState as NslimitidentifierArgs | undefined;
            if ((!args || args.limitidentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'limitidentifier'");
            }
            resourceInputs["limitidentifier"] = args ? args.limitidentifier : undefined;
            resourceInputs["limittype"] = args ? args.limittype : undefined;
            resourceInputs["maxbandwidth"] = args ? args.maxbandwidth : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["selectorname"] = args ? args.selectorname : undefined;
            resourceInputs["threshold"] = args ? args.threshold : undefined;
            resourceInputs["timeslice"] = args ? args.timeslice : undefined;
            resourceInputs["trapsintimeslice"] = args ? args.trapsintimeslice : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Nslimitidentifier.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Nslimitidentifier resources.
 */
export interface NslimitidentifierState {
    limitidentifier?: pulumi.Input<string>;
    limittype?: pulumi.Input<string>;
    maxbandwidth?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
    selectorname?: pulumi.Input<string>;
    threshold?: pulumi.Input<number>;
    timeslice?: pulumi.Input<number>;
    trapsintimeslice?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Nslimitidentifier resource.
 */
export interface NslimitidentifierArgs {
    limitidentifier: pulumi.Input<string>;
    limittype?: pulumi.Input<string>;
    maxbandwidth?: pulumi.Input<number>;
    mode?: pulumi.Input<string>;
    selectorname?: pulumi.Input<string>;
    threshold?: pulumi.Input<number>;
    timeslice?: pulumi.Input<number>;
    trapsintimeslice?: pulumi.Input<number>;
}
