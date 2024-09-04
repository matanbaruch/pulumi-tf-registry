// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NsxvDistributedFirewall extends pulumi.CustomResource {
    /**
     * Get an existing NsxvDistributedFirewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsxvDistributedFirewallState, opts?: pulumi.CustomResourceOptions): NsxvDistributedFirewall {
        return new NsxvDistributedFirewall(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/nsxvDistributedFirewall:NsxvDistributedFirewall';

    /**
     * Returns true if the given object is an instance of NsxvDistributedFirewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NsxvDistributedFirewall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NsxvDistributedFirewall.__pulumiType;
    }

    /**
     * Shows whether the NSX-V distributed firewall is enabled
     */
    public /*out*/ readonly enabled!: pulumi.Output<boolean>;
    /**
     * Ordered list of distributed firewall rules
     */
    public readonly rules!: pulumi.Output<outputs.NsxvDistributedFirewallRule[] | undefined>;
    /**
     * The ID of VDC
     */
    public readonly vdcId!: pulumi.Output<string>;

    /**
     * Create a NsxvDistributedFirewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsxvDistributedFirewallArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsxvDistributedFirewallArgs | NsxvDistributedFirewallState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsxvDistributedFirewallState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["vdcId"] = state ? state.vdcId : undefined;
        } else {
            const args = argsOrState as NsxvDistributedFirewallArgs | undefined;
            if ((!args || args.vdcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vdcId'");
            }
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["vdcId"] = args ? args.vdcId : undefined;
            resourceInputs["enabled"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NsxvDistributedFirewall.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NsxvDistributedFirewall resources.
 */
export interface NsxvDistributedFirewallState {
    /**
     * Shows whether the NSX-V distributed firewall is enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Ordered list of distributed firewall rules
     */
    rules?: pulumi.Input<pulumi.Input<inputs.NsxvDistributedFirewallRule>[]>;
    /**
     * The ID of VDC
     */
    vdcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NsxvDistributedFirewall resource.
 */
export interface NsxvDistributedFirewallArgs {
    /**
     * Ordered list of distributed firewall rules
     */
    rules?: pulumi.Input<pulumi.Input<inputs.NsxvDistributedFirewallRule>[]>;
    /**
     * The ID of VDC
     */
    vdcId: pulumi.Input<string>;
}
