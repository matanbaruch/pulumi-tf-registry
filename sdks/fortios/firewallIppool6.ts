// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallIppool6 extends pulumi.CustomResource {
    /**
     * Get an existing FirewallIppool6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallIppool6State, opts?: pulumi.CustomResourceOptions): FirewallIppool6 {
        return new FirewallIppool6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallIppool6:FirewallIppool6';

    /**
     * Returns true if the given object is an instance of FirewallIppool6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallIppool6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallIppool6.__pulumiType;
    }

    public readonly addNat46Route!: pulumi.Output<string>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly endip!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nat46!: pulumi.Output<string>;
    public readonly startip!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a FirewallIppool6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallIppool6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallIppool6Args | FirewallIppool6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallIppool6State | undefined;
            resourceInputs["addNat46Route"] = state ? state.addNat46Route : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["endip"] = state ? state.endip : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nat46"] = state ? state.nat46 : undefined;
            resourceInputs["startip"] = state ? state.startip : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as FirewallIppool6Args | undefined;
            if ((!args || args.endip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endip'");
            }
            if ((!args || args.startip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startip'");
            }
            resourceInputs["addNat46Route"] = args ? args.addNat46Route : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["endip"] = args ? args.endip : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nat46"] = args ? args.nat46 : undefined;
            resourceInputs["startip"] = args ? args.startip : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallIppool6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallIppool6 resources.
 */
export interface FirewallIppool6State {
    addNat46Route?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    endip?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nat46?: pulumi.Input<string>;
    startip?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallIppool6 resource.
 */
export interface FirewallIppool6Args {
    addNat46Route?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    endip: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nat46?: pulumi.Input<string>;
    startip: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
