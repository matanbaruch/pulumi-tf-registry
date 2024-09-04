// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallSecuritypolicyMove extends pulumi.CustomResource {
    /**
     * Get an existing FirewallSecuritypolicyMove resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallSecuritypolicyMoveState, opts?: pulumi.CustomResourceOptions): FirewallSecuritypolicyMove {
        return new FirewallSecuritypolicyMove(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallSecuritypolicyMove:FirewallSecuritypolicyMove';

    /**
     * Returns true if the given object is an instance of FirewallSecuritypolicyMove.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallSecuritypolicyMove {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallSecuritypolicyMove.__pulumiType;
    }

    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly move!: pulumi.Output<string>;
    public readonly policyidDst!: pulumi.Output<number>;
    public readonly policyidSrc!: pulumi.Output<number>;
    public readonly statePolicySrcdstPos!: pulumi.Output<string | undefined>;
    public readonly vdomparam!: pulumi.Output<string | undefined>;

    /**
     * Create a FirewallSecuritypolicyMove resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallSecuritypolicyMoveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallSecuritypolicyMoveArgs | FirewallSecuritypolicyMoveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallSecuritypolicyMoveState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["move"] = state ? state.move : undefined;
            resourceInputs["policyidDst"] = state ? state.policyidDst : undefined;
            resourceInputs["policyidSrc"] = state ? state.policyidSrc : undefined;
            resourceInputs["statePolicySrcdstPos"] = state ? state.statePolicySrcdstPos : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallSecuritypolicyMoveArgs | undefined;
            if ((!args || args.move === undefined) && !opts.urn) {
                throw new Error("Missing required property 'move'");
            }
            if ((!args || args.policyidDst === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyidDst'");
            }
            if ((!args || args.policyidSrc === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyidSrc'");
            }
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["move"] = args ? args.move : undefined;
            resourceInputs["policyidDst"] = args ? args.policyidDst : undefined;
            resourceInputs["policyidSrc"] = args ? args.policyidSrc : undefined;
            resourceInputs["statePolicySrcdstPos"] = args ? args.statePolicySrcdstPos : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallSecuritypolicyMove.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallSecuritypolicyMove resources.
 */
export interface FirewallSecuritypolicyMoveState {
    comment?: pulumi.Input<string>;
    move?: pulumi.Input<string>;
    policyidDst?: pulumi.Input<number>;
    policyidSrc?: pulumi.Input<number>;
    statePolicySrcdstPos?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallSecuritypolicyMove resource.
 */
export interface FirewallSecuritypolicyMoveArgs {
    comment?: pulumi.Input<string>;
    move: pulumi.Input<string>;
    policyidDst: pulumi.Input<number>;
    policyidSrc: pulumi.Input<number>;
    statePolicySrcdstPos?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
