// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FirewallObjectVip extends pulumi.CustomResource {
    /**
     * Get an existing FirewallObjectVip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallObjectVipState, opts?: pulumi.CustomResourceOptions): FirewallObjectVip {
        return new FirewallObjectVip(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/firewallObjectVip:FirewallObjectVip';

    /**
     * Returns true if the given object is an instance of FirewallObjectVip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallObjectVip {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallObjectVip.__pulumiType;
    }

    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly extintf!: pulumi.Output<string>;
    public readonly extip!: pulumi.Output<string>;
    public readonly extport!: pulumi.Output<string>;
    public readonly mappedips!: pulumi.Output<string[]>;
    public readonly mappedport!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly portforward!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string>;

    /**
     * Create a FirewallObjectVip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallObjectVipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallObjectVipArgs | FirewallObjectVipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallObjectVipState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["extintf"] = state ? state.extintf : undefined;
            resourceInputs["extip"] = state ? state.extip : undefined;
            resourceInputs["extport"] = state ? state.extport : undefined;
            resourceInputs["mappedips"] = state ? state.mappedips : undefined;
            resourceInputs["mappedport"] = state ? state.mappedport : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portforward"] = state ? state.portforward : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
        } else {
            const args = argsOrState as FirewallObjectVipArgs | undefined;
            if ((!args || args.extip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extip'");
            }
            if ((!args || args.mappedips === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappedips'");
            }
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["extintf"] = args ? args.extintf : undefined;
            resourceInputs["extip"] = args ? args.extip : undefined;
            resourceInputs["extport"] = args ? args.extport : undefined;
            resourceInputs["mappedips"] = args ? args.mappedips : undefined;
            resourceInputs["mappedport"] = args ? args.mappedport : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portforward"] = args ? args.portforward : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallObjectVip.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallObjectVip resources.
 */
export interface FirewallObjectVipState {
    comment?: pulumi.Input<string>;
    extintf?: pulumi.Input<string>;
    extip?: pulumi.Input<string>;
    extport?: pulumi.Input<string>;
    mappedips?: pulumi.Input<pulumi.Input<string>[]>;
    mappedport?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    portforward?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FirewallObjectVip resource.
 */
export interface FirewallObjectVipArgs {
    comment?: pulumi.Input<string>;
    extintf?: pulumi.Input<string>;
    extip: pulumi.Input<string>;
    extport?: pulumi.Input<string>;
    mappedips: pulumi.Input<pulumi.Input<string>[]>;
    mappedport?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    portforward?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}
