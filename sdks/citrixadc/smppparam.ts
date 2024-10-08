// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Smppparam extends pulumi.CustomResource {
    /**
     * Get an existing Smppparam resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmppparamState, opts?: pulumi.CustomResourceOptions): Smppparam {
        return new Smppparam(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/smppparam:Smppparam';

    /**
     * Returns true if the given object is an instance of Smppparam.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Smppparam {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Smppparam.__pulumiType;
    }

    public readonly addrnpi!: pulumi.Output<number>;
    public readonly addrrange!: pulumi.Output<string>;
    public readonly addrton!: pulumi.Output<number>;
    public readonly clientmode!: pulumi.Output<string>;
    public readonly msgqueue!: pulumi.Output<string>;
    public readonly msgqueuesize!: pulumi.Output<number>;

    /**
     * Create a Smppparam resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SmppparamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SmppparamArgs | SmppparamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SmppparamState | undefined;
            resourceInputs["addrnpi"] = state ? state.addrnpi : undefined;
            resourceInputs["addrrange"] = state ? state.addrrange : undefined;
            resourceInputs["addrton"] = state ? state.addrton : undefined;
            resourceInputs["clientmode"] = state ? state.clientmode : undefined;
            resourceInputs["msgqueue"] = state ? state.msgqueue : undefined;
            resourceInputs["msgqueuesize"] = state ? state.msgqueuesize : undefined;
        } else {
            const args = argsOrState as SmppparamArgs | undefined;
            resourceInputs["addrnpi"] = args ? args.addrnpi : undefined;
            resourceInputs["addrrange"] = args ? args.addrrange : undefined;
            resourceInputs["addrton"] = args ? args.addrton : undefined;
            resourceInputs["clientmode"] = args ? args.clientmode : undefined;
            resourceInputs["msgqueue"] = args ? args.msgqueue : undefined;
            resourceInputs["msgqueuesize"] = args ? args.msgqueuesize : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Smppparam.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Smppparam resources.
 */
export interface SmppparamState {
    addrnpi?: pulumi.Input<number>;
    addrrange?: pulumi.Input<string>;
    addrton?: pulumi.Input<number>;
    clientmode?: pulumi.Input<string>;
    msgqueue?: pulumi.Input<string>;
    msgqueuesize?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Smppparam resource.
 */
export interface SmppparamArgs {
    addrnpi?: pulumi.Input<number>;
    addrrange?: pulumi.Input<string>;
    addrton?: pulumi.Input<number>;
    clientmode?: pulumi.Input<string>;
    msgqueue?: pulumi.Input<string>;
    msgqueuesize?: pulumi.Input<number>;
}
